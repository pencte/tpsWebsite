function show(id, el){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));

  if(el) el.classList.add("active");
}

function showHow(type, el){
  document.querySelectorAll(".howContent").forEach(c=>c.classList.add("hidden"));
  document.getElementById(type).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  el.classList.add("active");
}

function copyText(){
  const url=window.location.origin+"/raw/terorismeps";
  navigator.clipboard.writeText(url);
  alert("Copied!");
}

function downloadFile(url,name){
  const a=document.createElement("a");
  a.href=url;
  a.download=name;
  a.click();
}

/* CAROUSEL */
const preview=document.getElementById("preview");
let x=0;
setInterval(()=>{
  if(!preview) return;
  x+=230;
  if(x>=preview.scrollWidth) x=0;
  preview.scrollTo({left:x,behavior:"smooth"});
},3000);

/* STATUS */
setInterval(()=>{
  document.getElementById("status").innerText="Online";
  document.getElementById("players").innerText=Math.floor(Math.random()*150);
},2000);
