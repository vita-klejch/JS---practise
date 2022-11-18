const buttons = document.querySelectorAll("button[data-time]");
const timer = document.querySelector(".display__time-left");
const endtime = document.querySelector(".display__end-time");

const input = document.querySelector('input[type="text"]');
const customForm = document.querySelector("#custom");

let timeNow;
let myInterval;

function setEndTime(seconds) {
  myTime = Date.now();
  futureTime = new Date(myTime + seconds * 1000);
  const hour = futureTime.getHours();
  const min = futureTime.getMinutes();
  const answer = `${hour}:${min < 10 ? "0" + min : min}`;
  endtime.innerText = "Be back at " + answer;
}

function handleDisplay(timeStamp, timerTime) {
  const timeNow = new Date();
  seconds = timerTime - Math.floor((timeNow - timeStamp) / 1000);
  timer.innerText = formatTime(seconds);
  seconds <= 0 ? clearInterval(myInterval) : null;
}

// helper function - returns corect time format
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

function handleTimer(timeToSet) {
  console.log("handling TIMER");
  const timeStamp = new Date();
  setEndTime(timeToSet);
  myInterval ? clearInterval(myInterval) : "";
  timer.innerText = formatTime(timeToSet);
  myInterval = setInterval(() => handleDisplay(timeStamp, timeToSet), 1000);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleTimer(e.target.dataset.time);
  });
});
customForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleTimer(input.value * 60);
});
