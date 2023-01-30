
//header p id currentDay for current day and time
$("#currentDay").text(moment().format("LLLL"));

$(document).ready(function () {
  $(".saveBtn").click(function () {
    // Get the id of the containing time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");
    // Get the user input from the description class text field
    var userInput = $(this).closest(".time-block").find(".description").val();
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  function trackTime() {
    // get current number for the hour and be able to console log
    var currentTime = moment().hour(); //set to current hour w moment.js
    console.log(currentTime); 

    //loop time blocks, select all time-block element using jquery.each
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
      console.log(blockHour, currentTime);

      //check the time w conditional statements
      if (blockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  trackTime();
});

//get value from localStorage and display after refresh and ready
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

