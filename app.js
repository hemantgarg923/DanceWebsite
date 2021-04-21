const express = require("express");
const path = require("path");
// const fs = require("fs");

// const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});

const app = express();
const port = 80;

// const contactSchema = new mongoose.Schema({
//     name: String,
//     age: String,
//     gender: String,
//     email: String,
//     phone: String,
//   });

// const Contact = mongoose.model('contact', contactSchema);  

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render("index.pug", params)
})

// app.post('/', (req, res)=>{
//     var myData = new Contact(req.body);
//     myData.save().then(()=>{
//     res.send("This item has been saved to the database")
//     }).catch(()=>{
//     res.status(400).send("item was not saved to the databse")
//     })
// })

// app.post('/', (req, res)=>{
//     // console.log(req.body);
//     name = req.body.Name
//     age = req.body.Age
//     gender = req.body.Gender
//     email = req.body.email
//     phone = req.body.phone

//     let outputToWrite = `name is ${name} & age is ${age} & gender is ${gender} & email is ${email} & phone is ${phone}`
//     fs.writeFileSync("output.txt", outputToWrite)
//     const params = {"message" : "your form has been submitted successfully"}
//     res.status(200).render("index.pug", params)
// })

app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
});