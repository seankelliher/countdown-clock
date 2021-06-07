[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/countdown-clock?style=flat-square)](/LICENSE.txt)
## Countdown Clock

Countdown clock that displays the days, hours, minutes, and seconds between now and a future date. Currently, the clock is counting down to the US Presidential election on November 5, 2024. However, component can be modified to count down to another event.

## Project Screen Shot

![screen shot of project](/screenshots/countdown-clock-screenshot1.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

I wanted to build a component that counts down the time between now and a future date. The math to convert milliseconds to days, hours, minutes and seconds required some thought and planning. But, the more difficult task was making sure I understood the details of the Date object and its relationship with time zones, leap year, and Daylight Savings Time. I also need to devise scenarios involving these aspects and test my component with them.

## Acknowledgments

* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) and [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).