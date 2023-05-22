function displayTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let AM_PM = document.getElementById("AM_PM");

    if (hours >= 12) {
        AM_PM.innerHTML = "PM";
    } else {
        AM_PM.innerHTML = "AM";
    }

    if (hours >= 12) {
        hours = hours - 12;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


}

setInterval(displayTime, 10);