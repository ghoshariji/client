const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const twilio = require("twilio");
const helmet = require('helmet');
app.use(helmet());

app.use(cors());

app.use(express.json());


dotenv.config({
    path:"./config.env"
})
require("./db/conn");
const User = require("./model/userSchema")






const middleWare = (req, res, next) => {
    console.log(`from middleware`);
    next();
  };
  

app.get("/",(req,res)=>{
    res.status(200).send("From the server side!");
})

async function sendSMS(phone) {
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    return client.messages
        .create({ body: "Hey!, welcome to my website", from: '+13302997401', to:"+91"+phone})
        .then((mesg) => {
            console.log(mesg);
        })
        .catch((err) => {
            console.log("error" + err);
        });
}



app.post("/contact",(req,res)=>{

//   console.log(req.body);


const {name, phone, about} = req.body;

if(!name)
{
    return res.status(422).json({error:"Plz filled all require filled name"});
}
if(!phone)
{
    return res.status(422).json({error:"Plz filled all require filled phone"});
}
if(!about)
{
    return res.status(422).json({error:"Plz filled all require filled text"});
}

sendSMS(phone);
const user =  new User({name, phone, about});

user.save()
.then(()=>{
    
    res.status(201).json({mesg:"Submitted Succesfully"});
}).catch((err)=>{
    res.status(500).json({Error: "Submitted Failed"});
})



})



app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})
