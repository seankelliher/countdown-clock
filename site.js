//To avoid confusion, remember that Universal Coordinated Time (UCT) equals Greenwich Mean Time (GMT), there is no difference.
let days;

//When the DOM Content is Loaded, invoke the "get days" function
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Invoke the "get days" function
    days.getDays();
});

days = {
    getDays: function () {
        "use strict";

        //create the date objects
        const election = new Date("November 3, 2020 00:00:00 GMT+00:00");
        const today = new Date();

        //return number of milliseconds between the objects' dates and Jan. 1, 1970 at midnight. All UCT.
        const electionMs = election.getTime();
        const todayMs = today.getTime();

        //return the time zone offset (difference between UCT and local time) in minutes
        //Easy to get confused here - if your local time is behind UCT, method returns a positive number. If your local time is ahead of UCT, method returns a negative number
        const electionOffset = election.getTimezoneOffset();
        const todayOffset = today.getTimezoneOffset();

        //convert minutes to seconds, then milliseconds
        const electionOffsetMs = (electionOffset * 60) * 1000;
        const todayOffsetMs = (todayOffset * 60) * 1000;

        //ternary statements - careful here, remember the note above about time zone difference and negative/positive numbers
        const electionLocal = (electionOffsetMs > 0)
            ? electionMs - electionOffsetMs
            : electionMs + electionOffsetMs;
        const todayLocal = (electionOffsetMs > 0)
            ? todayMs - todayOffsetMs
            : todayMs + todayOffsetMs;
        const daysInMs = electionLocal - todayLocal;

        //The number of milliseconds in a day: 86400000
        const totalDays = (daysInMs / 86400000);

        //Math.floor rounds result down
        const totalDaysMf = Math.floor(totalDays);

        //Change integer to string
        const totalDaysMfSt = totalDaysMf.toString();

        //Check length of string
        const totalDaysMfStLength = totalDaysMfSt.length;

        //Get element, create text node for it, append (some substra work to add comma if number is over three digits)
        const daysToVoting = document.getElementById("days-to-voting");
        const daysToVotingText = (totalDaysMfStLength <= 3)
            ? document.createTextNode(totalDaysMfSt)
            : document.createTextNode(totalDaysMfSt.substr(0, 1) + "," + totalDaysMfSt.substr(1, 4));
        daysToVoting.appendChild(daysToVotingText);

        //position the needle on the gauge
        //There are four years or 1460 days between election days, that's 14.6 days per percentage point.
        const needlePosition = (1460 - totalDaysMf) / 14.6;
        document.getElementById("needle").style.left = needlePosition + "%";

    } //close function
}; //close variable