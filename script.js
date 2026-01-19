function updateClock(){
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
  
  const hour = now.getHours();
  const isOpen = hour >= 9 && hour < 20;
  const badge = document.getElementById("openStatus");
  badge.innerText = isOpen ? "OPEN NOW" : "CLOSED";
  badge.style.background = isOpen ? "green" : "red";
}
setInterval(updateClock,1000);
updateClock();

document.getElementById("bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMsg").innerText =
    "Your request has been submitted. Please wait for a call/text to confirm.";
});
