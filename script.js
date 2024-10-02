let currentTimeElement = document.getElementById('time');
setInterval(() => {
   let currentTime = new Date();
   let hours = String(currentTime.getHours()).padStart(2, '0');
   let minutes = String(currentTime.getMinutes()).padStart(2, '0');
   let seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
   currentTimeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
