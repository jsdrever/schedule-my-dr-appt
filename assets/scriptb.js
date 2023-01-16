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
    //! how to compare the hour id to the current hour using time block???? what am i supposed to do here
    // var hour9 = document.querySelector('#hour-9'); 
    // var hour10 = document.querySelector('#hour-10'); 
    // var hour11 = document.querySelector('#hour-11'); 
    // var hour12 = document.querySelector('#hour-12'); 
    // var hour1 = document.querySelector('#hour-1'); 
    // var hour2 = document.querySelector('#hour-2'); 
    // var hour3 = document.querySelector('#hour-3'); 
    // var hour4 = document.querySelector('#hour-4'); 
    // var hour5 = document.querySelector('#hour-5'); 

    var timeBlock = document.querySelectorAll('.time-block');

    function setHour() {

        for (var i = 0; i < timeBlock.length; i++) {
            let currentHour = JSON.parse(timeBlock[i].getAttribute("id").split('-')[1]);

            if (currentHour == dayjs().hour()) {
                timeBlock[i].setAttribute('class', 'present');
                // timeBlock[i].addClass('present');
            } else if (currentHour < dayjs().hour()) {
                timeBlock[i].setAttribute('class', 'past');
                timeBlock[i].classList.remove("present")

                // timeBlock[i].addClass('past');
            } else {
                timeBlock[i].setAttribute('class', 'future');
                timeBlock[i].classList.remove("present", "past")

                // timeBlock[i].addClass('future');
            }
            console.log(currentHour);
        }
    }

    setHour();
    setInterval(setHour, 15000);


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // ! attribute of each time-block be used to do this? why are you replacing previous stored objects. how am i supposed to write this if...
    if (storedValue == null) {
        return;
        // value = [];

    } else {
        var storedValue = JSON.parse(localStorage.getItem(".description"));

        document.querySelector(".description").textContent = storedValue;
        storedValue.innerHTML
    }

    // .map(storedValue)
    // .map(value)
    console.log(storedValue);
    console.log(dayjs().hour());

    var timerInterval = setInterval(function () {
        var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
        $('#currentDay').text(time);
    }, 1000);
});

