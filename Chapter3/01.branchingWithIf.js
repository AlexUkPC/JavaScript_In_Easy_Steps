function init() {
    var flag = true;
    if (flag) {
        document.getElementById("panel").innerHTML = "Power is on";
    }
    if (7 < 2) {
        document.getElementById("panel").innerHTML += "<br> Failure";
    }
    if (7 > 2) {
        document.getElementById("panel").innerHTML += "<br> Success";
    }
}
document.addEventListener("DOMContentLoaded", init, false);