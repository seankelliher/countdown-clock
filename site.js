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

        //Now, we adjust for local time zone so days to election is accurate.
        //Get the time zone offset.
        const offSet = today.getTimezoneOffset();

        //Invoke next function with parameters.
        days.adjustDays(today, until2020Day, offSet);
    },

    adjustDays: function (today, until2020Day, offSet) {
        "use strict";

        //Get today's hour, minute, and second.
        const hour = today.getUTCHours();
        const minute = today.getUTCMinutes();
        const second = today.getUTCSeconds();

        //Create mutable variable for "adjusted" day.
        let until2020DayAdjusted;

        //If/else statements check world's 23 time zones.
        //If UTC is "x" minutes ahead or behind local time...
        //and UTC time is within this time of day...
        //add or subtract a day from the countdown timer.
        //Ensures timer is accurate and changes at midnight local time.
        if (Math.abs(offSet) === 60) { //UTC: 1 hour plus/minus.
            if (hour === 0 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 120) { //UTC: 2 hrs plus/minus.
            if (hour >= 0 && hour <= 1 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 180) { //UTC: 3 hrs plus/minus.
            if (hour >= 0 && hour <= 2 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 210) { //UTC: 3.5 hrs plus/minus.
            if (hour >= 0 && hour <= 3 && minute <= 29 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 240) { //UTC: 4 hrs plus/minus.
            if (hour >= 0 && hour <= 3 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 270) { //UTC: 4.5 hrs plus. No minus.
            if (hour >= 0 && hour <= 4 && minute <= 29 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 300) { //UTC: 5 hrs plus/minus.
            if (hour >= 0 && hour <= 4 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 330) { //UTC: 5.5 hrs plus. No minus.
            if (hour >= 0 && hour <= 5 && minute <= 29 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 345) { //UTC: 5.75 hrs plus. No minus.
            if (hour >= 0 && hour <= 5 && minute <= 44 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 360) { //UTC: 6 hrs plus/minus.
            if (hour >= 0 && hour <= 5 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 390) { //UTC: 6.5 hrs plus. No minus.
            if (hour >= 0 && hour <= 6 && minute <= 29 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 420) { //UTC: 7 hrs plus/minus.
            if (hour >= 0 && hour <= 6 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 480) { //UTC: 8 hrs plus/minus.
            if (hour >= 0 && hour <= 7 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 525) { //UTC: 8.75 hrs plus. No minus.
            if (hour >= 0 && hour <= 8 && minute <= 44 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 540) { //UTC: 9 hrs plus/minus.
            if (hour >= 0 && hour <= 8 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 570) { //UTC: 9.5 hrs plus/minus.
            if (hour >= 0 && hour <= 9 && minute <= 29 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 600) { //UTC: 10 hrs plus/minus.
            if (hour >= 0 && hour <= 9 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 630) { //UTC: 10.5 hrs plus. No minus.
            if (hour >= 0 && hour <= 10 && minute <= 29 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 660) { //UTC: 11 hrs plus/minus.
            if (hour >= 0 && hour <= 10 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 720) { //UTC: 12 hrs plus/minus.
            if (hour >= 0 && hour <= 11 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 765) { //UTC: 12.75 hrs plus. No minus.
            if (hour >= 0 && hour <= 12 && minute <= 44 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 780) { //UTC: 13 hrs plus. No minus.
            if (hour >= 0 && hour <= 12 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                } else if (offSet < 0) {
                    until2020DayAdjusted = until2020Day - 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        } else if (Math.abs(offSet) === 840) { //UTC: 14 hrs plus. No minus.
            if (hour >= 0 && hour <= 13 && minute <= 59 && second <= 59) {
                if (offSet > 0) {
                    until2020DayAdjusted = until2020Day + 1;
                }
            } else {
                until2020DayAdjusted = until2020Day;
            }
        }

        //Place number of days to election on page.
        const result = document.getElementById("result");
        result.textContent = until2020DayAdjusted;
    }

}; //close variable