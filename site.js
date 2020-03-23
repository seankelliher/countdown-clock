//Note: Universal Coordinated Time (UCT) = Greenwich Mean Time (GMT).

//Global variable.
let days;

//When the DOM Content is loaded, invoke the "get days" function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    days.getDays();
});

days = {
    getDays: function () {
        "use strict";

        //Create the three date objects.
        //Parameter format: year, month, day, hour, minute, second.

        //Election day - Nov. 8, 2016 - midnight UTC.
        const election2016 = new Date(Date.UTC(2016, 10, 8, 0, 0, 0));

        //Election day - Nov. 3, 2020 - midnight UTC.
        const election2020 = new Date(Date.UTC(2020, 10, 3, 0, 0, 0));

        //Today - current time.
        const today = new Date();

        //Get today's UTC equivalent: year, month, day.
        const year = today.getUTCFullYear();
        const month = today.getUTCMonth();
        const day = today.getUTCDate();

        //Create UTC version of today's date and time.
        //Set time to midnight.
        const todayUtc = new Date(Date.UTC(year, month, day, 0, 0, 0));

        //Get difference between above dates/times and Unix time.
        //Unix time is 1/1/1970 at midnight UTC, excluding leap seconds.
        const election2016UnixDif = election2016.getTime();
        const election2020UnixDif = election2020.getTime();
        const todayUtcUnixDif = todayUtc.getTime();

        //Find number of days between 2020 and 2016 election days.
        //This could be written as one calculation.
        //But, for clarity, I wrote it step by step.
        const betweenElectionsMis = election2020UnixDif - election2016UnixDif;
        const betweenElectionsSec = betweenElectionsMis / 1000;
        const betweenElectionsMin = betweenElectionsSec / 60;
        const betweenElectionsHrs = betweenElectionsMin / 60;
        const betweenElectionsDay = betweenElectionsHrs / 24;

        //Find number of days between 2020 election day and today.
        //This could be written as one calculation.
        //But, for clarity, I wrote it step by step.
        const until2020Mis = election2020UnixDif - todayUtcUnixDif;
        const until2020Sec = until2020Mis / 1000;
        const until2020Min = until2020Sec / 60;
        const until2020Hrs = until2020Min / 60;
        const until2020Day = until2020Hrs / 24;

        //Position the needle on the gauge.
        //Days to election / days between elections (1456).
        const position = (until2020Day / betweenElectionsDay) * 100;

        //Needle is positioned on section.
        //Section has 2.5% left and 2.5% right padding.
        //95% of section houses "gauge". Reason results are "scaled."
        const scale = position * 0.95;
        const padding = 2.5;
        const needle = document.getElementById("needle");
        needle.style.right = padding + scale + "%";

    } //close function

}; //close variable