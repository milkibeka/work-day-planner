var now = moment().format("dddd, MMMM Do");
    $("#currentDay").text(now);
    const currentHour = moment().format("HH");
    console.log(currentHour);
    $(".time-div").each(function() {
        const timeDiv = $(this).attr("id").split("-")[1];
        $(this).toggleClass("past", currentHour > timeDiv);
        $(this).toggleClass("present", currentHour == timeDiv);
        $(this).toggleClass("future", currentHour < timeDiv);
        $(this).find(".time-block").prop("disabled", currentHour > timeDiv); 
    });
    $(".saveBtn").click(function(event) {
        event.preventDefault();
        var task = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, task);
      });
    