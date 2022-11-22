const play = document.querySelector(".player__button.toggle");
const prev10s = document.querySelector("[data-skip='-10']");
const next25 = document.querySelector("[data-skip='25']");
const volume = document.querySelector("[name='volume']");
const playbackRate = document.querySelector("[name='playbackRate']");
const video = document.querySelector("video");
const progress = document.querySelector(".progress");
const progressFill = document.querySelector(".progress__filled");

function togglePlay() {
  if (video.paused) {
    play.textContent = "❚❚";
    video.play();
  } else {
    play.textContent = "►";
    video.pause();
  }
}

function volumeChange() {
  video.volume = volume.value;
}
function playbackChange() {
  video.playbackRate = playbackRate.value;
}

function changeProgressBar() {
  const time = video.duration;
  let x = (video.currentTime / video.duration) * 100;
  progressFill.style.flexBasis = `${x}%`;
}

function setProgressBar(e) {
  let newTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = newTime;
}

play.addEventListener("click", togglePlay);
prev10s.addEventListener("click", () => (video.currentTime -= 10));
next25.addEventListener("click", () => (video.currentTime += 25));
volume.addEventListener("input", () => (video.volume = volume.value));
playbackRate.addEventListener(
  "input",
  () => (video.playbackRate = playbackRate.value)
);
progress.addEventListener("click", (e) => setProgressBar(e));
progress.addEventListener("mousedown", (e) => setProgressBar(e));
video.addEventListener("timeupdate", changeProgressBar);
