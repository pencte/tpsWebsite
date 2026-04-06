/* NAV */
function show(id){
  document.querySelectorAll(".main > div").forEach(d=>d.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* API */
async function load(){
  let s=await fetch("/api/status").then(r=>r.json());
  document.getElementById("status").innerText =
    (s.online?"Online":"Offline")+" "+s.players;
}
setInterval(load,2000);

/* PLAYERS */
async function players(){
  let p=await fetch("/api/players").then(r=>r.json());
  let html="";
  p.forEach(x=>{
    html+="<li>"+x.name+"</li>";
  });
  document.getElementById("playerList").innerHTML=html;
}
setInterval(players,2000);

/* LOG */
async function logs(){
  let l=await fetch("/api/logs").then(r=>r.json());
  let html="";
  l.forEach(x=>{
    html+="<div>"+x+"</div>";
  });
  document.getElementById("logBox").innerHTML=html;
}
setInterval(logs,2000);

/* ADMIN */
async function send(){
  let cmd=document.getElementById("cmd").value;
  await fetch("/api/command",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({cmd})
  });
}

/* CURSOR */
document.addEventListener("mousemove",e=>{
  let c=document.getElementById("cursor");
  c.style.left=e.clientX+"px";
  c.style.top=e.clientY+"px";
});

/* PARALLAX */
document.addEventListener("mousemove",e=>{
  let x=e.clientX/50;
  let y=e.clientY/50;
  document.getElementById("layer1").style.transform=`translate(${x}px,${y}px)`;
  document.getElementById("layer2").style.transform=`translate(${x*2}px,${y*2}px)`;
});

/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let part=[];
for(let i=0;i<80;i++){
  part.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    dx:Math.random()-0.5,
    dy:Math.random()-0.5
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  part.forEach(p=>{
    p.x+=p.dx;
    p.y+=p.dy;
    ctx.fillRect(p.x,p.y,2,2);
  });
  requestAnimationFrame(draw);
}
draw();
