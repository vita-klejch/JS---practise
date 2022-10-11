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
  console.log(`Dnes je ${day_names[day]}`);
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
function count_celsius() {
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
