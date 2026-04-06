
/* NAV */
function show(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"));
  event.target.classList.add("active");
}

/* FAKE STATUS (sementara) */
function fakeStatus(){
  let players = Math.floor(Math.random()*100);

  document.getElementById("status").innerText = "Online";
  document.getElementById("players").innerText = players;
}

setInterval(fakeStatus,2000);

/* PLAY BUTTON */
document.querySelector(".play").onclick = ()=>{
  alert("Launcher coming soon...");
};
