const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ================= DATABASE SIMULASI ================= */
let players = [];
let logs = [];
let online = true;

/* INIT PLAYER */
function generatePlayers(){
  players = [];
  for(let i=0;i<10;i++){
    players.push({
      name:"Player"+i,
      status:"Online"
    });
  }
}
generatePlayers();

/* ================= API ================= */
app.get("/api/status",(req,res)=>{
  res.json({
    online,
    players:players.length,
    uptime:process.uptime()
  });
});

app.get("/api/players",(req,res)=>{
  res.json(players);
});

app.get("/api/logs",(req,res)=>{
  res.json(logs);
});

app.post("/api/command",(req,res)=>{
  const {cmd} = req.body;

  logs.push("> "+cmd);

  if(cmd==="kickall"){
    players=[];
    logs.push("> all players kicked");
  }

  res.json({success:true});
});

/* ================= SIMULATION ================= */
setInterval(()=>{
  if(players.length < 50){
    players.push({
      name:"User"+Math.floor(Math.random()*9999),
      status:"Online"
    });
  }

  logs.push("> player joined");

  if(logs.length>100) logs.shift();

},4000);

/* ================= START ================= */
app.listen(PORT,()=>{
  console.log("RUNNING http://localhost:"+PORT);
});
