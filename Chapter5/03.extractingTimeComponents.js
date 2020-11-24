function init() {
    var panel = document.getElementById("panel");
    var now = new Date();
    var hh = now.getHours();
    var mn = now.getMinutes();
    var ss = now.getSeconds();
    var ms = now.getMilliseconds();
    if (mn < 10) { mn = "0" + mn; }
    if (ss < 10) { ss = "0" + ss; }
    var tim = hh + ":" + mn + ":" + ss + ":" + ms;
    panel.innerHTML += "It's now: " + tim;
    var hi = "Good Morning.";
    if (hh > 11) { hi = "Good Afternoon." }
    if (hh > 17) { hi = " Good Evening." }
    panel.innerHTML += "<br>" + hi;
    var suffix = (hh > 11) ? "P.M." : "A.M.";
    if (hh > 12) { hh -= 12; }
    panel.innerHTML += "<br>Time is: " + hh + ":" + mn + " " + suffix;
}
document.addEventListener("DOMContentLoaded", init, false);