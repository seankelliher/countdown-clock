import {getCountdown} from "./app/countdown.js";

//When DOMContentLoaded, invoke functions.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    window.setInterval(getCountdown, 1000);
});