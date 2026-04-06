function show(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  event.target.classList.add("active");
}

function showHow(type){
  document.querySelectorAll(".howContent").forEach(el=>el.classList.add("hidden"));
  document.getElementById(type).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  event.target.classList.add("active");
}

function showToast(text){
  const toast=document.getElementById("toast");
  toast.innerText=text;
  toast.classList.add("show");

  setTimeout(()=>toast.classList.remove("show"),2000);
}

function copyText(){
  const url = window.location.origin + "/raw/terorismeps";

  navigator.clipboard.writeText(url);

  const btn=event.target;
  const original=btn.innerText;

  btn.innerText="Copied!";
  showToast("Copied URL 🚀");

  setTimeout(()=>btn.innerText=original,1500);
}

function downloadFile(url,name){
  const btn=event.target;
  const original=btn.innerText;

  btn.innerText="Downloading...";

  const a=document.createElement("a");
  a.href=url;
  a.download=name;

  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(()=>{
    btn.innerText="Done ✔";
    showToast("Download started 🚀");

    setTimeout(()=>btn.innerText=original,2000);
  },1000);
}

/* STATUS */
setInterval(()=>{
  document.getElementById("status").innerText="Online";
  document.getElementById("players").innerText=Math.floor(Math.random()*100);
},2000);

/* PLAY BUTTON */
document.querySelector(".play").onclick=()=>{
  showToast("Launcher coming soon 🎮");
};

/* PREVIEW AUTO SLIDE */
const preview=document.getElementById("preview");
const dots=document.getElementById("dots");

if(preview){
  let index=0;
  const items=preview.children;

  for(let i=0;i<items.length;i++){
    const d=document.createElement("div");
    if(i===0)d.classList.add("active");
    dots.appendChild(d);
  }

  setInterval(()=>{
    index++;
    if(index>=items.length) index=0;

    preview.scrollTo({
      left:items[index].offsetLeft,
      behavior:"smooth"
    });

    [...dots.children].forEach(d=>d.classList.remove("active"));
    dots.children[index].classList.add("active");

  },3000);
}
