import cron from 'cron';
import https from 'https';

const backendUrl= "https://chat-app-s53k.onrender.com"

const job = new cron.CronJob('*/14 * * * *',function (){

  console.log('Restarting server');

https.get(backendUrl,(res)=>{

  if(res.statusCode == 200){
    console.log("Server Restarted");
  }else{
    console.error("Failed to restart");
  }
})
.on('error',(err)=>{
  console.log("Error during restart",err.message);
})
})

export default job;