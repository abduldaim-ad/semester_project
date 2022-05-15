const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/onlineShoppingDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    inputName: String,
    inputEmail: String,
    inputPassword: String,
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/signin",(req,res)=>{
    const {email, password} = req.body 
    console.log(req.body)
    // console.log("Test...")
    // console.log(inputEmail)
    // console.log(inputPassword)
    console.log(email)
    console.log(password)
    User.findOne({inputEmail: email}, (err, user)=>{
        
        // console.log(user.inputPassword)
        console.log("Test.......")
        console.log(user)
        if(user){
            if(password === user.inputPassword){
                res.send({message: "Login Successful", user: user})
            }else{
                res.send({message: "Password did not match"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})

app.post("/signup",(req,res)=>{
    //res.send("My API Sign Up")
    const {inputName, inputEmail, inputPassword}  = req.body
    // console.log(req.body)
    // console.log(inputName)
    // console.log(inputEmail)
    // console.log(inputPassword)
    User.findOne({inputEmail: inputEmail}, (err, user)=>{
        if(user){
            res.send({message: "User already registered"})
        }
        else{
            const user = new User({
                inputName,
                inputEmail,
                inputPassword
            })
            console.log(user)
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message: "Successfully Signed Up"})
                }
            })
        }
    })
})

app.listen(9002, ()=>{
    console.log("Successfully started at port 9002")
})