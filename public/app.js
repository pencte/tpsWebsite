function show(id, el){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  if(el) el.classList.add("active");
}

function showHow(type){
  document.querySelectorAll(".howContent").forEach(c=>c.classList.add("hidden"));
  document.getElementById(type).classList.remove("hidden");
}

/* COPY */
function copyText(btn){
  const url=location.origin+"/raw/terorismeps";
  navigator.clipboard.writeText(url);

  showToast("Copied URL");
}

/* DOWNLOAD */
function downloadFile(url){
  const a=document.createElement("a");
  a.href=url;
  a.click();
  showToast("Downloading...");
}

/* TOAST */
function showToast(text){
  const t=document.getElementById("toast");
  t.innerText=text;
  t.style.opacity=1;
  setTimeout(()=>t.style.opacity=0,2000);
}

/* STATUS */
setInterval(()=>{
  document.getElementById("status").innerText="ONLINE";
  document.getElementById("players").innerText=Math.floor(Math.random()*200);
},2000);

/* CAROUSEL */
const preview=document.getElementById("preview");
let i=0;

setInterval(()=>{
  if(!preview) return;
  i++;
  preview.scrollTo({left:i*260,behavior:"smooth"});
  if(i>5) i=0;
},3000);
