const hour_17 = document.querySelector("#hour-17");
const hour_16 = document.querySelector("#hour-16");
const hour_15 = document.querySelector("#hour-15");
const hour_14 = document.querySelector("#hour-14");
const hour_13 = document.querySelector("#hour-13");
const hour_12 = document.querySelector("#hour-12");
const hour_11 = document.querySelector("#hour-11");
const hour_10 = document.querySelector("#hour-10");
const hour_9 = document.querySelector("#hour-9");
let btns = document.querySelectorAll('.btn');
const time = [hour_9, hour_10, hour_11, hour_12, hour_13, hour_14, hour_15, hour_16, hour_17];
let today = dayjs()
let currentHour = today.hour();
let hourIndex = currentHour - 9;
$('#currentDay').text(today.format('dddd, MMMM D'))

// Loop through time array and set class based on time
for (i = 0; i < time.length; i++) {
    if (i < hourIndex) {
        time[i].className = ("row time-block past");
    } else if (i === hourIndex) {
        time[i].className = ("row time-block present");
    } else {
        time[i].className = ("row time-block future");
    }

    // Display saved input to text boxes
    var localKey = time[i].id;
    var localExists = (localStorage.getItem(localKey) !== null);
    if (localExists) {
        let localValue = localStorage.getItem(localKey);
        time[i].querySelector('.description').value = localValue;
    };
};

// Save user input to local storage
btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let timeEl = this.parentElement;
        let text = timeEl.id;
        let textBoxValue = this.previousElementSibling.value;
        localStorage.setItem(text, textBoxValue);
    })
});
