function show(id, el){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  el.classList.add("active");
}

function showHow(type, el){
  document.querySelectorAll(".howContent").forEach(elm=>elm.classList.add("hidden"));
  document.getElementById(type).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  el.classList.add("active");
}

function showToast(text){
  const toast=document.getElementById("toast");
  toast.innerText=text;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2000);
}

function copyText(type, btn){
  const url=window.location.origin+"/raw/terorismeps";
  navigator.clipboard.writeText(url);

  const original=btn.innerText;
  btn.innerText="Copied!";
  btn.classList.add("copied");

  showToast("Copied URL 🚀");

  setTimeout(()=>{
    btn.innerText=original;
    btn.classList.remove("copied");
  },1500);
}

function downloadFile(url,name,btn){
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

/* AUTO SLIDE */
const preview=document.getElementById("preview");
let scrollAmount=0;
let autoSlide=true;

function slidePreview(){
  if(!preview || !autoSlide) return;

  scrollAmount+=275;

  if(scrollAmount>=preview.scrollWidth-preview.clientWidth){
    scrollAmount=0;
  }

  preview.scrollTo({left:scrollAmount,behavior:"smooth"});
}

setInterval(slidePreview,2500);

if(preview){
  preview.addEventListener("mouseenter",()=>autoSlide=false);
  preview.addEventListener("mouseleave",()=>autoSlide=true);
  preview.addEventListener("touchstart",()=>autoSlide=false);
  preview.addEventListener("touchend",()=>setTimeout(()=>autoSlide=true,2000));
}

/* STATUS */
setInterval(()=>{
  document.getElementById("status").innerText="Online";
  document.getElementById("players").innerText=Math.floor(Math.random()*100);
},2000);
