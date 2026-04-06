/* NAV */
function show(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  event.target.classList.add("active");
}

/* HOW TAB */
function showHow(type){
  document.querySelectorAll(".howContent").forEach(el=>el.classList.add("hidden"));
  document.getElementById(type).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  event.target.classList.add("active");
}

/* TOAST */
function showToast(text){
  const toast=document.getElementById("toast");
  toast.innerText=text;
  toast.classList.add("show");

  setTimeout(()=>{
    toast.classList.remove("show");
  },2000);
}

/* COPY */
function copyText(type){
  let text="";

  if(type==="PTUNNEL_URL"){
    text="https://gtpshost.com/raw/GrowtopiaFS";
  }

  if(type==="SURGE_URL"){
    text="https://gtpshost.com/raw/GrowtopiaFS";
  }

  navigator.clipboard.writeText(text);

  const btn=event.target;
  const original=btn.innerText;

  btn.innerText="Copied!";
  btn.classList.add("copied");

  showToast("Copied to clipboard 🚀");

  setTimeout(()=>{
    btn.innerText=original;
    btn.classList.remove("copied");
  },1500);
}

/* DOWNLOAD */
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

/* FAKE STATUS */
function fakeStatus(){
  let players=Math.floor(Math.random()*100);

  document.getElementById("status").innerText="Online";
  document.getElementById("players").innerText=players;
}

setInterval(fakeStatus,2000);

/* PLAY */
document.querySelector(".play").onclick=()=>{
  showToast("Launcher coming soon 🎮");
};
