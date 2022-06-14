var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var date2 = new Date();
var weekday2 = new Array(7);
weekday2[0] = 'Day 1';
weekday2[1] = 'Day 2';
weekday2[2] = 'Day 3';
weekday2[3] = 'Day 4';
weekday2[4] = 'Day 5';
weekday2[5] = 'Day 6';
weekday2[6] = 'Day 7';

var n = weekday[d.getDay()];
var n2 = weekday2[date2.getDay()];

var displayWeekday = document.getElementById('weekday');
var phrase = document.getElementById('phrase');

whatDayIsIt();

function whatDayIsIt() {

    displayWeekday.innerText = n;
    phrase.innerText = n2;
}