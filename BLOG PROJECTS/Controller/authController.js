const {users, sessions, todos} = require("../Model/userModel");

exports.registerPage = (req, res) => {
    const success = req.query.success;
    res.render("register", { message: success === '1' ? 'Registration successful! Please login.' : null });
};

exports.registerUser = (req, res) => {
    const { username, password } = req.body;

    if (users[username]) {
        return res.send("User already exists");
    }

    users[username] = { password };
    todos[username] = [];
    res.redirect("/login?success=1");
};

exports.loginPage = (req, res) => {
    const success = req.query.success;
    res.render("login", { message: success === '1' ? 'Registration successful! Please login.' : null });
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;

    if (!users[username] || users[username].password !== password) {
        return res.send("Invalid credentials");
    }

    const sessionId = Date.now().toString(36);
    sessions[sessionId] = username;

    console.log('Session created for user:', username);
    console.log('Session ID:', sessionId);
    
    res.cookie("session", sessionId, { 
        httpOnly: true, 
        secure: false,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });
    
    console.log('Cookie set, redirecting to /todo');
    res.redirect("/todo");
};



exports.logoutUser = (req, res) => {
    const sid = req.cookies.session;
    if (sid) delete sessions[sid];
    res.clearCookie("session");
    res.redirect("/login");
};
