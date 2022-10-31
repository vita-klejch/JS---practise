const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

var canvasInterval = null;
var fps = 60;

function takePhoto() {
  console.log("NOW take a photo");
  snap.play();
  var myImage = canvas.toDataURL("image/png");
  const img = document.createElement("img");
  const link = document.createElement("a");
  img.src = myImage;
  link.href = myImage;
  link.download = "awesome-image";
  link.appendChild(img);
  strip.appendChild(link);
}

var streamContraints = {
  audio: false,
  // video: { width: 1920, height: 1080 },
  video: { width: 1280, height: 720 },
};

if (video) {
  navigator.mediaDevices
    .getUserMedia(streamContraints)
    .then(gotStream)
    .catch(function (e) {
      if (
        confirm(
          "An error with camera occured:(" + e.name + ") Do you want to reload?"
        )
      ) {
        location.reload();
      }
    });
}
//if stream found
function gotStream(stream) {
  video.srcObject = stream;
  video.play();
}

function drawImage(video) {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  // ctx.filter = "hue-rotate(100deg)";
  ctx.filter = "hue-rotate(100deg) saturate(200%)";
}
canvasInterval = window.setInterval(() => {
  drawImage(video);
}, 1000 / fps);
