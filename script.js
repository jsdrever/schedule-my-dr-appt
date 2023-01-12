// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var textInput =$('textarea[id="description"]');
// var textInput = document.getElementById("description");
const btnEl = document.getElementById("save");
const daysEl = document.getElementById("currentDay");
const hoursEl = document.getElementById("currentHour");
const savedInput = JSON.stringify(localStorage.getItem("description"))
var timeBlock = document.querySelectorAll(".time-block");



// var clock = [
//     past= fuck,
//     presen= ugh,
//     future= okiedokie,
// ];
var timeBlocks = document.querySelectorAll("#time-block")
//I need to make a variable to store all of the time-blocks
var todos = [
    textInput.textContent
];
//now do i use todos.appendChild("description");


function renderTodos() {
    textInput.innerHTML ="";
}
$(function storeTodos() {

    localStorage.setItem("description", JSON.stringify(todos));
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // Stringify and set key in localStorage to todos array

    btnEl.on('click', function (event) {
        event.preventDefault();
       textInput.push.val();
    //    ('description');
        if(!textInput) {
            return "disable the save button"
        }
    });
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    var hours = 3600000;

    var applyTime = function() {
        for (var i = 0; i < timeBlock.length; i++) {
            timeBlock.setAttribute("style", "color: gray");

            if(dt = timeBlock) {
                timeBlock.attr("style", "danger" );
            }
            //need to figure out how to set the class to past present and future. i know there is a 
            //!  ternary code that can if else this sucker in a single line...
          }
    }
    setInterval(applyTime, hours)
    // function colorRender (
    // textInput.style.color=present 
    // )
    // for(var time = dt; time < dt; ) {
    //     var color = textInput[dt];
    // }
    var now = new date().format('hh:mm:ss');
    $('date-time').text(now);
    //!   figure out the dayjs() function. also need to put it on look for displaying time as well as applying .attr() or .addClass(past present and future) $.each(timeBlock, function (){var value = this.val(); timeBlock.push(value); });



    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // function descriptionDisplay() {
    //     return textInput.textContent;
    // }
    // TODO: Add code to display the current date in the header of the page.
    var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
});




//!! this is the work example from UTA lets frankenstein the monster lol


//  var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var todos = [];

// // The following function renders items in a todo list as <li> elements
// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// // This function is being called below and will run when the page loads.
// function init() {
//   // Get stored todos from localStorage
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // This is a helper function that will render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Add submit event to form
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

// // Calls init to retrieve data and render it to the page on load
// init()