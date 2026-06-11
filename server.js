//========== importing modules or packages
const app=require('./app');
const dotenv=require('dotenv');
dotenv.config({path:'./conf.env'});

//========declaring our variables 
const port=process.env.PORT;

//===== starting our server
app.listen(port,()=>{
    console.log(' \n App is running on http://127.0.0.1:'+port +'\n');  
})