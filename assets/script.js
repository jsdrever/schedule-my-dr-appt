var saveEl = $(".btn")

$(function () {
    function saveTodo() {

        saveEl.on('click', function (event) {

            var todo = $(this).siblings(".description").val();

            for (var i = 0; i < todo.length; i++) {
                if (!todo) {
                    return;

                } else {
                    localStorage.setItem("description", JSON.stringify(todo));
                    // ! this only saves the last clicked to storage and deletes the previous stored comment.
                }
            }
        });
    }
    var timeBlock = document.querySelectorAll('.time-block');

    function setHour() {

        for (var i = 0; i < timeBlock.length; i++) {
            let currentHour = JSON.parse(timeBlock[i].getAttribute("id").split('-')[1]);

            if (currentHour == dayjs().hour()) {
                timeBlock[i].classList.add('present');

            } else if (currentHour < dayjs().hour()) {
                timeBlock[i].classList.add('past');
                timeBlock[i].classList.remove("present")

            } else {

                timeBlock[i].classList.add('future');

                timeBlock[i].classList.remove("present", "past")


            }

        }
    }
    setHour();
    setInterval(setHour, 15000);
    saveTodo();
    renderStored();
});
function renderStored() {

    
    if (storedValue !== null) {
        var storedValue = JSON.parse(localStorage.getItem("description"));
        document.querySelector(".description").textContent = storedValue;
    }
    console.log(storedValue);
}
var timerInterval = setInterval(function () {
    var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
    $('#currentDay').text(time);
}, 1000);
