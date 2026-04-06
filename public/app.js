/* NAV */
function show(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  event.target.classList.add("active");
}

/* HOW TAB */
function showHow(type){
  document.querySelectorAll(".howContent")
    .forEach(el=>el.classList.add("hidden"));

  document.getElementById(type)
    .classList.remove("hidden");

  document.querySelectorAll(".tab")
    .forEach(t=>t.classList.remove("active"));

  event.target.classList.add("active");
}

/* COPY */
function copyText(type){
  let text = "";

  if(type === "PTUNNEL_URL"){
    text = "https://gtpshost.com/raw/GrowtopiaFS";
  }

  if(type === "SURGE_URL"){
    text = "https://gtpshost.com/raw/GrowtopiaFS";
  }

  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}

/* FAKE STATUS */
function fakeStatus(){
  let players = Math.floor(Math.random()*100);

  document.getElementById("status").innerText = "Online";
  document.getElementById("players").innerText = players;
}

setInterval(fakeStatus,2000);

/* PLAY */
document.querySelector(".play").onclick = ()=>{
  alert("Launcher coming soon...");
};
