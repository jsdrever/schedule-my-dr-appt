var saveEl = $(".btn")

$(function () {
    saveEl.on('click', function (event) {
        // this click event does not target the specific box it is supposed to
        // event.preventDefault();
        var key = event.target.dataset.button

        var value = $(this).siblings(".description").val();

        console.log(value);
        // console.log(event.target);

        localStorage.setItem(".description", JSON.stringify(value));
        // ! this only saves the last comment to storage and deletes the previous stored comment.
        // ! im seriously about to make a seperate tag for every hour. this is so annoying
        // value.appendChild(storedValue);
    })
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //! moment()/ moment.js() did not work. using the time variable from time display breaks time display
    // var timeBlock = document.getElementById('#time-blocks')
    // for (var i = 0; i < timeBlock.length; i++)
    //     if (timeBlock === dayjs().hour()) {
    //         timeBlock.attr('class', 'present');
    //         timeBlock.addClass('present');
    //     } else if (timeBlock < dayjs().hour()) {
    //         timeBlock.attr('class', 'past');
    //         timeBlock.addClass('past');
    //     } else {
    //         timeBlock.attr('class', 'future');
    //         timeBlock.addClass('future');
    //     }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // ! attribute of each time-block be used to do this? why are you replacing previous stored objects. how am i supposed to write this if...
    if (storedValue === null) {
        return;
        // value = [];

    } else {
        var storedValue = JSON.parse(localStorage.getItem(".description"));

        document.querySelector(".description").textContent = storedValue;
        storedValue.innerHTML
    }

    // .map(storedValue)
    console.log(storedValue);
    console.log(dayjs().hour());

    var timerInterval = setInterval(function () {
        var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
        $('#currentDay').text(time);
    }, 1000);
});