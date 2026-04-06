function show(id, el){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  el.classList.add("active");
}

function showHow(type, el){
  document.querySelectorAll(".howContent").forEach(c=>c.classList.add("hidden"));
  document.getElementById(type).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  el.classList.add("active");
}

function showToast(text){
  const t=document.getElementById("toast");
  t.innerText=text;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2000);
}

function copyText(btn){
  const url=window.location.origin+"/raw/terorismeps";
  navigator.clipboard.writeText(url);

  btn.innerText="Copied!";
  showToast("Copied URL");
  setTimeout(()=>btn.innerText="Copy",1500);
}

function downloadFile(url,name){
  const a=document.createElement("a");
  a.href=url;
  a.download=name;
  a.click();
  showToast("Download started");
}

/* CAROUSEL */
const preview=document.getElementById("preview");
const dots=document.getElementById("dots");
let index=0;

if(preview){
  const imgs=preview.children;

  for(let i=0;i<imgs.length;i++){
    let d=document.createElement("div");
    if(i===0) d.classList.add("active");
    dots.appendChild(d);
  }

  function slide(){
    index++;
    if(index>=imgs.length) index=0;

    preview.scrollTo({
      left:imgs[index].offsetLeft,
      behavior:"smooth"
    });

    [...dots.children].forEach(d=>d.classList.remove("active"));
    dots.children[index].classList.add("active");
  }

  setInterval(slide,3000);
}

/* STATUS */
setInterval(()=>{
  document.getElementById("status").innerText="Online";
  document.getElementById("players").innerText=Math.floor(Math.random()*200);
},2000);
