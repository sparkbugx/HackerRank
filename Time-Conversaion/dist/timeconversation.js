function zeroPad(n) {
    return n < 10 ? '0' + n : n.toString();
}
function timeConversion(s) {
    var ampm = s.slice(-2);
    var hours = parseInt(s.slice(0, 2), 10);
    var rest = s.slice(2, -2);
    var hour24;
    if (ampm === 'AM') {
        hour24 = hours === 12 ? 0 : hours;
    }
    else {
        hour24 = hours === 12 ? 12 : hours + 12;
    }
    var formattedHour = zeroPad(hour24);
    return "".concat(formattedHour).concat(rest);
}
// Test cases
console.log(timeConversion('12:01:00AM')); // 00:01:00
console.log(timeConversion('12:01:00PM')); // 12:01:00
console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:00:00AM')); // 00:00:00
console.log(timeConversion('12:00:00PM')); // 12:00:00
console.log(timeConversion('01:30:00AM')); // 01:30:00
console.log(timeConversion('01:30:00PM')); // 13:30:00
