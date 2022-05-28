import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import sgMail from '@sendgrid/mail';
import postRoutes from './route/notification.js'


const app=express();

//app.get('/', async (req,res) => {
 // const db = await mongoClient();
  //if (!db) res.status(500).send('Systems Unavailable');

  //const { data } = await axios.get('https://goweather.herokuapp.com/weather/california');
  //await db.collection('notification').insertOne(data);


 // return res.send(data);
//});
const port= process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Notifications',postRoutes);


app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri);
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongoDB database conncetion established successfully");
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendMail=async (msg)=>{
  try{
       await sgMail.send(msg);
       console.log("Message sent successfully!");
  }
  catch(error){
       console.error(error);
       if(error.response){
         console.error(error.response.body);
       }
  }
};
sendMail({
  to:"abouwardf@gmail.com",
  from:"rabbitmarket2022@gmail.com",
  subject:" NodeJs says hello!",
  text:"Its really easy!",
  html:"<skl>Hello Ferry!</skl>"
});

app.listen(port,()=>{
  console.log(`Server is running on port: ${port}`);
})
//app.listen(3000);