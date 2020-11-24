function isDST(d) { //adaugata in plus ca nu era in carte si nu mergea fara
    let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) != d.getTimezoneOffset();
}
function init() {
    var panel = document.getElementById("panel");
    var now = new Date();
    var offset = now.getTimezoneOffset();
    var dst = isDST(now); //Call a function to adjust offset.
    switch (offset) {
        case (300 - dst): offset = "East Coast"; break;
        case (360 - dst): offset = "Central"; break;
        case (420 - dst): offset = "Montain"; break;
        case (480 - dst): offset = "Pacific"; break;
        default: offset = "all";
    }
    panel.innerHTML = "System Time:" + now.toString();
    panel.innerHTML += "<br>UTC(GMT) Time: " + now.toUTCString() + "<hr>Welcome to " + offset + " visitors";
}
document.addEventListener("DOMContentLoaded", init, false);