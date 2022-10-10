// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
root = document.getElementById("roort");
function show_time() {
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
  console.log(
    `Aktualni cas je : ${hour} ${prefix} : ${today.getMinutes()} : ${today.getSeconds()}`
  );
}
