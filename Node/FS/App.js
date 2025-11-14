// Ye line Node.js ka File System module (fs) import karti hai.
const fs = require('fs')


// Ye nayi file banata hai (agar pehle se nahi hai)
fs.writeFileSync('App.txt', 'Hello ')


// Ye file ke end me text add karta hai.
fs.appendFileSync('App.txt', 'Gopal Vasani')


// Ye file ka content read karta hai aur a variable me store karta hai. Default me ye Buffer return karta hai (binary data).
a = fs.readFileSync('App.txt')
// console.log(a);


// Ye file ke andar ka content text (string) ke form me print karta hai.
console.log(a.toString());


// Ye file ka naam change (rename) karta hai.
fs.renameSync('App.txt', 'Test.txt')    


// Ye file ko delete (remove) kar deta hai.
fs.unlinkSync('Test.txt')