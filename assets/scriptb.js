
var saveEl = $(".btn")






// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    saveEl.on('click', function (event) {
        event.preventDefault();
        var key = event.target.dataset.button
        
        var value = $(this).siblings(".description").val();

        console.log(value);
        
        localStorage.setItem(".description", JSON.stringify(value));
        
        
        var storedValue = JSON.parse(window.localStorage.getItem(".description"));
        if (storedValue !== null) {
            document.querySelector(".description").textContent = storedValue;
            storedValue.innerHTML
          }
        function renderThis() {
                // storedValue.push('')
                // document.getElementById("description").innerHTML = storedValue;
                // window.location.push(storedValue)
            }
        
        console.log(storedValue);
        // renderThis();
        // textDisplay.innerHTML.value.val() = JSON.parse(localStorage.getItem(value));
        // textDisplay.text(JSON.parse(value));
        // save it local storage. then getItem, setItem for(loop through storage and append the time-block with the correct time) 
        // ! for loop through each time block each iteration check is this time block < > = and append logic moment.js to check current time.
    })
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.


    var timerInterval = setInterval(function () {
        var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
        $('#currentDay').text(time);
    }, 1000);
});