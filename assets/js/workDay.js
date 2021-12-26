// display current time in header and also update the time every minute
function currentDay() {
  const currentDTG = moment().format("LLLL");
  $("#currentDay").html("Today is:  " + currentDTG);
}
currentDay();
setInterval(function () {
  currentDay();
}, 1000 * 60); //testing this I realized that the a minute clock starts when user opens the page so it doesn't synch with the computer time. but for now this will do.

// saving the hour and comment to local storage (tutor help needed to make the hour and comment into object and push it into local storage and getit from local storage.)
function saveSchedule() {
  // selecting time-block div id.. since it is unique to the hours i need to do nearby value.
  const hour = $(this).parent().attr("id"); // tried .closest("id").val(): undefined.. .parent().val("id"): displayed data that I wasn't looking for.
  console.log(hour);
  const comment = $(this).siblings("#text").val(); // tried .closest('#text"): not what i'm looking for. jQuery doc states closest begins w/ current element and travels up the DOM tree.. meaning it will go to parent node not sibling.
  console.log(comment);

  // pushing them into localStorage. since both hour and comment are string, I can make hour as key and comment as value.
  localStorage.setItem(hour, comment);
}

// event listener for the button to save the task.
$(".saveBtn").on("click", saveSchedule);
// initial display of local storage if there is data in the localStorage.
// each key needs to be pulled into display. jQuery $ selector of parent id child id val.. get the value from the storage?
$("#hour_9 #text").val(localStorage.getItem("hour_9"));
$("#hour_10 #text").val(localStorage.getItem("hour_10"));
$("#hour_11 #text").val(localStorage.getItem("hour_11"));
$("#hour_12 #text").val(localStorage.getItem("hour_12"));
$("#hour_13 #text").val(localStorage.getItem("hour_13"));
$("#hour_14 #text").val(localStorage.getItem("hour_14"));
$("#hour_15 #text").val(localStorage.getItem("hour_15"));
$("#hour_16 #text").val(localStorage.getItem("hour_16"));
$("#hour_17 #text").val(localStorage.getItem("hour_17"));
