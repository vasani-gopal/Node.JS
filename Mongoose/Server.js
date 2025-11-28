const express = require('express')
const db = require('./config/db')
const multer = require("multer")
const path = require("path")
const user = require('./usemodel/usermodel')

const app = express()

app.use("/upload", express.static(path.join(__dirname, "upload")));

// ---------------- Middlewares ------------------

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const ImageUpload = multer({ storage: storage }).single("image")

// ---------------- INSERT DATA (File + Form) ------------------

app.post('/insertData', ImageUpload, async (req, res) => {
    const { username, password } = req.body
    let image = ""

    if (req.file) {
        image = req.file.filename
    }

    await user.create({
        username,
        password,
        image
    })
        .then((data) => {
            console.log("Inserted:", data)
            res.redirect("/")           // ✅ ADD redirect
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
})



// ------------------ HOME PAGE DATA SHOW ---------------------

app.get('/', async (req, res) => {
    await user.find({})
        .then((data) => {
            res.render("home", { data })   // ✅ Only render
        })
        .catch((err) => {
            console.log(err)
        })
})



// ------------------ DELETE USER ---------------------
// app.delete("/:id", async (req, res) => {
//     try {
//         const id = req.params.id
//         await user.findByIdAndDelete(id)
//         res.send("success")
//     } catch (err) {
//         res.send(err)
//     }
// })


// ------------------ UPDATE USER ---------------------
// app.patch("/:id", async (req, res) => {
//     try {
//         const id = req.params.id
//         await user.findByIdAndUpdate(id, req.body)
//         res.send("success")
//     } catch (err) {
//         res.send(err)
//     }
// })


// ----------------- Your commented code kept as is ------------------

// app.post('/insertData', async (req, res) => {
//     try {
//         const data = await user.create(req.body)
//         res.send(data)
//     } catch (err) {
//         res.send(err)
//     }
// })

// app.post("/edit", async (req, res) => {
//     const body = req.body;
//     await user.create(body);
//     res.send("edit success");
// });


// ------------------ SERVER --------------------------
app.listen(8000, () => {
    console.log("server listen")
})