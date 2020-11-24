function init() {
    var panel = document.getElementById("panel");
    var i;
    var week = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    var weekend = ["Sat", "Sun"];
    panel.innerHTML = "Weekdays: " + week;
    panel.innerHTML += "<hr>Weekend days: " + weekend;
    for (i = 0; i < weekend.length; i++) {
        week[week.length] = weekend[i]
    }
    panel.innerHTML += "<hr>Incresed with weekend days: " + week;
    week.length -= 2;
    panel.innerHTML += "<hr>Reduced back to weekdays: " + week;
}
document.addEventListener("DOMContentLoaded", init, false);