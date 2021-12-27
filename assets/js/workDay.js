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
  for (let i = 0; i < 9; i++) {
    const h = i + 9;
    let textbox = $('#hour_' + h).find('#text');
    textbox.val(localStorage.getItem("hour_" + h));
  };

// time color change. CSS already has selector .past  .present .future
//initial thought process is based on current time, the textarea class 'description' needs to be substituted by the past/present/future class */
// moment js to get current hour
const currentHour = moment().hour();
console.log(currentHour);
// need to select the timeblock div and somehow extract the hour from the div id to compare it to currentHour..
// const timeContainer = document.querySelector(".time-block");
// const timeBlock = $(".time-block");

// got stuck and asked classmates in the slack.
// 12.26.2021: classmate suggested using each.
$(".time-block").each(function () {
  // need to find the textarea element.. child of timeblock div.
  const textAreaEl = $(this).closest(".time-block").children("#text");
  // console.log(textAreaEl);
  let timeContainer = parseInt($(this).attr("id").split("hour_")[1]); //result in number not a string.
  // console.log(timeContainer); // displays ['', '9'].. getting index of 1 got the value of hour.
  // console.log(textAreaEl);
  // console.log(currentHour === timeContainer);
  if (timeContainer === currentHour) {
    textAreaEl.addClass("present");
  } else if (timeContainer < currentHour) {
    textAreaEl.addClass("past");
  } else {
    textAreaEl.addClass("future");
  }
});
