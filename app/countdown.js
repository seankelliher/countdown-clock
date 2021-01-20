function placeCountdown(days, hours, minutes, seconds) {
    "use strict";

    //Get spans.
    const daysSpan = document.getElementById("days");
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");

    //Place results.
    daysSpan.textContent = days.toLocaleString();
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
}

function getCountdown() {
    "use strict";

    //Now date, local time.
    const today = new Date();

    //Future date, local time.
    //November 5, 2024 at midnight.
    const future = new Date(2024, 10, 5, 0, 0, 0);

    //Get difference, in millisecs.
    const difference = future - today;

    //Convert to secs. Disregard remainer.
    const totalSeconds = Math.floor(difference / 1000);

    //Get days. 86400 seconds in one day.
    const days = Math.floor(totalSeconds / 86400);
    const remainingSeconds1 = totalSeconds % 86400;

    //Get hours. 3600 seconds in an hour.
    const hours = Math.floor(remainingSeconds1 / 3600);
    const remainingSeconds2 = remainingSeconds1 % 3600;

    //Get mins, 60 seconds in a minute.
    const minutes = Math.floor(remainingSeconds2 / 60);
    const seconds = remainingSeconds2 % 60;

    placeCountdown(days, hours, minutes, seconds);
}

export {placeCountdown, getCountdown};


