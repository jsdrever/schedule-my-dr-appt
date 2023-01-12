
textEl = document.getElementById("#description")

var saveEl = document.getElementById("#save");
var timeNine = document.createElement("div");
var timeTen = document.createElement("div");
var timeEleven = document.createElement("div");
var timeTwelve = document.createElement("div");
var timeOne = document.createElement("div");
var timeTwo = document.createElement("div");
var timeThree = document.createElement("div");
var timeFour = document.createElement("div");
var timeFive = document.createElement("div");


var appendList = document.getElementsByClassName(".append-here")
appendList.appendChild(timeNine)
appendList.appendChild(timeTen)
appendList.appendChild(timeEleven)
appendList.appendChild(timeTwelve)
appendList.appendChild(timeOne)
appendList.appendChild(timeTwo)
appendList.appendChild(timeThree)
appendList.appendChild(timeFour)
appendList.appendChild(timeFive)

//! which way do i write this out? Do i make a seperate one for all of them or type it out in html?  

var myDivs = document.querySelectorAll("div");

var myDivList = [
    timeNine, timeTen, timeEleven, timeTwelve, timeOne, timeTwo, timeThree, timeFour, timeFive
];






//! need dayjs() in a setInterval timer to loop through applying the appropriate class. How do i loop through the divs i made to apply the jquery style classes needed? like i need to made rows and text area. this cant be the way to do it.
for (var i = 0; i < myDivList.length; i++) {
    divTags[i].setAttribute("style", "background-color:gray red or green");
    divTags[i].addClass("past present or future", "");
   }


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


    function saveHandler() {
        var description = document.getElementById("description");
        document.querySelector(textarea).textContent = description;
        // textEl.innerHTML = "description";
    }
    saveEl.addEventListener("click", saveHandler);
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
  });

  var timeEl = document.querySelector(".time");


  function setTime() {
    var timerInterval = setInterval(function() {

        timeEl.textContent = dayjs().format(hh,mm,ss);


    },1000);
    
}
  setTime();