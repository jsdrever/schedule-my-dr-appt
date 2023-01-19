var saveEl = $(".btn")

$(function () {
    function saveTodo() {

        // saveEl.on('click', function (event) {
        //     var storedValue = JSON.parse(localStorage.getItem("description"));
        //     var hour = $(this).parent().attr("id")
        //     var todo = $(this).siblings(".description").val();
        //     console.log(hour)
        //     var todo = localStorage.getItem("schedule") || {}
        //     console.log(todo);


            $(".btn").each(function (index) {
          
        
                $(this).on("click", function () {
         
                  var taskText = $(this).prev().val();
                
                 
                  localStorage.setItem(`${index}`, taskText);
                });
              });


            for (var i = 0; i < todo.length; i++) {
                if (!todo) {
                    return;

                } else {
                    localStorage.setItem("description", JSON.stringify(todo));
                    // ! this only saves the last clicked to storage and deletes the previous stored comment.
                }
            }
        };
    
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

$('textarea').each(function (index) {
  $(this).val(localStorage.getItem(`${index}`) || '');
});

// function renderStored() {


//     if (storedValue !== null) {
//         var storedValue = JSON.parse(localStorage.getItem("description"));
//         document.querySelector(".description").textContent = storedValue;
//     }
//     return storedValue;
//     $('textarea').each(function (index) {
//         $(this).val()
//     })
// }
var timerInterval = setInterval(function () {
    var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
    $('#currentDay').text(time);
}, 1000);


// `$(‘.btn’).each(function (index) {
//     console.log(‘.btn’, index);
//     // event listener for save button
//     $(this).on(‘click’, function () {
//       // targets the text area element.
//       var taskText = $(this).prev().val();
//       console.log(index, taskText);
//       // saves it based on the index
//       localStorage.setItem(`${index}`, taskText);
//     });
//   });`
// white_check_mark
// eyes
// raised_hands





// 10:38
// $('textarea').each(function (index) {
//   $(this).val(localStorage.getItem(`${index}`) || 'Event');
// });