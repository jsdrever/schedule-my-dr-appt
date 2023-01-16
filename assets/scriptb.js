var saveEl = $(".btn")

$(function () {
    saveEl.on('click', function (event) {
        // this click event does not target the specific box it is supposed to
        // event.preventDefault();
        var key = event.target.dataset.button
        
        var value = $(this).siblings(".description").val();
        
        
        console.log(value);
        
        localStorage.setItem(".description", JSON.stringify(value));
        
        // ! this only saves the last comment to storage and deletes the previous stored comment.
        // ! im seriously about to make a seperate tag for every hour. this is so annoying
        // value.appendChild(storedValue);
    })
    





    
    var timeBlock = document.querySelectorAll('.time-block');
    
    function setHour() {
        
        for (var i = 0; i < timeBlock.length; i++) {
            let currentHour = JSON.parse(timeBlock[i].getAttribute("id").split('-')[1]);
            
            if (currentHour == dayjs().hour()) {
                timeBlock[i].classList.add('present');
                // timeBlock[i].setAttribute('class', 'present');
                // timeBlock[i].addClass('present');
            } else if (currentHour < dayjs().hour()) {
                timeBlock[i].classList.add('past');
                // timeBlock[i].setAttribute('class', 'past');
                timeBlock[i].classList.remove("present")
                
                // timeBlock[i].addClass('past');
            } else {
                // timeBlock[i].setAttribute('class', 'future');
                timeBlock[i].classList.add('future');
                
                timeBlock[i].classList.remove("present", "past")
                
                // timeBlock[i].addClass('future');
            }
            
        }
    }
    
    setHour();
    setInterval(setHour, 15000);
    
    
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
    // .map(value)
    console.log(storedValue);
    // console.log(dayjs().hour());
    // console.log(event.target);
    
    
});

var timerInterval = setInterval(function () {
    var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
    $('#currentDay').text(time);
}, 1000);