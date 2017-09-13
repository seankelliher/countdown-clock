
window.addEventListener("load", function () {
"use strict";

    //The number of milliseconds between January 1, 1970 at midnight UTC and November 3, 2020 at midnight local time.
    var electionDay = Date.parse("2020-11-03T00:00:00");

    //The current date and time (now)
    var todayDt = new Date();

    //The number of milliseconds between January 1, 1970 at midnight UTC and now (local time).
    var todayMs = todayDt.getTime();

    //Subtraction: election day milliseconds minus today milliseconds
    var totalMs = (electionDay - todayMs);

    //The number of milliseconds in a day: 86400000
    var totalDays = (totalMs / 86400000);

    //Math.floor rounds result down
    var totalDaysMf = Math.floor(totalDays);

    //Change Integer to string
    var totalDaysMfSt = totalDaysMf.toString();

    //Check length of string
    var totalDaysMfStLength = totalDaysMfSt.length;

    //If statements to determine if number needs a comma
    if (totalDaysMfStLength <= 3) {
        //Retrieve span id on page
        var daysToVoting = document.getElementById("days-to-voting");

        //Create text node for id
        var daysToVotingText = document.createTextNode(totalDaysMfSt);

        //Append text node to id
        daysToVoting.appendChild(daysToVotingText);
        } else if (totalDaysMfStLength > 3) {
            //Retrieve span id on page
            var daysToVotingLg = document.getElementById("days-to-voting");

            //Create text node for id
            var daysToVotingTextLg = document.createTextNode(totalDaysMfSt.substr(0, 1) + "," + totalDaysMfSt.substr(1, 4));

            //Append text node to id
            daysToVotingLg.appendChild(daysToVotingTextLg);   
            }
});