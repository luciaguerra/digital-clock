window.addEventListener("load", calculateTime);

function calculateTime() {
    let date = new Date();
    let dayNumber = date.getDay();
    let dayDate = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    hours = hours % 12;
    hours = hours ? hours : "12";
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("day").innerHTML = `${dayNames[dayNumber]} ${dayDate}`;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}




