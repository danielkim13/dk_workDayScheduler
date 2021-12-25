// display current time in header and also update the time every minute
function currentDay() {
  const currentDTG = moment().format("LLLL");
  $("#currentDay").html("Today is:  " + currentDTG);
}
currentDay();
setInterval(function () {
  currentDay();
}, 1000 * 60); //testing this I realized that the a minute clock starts when user opens the page so it doesn't synch with the computer time. but for now this will do.

// init localStorage and saving textarea input function function.
function saveSchedule() {
  let workDaySchedule = JSON.parse(localStorage.getItem("hourlyTask")) || [];
  const hour = $(".hour").val();
  console.log(hour);
  const toDo = $("#text").val();
  console.log(toDo);
  const task = {
    hour: hour,
    schedule: toDo,
  };

  workDaySchedule.push(task);
  localStorage.setItem("hourlyTask", JSON.stringify(workDaySchedule));
}

// event listener for the button to save the task.
$(".saveBtn").on("click", saveSchedule);
// initial display of local storage if there is data in the localStorage.

// make p box into textarea when clicked and able to edit.. once done, you can save and the element returns back to p element.