// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //then add the event listener and save to local storage


    var saveBtns = document.querySelectorAll(".saveBtn")
    for (let i = 0; i < saveBtns.length; i++) {
        const saveBtn = saveBtns[i];

        saveBtn.addEventListener("click", function () {
            var parent = this.parentElement
            console.log(parent.id)
            var textarea = parent.querySelector("textarea")
            console.log(textarea.value)
            localStorage.setItem(parent.id, textarea.value)
        })
    }
    var currentHour = dayjs().hour();


    var timeBlocks = document.querySelectorAll(".time-block")
    for (let i = 0; i < timeBlocks.length; i++) {
        const timeBlock = timeBlocks[i];
        const hour = parseInt(timeBlock.id.slice(5));
        console.log(hour)

        if (currentHour === hour) {
            timeBlock.classList.add('present');
        }
        else if (currentHour < hour) {
            timeBlock.classList.add('future');
        }
        else {
            timeBlock.classList.add('past');
        }
        var textarea = timeBlock.querySelector("textarea")
        textarea.value = localStorage.getItem(timeBlock.id)
    }



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
})

//link to id current day
document.getElementById("currentDay").textContent = dayjs().format("MMM D, YYYY");
;

