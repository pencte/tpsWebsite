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
  btn.classList.add("copied");

  showToast("Copied URL 🚀");

  setTimeout(()=>{
    btn.innerText=original;
    btn.classList.remove("copied");
  },1500);
}

function downloadFile(url,name){
  const btn=event.target;
  const original=btn.innerText;

  btn.innerText="Downloading...";
  btn.classList.add("downloading");

  const a=document.createElement("a");
  a.href=url;
  a.download=name;

  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(()=>{
    btn.innerText="Done ✔";
    btn.classList.remove("downloading");
    btn.classList.add("done");

    showToast("Download started 🚀");

    setTimeout(()=>{
      btn.innerText=original;
      btn.classList.remove("done");
    },2000);

  },1000);
}

setInterval(()=>{
  document.getElementById("status").innerText="Online";
  document.getElementById("players").innerText=Math.floor(Math.random()*100);
},2000);

document.querySelector(".play").onclick=()=>{
  showToast("Launcher coming soon 🎮");
};

/* TAMBAHAN: AUTO SLIDE PREVIEW */
const preview=document.getElementById("preview");

if(preview){
  let i=0;
  setInterval(()=>{
    i++;
    if(i>=preview.children.length) i=0;

    preview.scrollTo({
      left:preview.children[i].offsetLeft,
      behavior:"smooth"
    });
  },3000);
}
