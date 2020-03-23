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

    } //close function

}; //close variable