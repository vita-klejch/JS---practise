// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
root = document.getElementById("roort");
function get_time() {
  today = new Date();
  //   console.log(today);
  day_names = [
    "nedele",
    "pondeli",
    "utery",
    "streda",
    "ctvrtek",
    "patek",
    "sobota",
  ];
  let day = today.getDay();
  // console.log(`Dnes je ${day_names[day]}`);
  let hour = today.getHours();
  prefix = "AM";
  if (hour > 12) {
    hour -= 12;
    prefix = "PM";
  }
  answer = `Aktualni cas je : ${hour} ${prefix} : ${today.getMinutes()} : ${today.getSeconds()}`;
  return answer;
}
root = document.getElementById("root");
function show_it() {
  time = get_time();
  root.innerHTML = time;
}
setInterval(show_it, 1000);

const root2 = document.getElementById("root2");
text = "x";
function add_letter() {
  text = text + "x";
  root2.innerText = text;
}
setInterval(add_letter, 2000);

// Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function count_temperature() {
  display_celsius = document.getElementById("display_celsius");
  display_fahrenheit = document.getElementById("display_fahrenheit");
  number = document.getElementById("number_input").value;
  result = number;
  celsius = ((number - 32) / 9) * 5;
  fahrenheit = (number / 5) * 9 + 32;
  display_celsius.innerText = `${number} stupnu Fahrenheit je ${celsius} stupnu Celsia`;
  display_fahrenheit.innerText = `${number} stupnu Celsia je ${fahrenheit} stupnu Fahrenheit`;
}

// if input starts with "Py", then nothing happens, else Py is added
function change_text() {
  text_input = document.getElementById("text_input").value;
  text_output = document.getElementById("text_output");
  text_input = text_input.startsWith("Py") ? text_input : "Py" + text_input;

  text_output.innerText = text_input;
}

// uppercase first letter of words in sentence
sentence_input = document.getElementById("sentence_input");
sentence_output = document.getElementById("sentence_output");

// const handleChange = function () {
//   let words = sentence_input.value.split(" ");
//   new_words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//   sentence_output.innerText = new_words.join(" ");
// };

//split sentence into words and uppercase words
const handleChange2 = function (input, output) {
  let words = input.value.split(" ");
  new_words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  output.innerText = new_words.join(" ");
};

sentence_input.addEventListener("keyup", () =>
  handleChange2(sentence_input, sentence_output)
);

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const random = (min, max) => Math.floor(Math.random() * max) + min;
console.log("random number:");
console.log(random(1, 10)); // Result: 1 ~ 10

// root6, do something
myBtn = document.querySelector(".root6 button");
root6 = document.querySelector(".root6");
myBtn.addEventListener("click", () => {
  let x = random(1, 10);
  console.log(x);
});
// root6.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// listen to keyboard events, move object
// implemented acceleration - using same arrow leads to faster movement
const object_to_move = document.getElementById("object_to_move");
let x_pos = 0;
let y_pos = 0;
let prev_key = "";

window.addEventListener("keydown", (event) => {
  speed = prev_key == event.key ? speed + 2 : 5;
  switch (event.key) {
    case "ArrowDown":
      y_pos += speed;
      object_to_move.style.top = `${y_pos}px`;
      prev_key = "ArrowDown";
      break;
    case "ArrowUp":
      y_pos -= speed;
      object_to_move.style.top = `${y_pos}px`;
      prev_key = "ArrowUp";
      break;
    case "ArrowRight":
      x_pos += speed;
      object_to_move.style.left = `${x_pos}px`;
      prev_key = "ArrowRight";
      break;
    case "ArrowLeft":
      x_pos -= speed;
      object_to_move.style.left = `${x_pos}px`;
      prev_key = "ArrowLeft";
      break;
  }
});

// COOKIE testing
const cookie_message = document.getElementById("cookie_message");
const btn_cookie_save = document.getElementById("cookie_save");
const btn_cookie_read = document.getElementById("cookie_read");

btn_cookie_save.addEventListener("click", () => {
  console.log(`COOKIE SAVED: ${cookie_message.value}`);
  document.cookie = `${cookie_message.value}`;
});
btn_cookie_read.addEventListener("click", () => {
  let cookie_msg = document.cookie.split(";");
  console.log(`COOKIE READ: ${cookie_msg[0]}`);
});

const teacher = {
  firstName: "Jan",
  lastName: "Novak",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const student = {
  firstName: "Vita",
  lastName: "Klejch",
};
console.log(teacher.fullName());
fullName = teacher.fullName.bind(student);
console.log(`BIND FULLNAME: ${fullName()}`);

// callback example
function displayThis(text) {
  console.log(`Vysledek je ${text}`);
}
function countTHIS(x, y, callback) {
  let sum = x + y;
  callback(sum);
}
countTHIS(5, 10, displayThis);
setInterval(() => {
  console.log("Written by SET INTERVAL");
}, 3000);
