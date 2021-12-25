// display current time in header and also update the time every minute
function currentDay() {
  const currentDTG = moment().format("LLLL");
  $("#currentDay").html("Today is:  " + currentDTG);
}
currentDay();
setInterval(function () {
  currentDay();
}, 1000 * 60); //testing this I realized that the a minute clock starts when user opens the page so it doesn't synch with the computer time. but for now this will do.
