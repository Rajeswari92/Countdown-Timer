const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
function UpdateTime() {
  const currentYear = new Date().getFullYear();
  const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
  const currentDate = new Date();
  const diff = newYear - currentDate;
  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minute = Math.floor((diff / 1000 / 60) % 60);
  const second = Math.floor((diff / 1000) % 60);
  days.innerHTML = day < 10 ? "0" + day : day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;
}

setInterval(UpdateTime, 1000);
