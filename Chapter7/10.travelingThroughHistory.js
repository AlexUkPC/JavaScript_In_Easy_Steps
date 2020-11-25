function init() {
    var panel = document.getElementById("panel");
    panel.innerHTML += "<a href='10.travelingThroughHistory.html'>Page 1</a> |";
    panel.innerHTML += "<a href='10.travelingThroughHistory2.html'>Page 2</a> |";
    panel.innerHTML += "<a href='10.travelingThroughHistory3.html'>Page 3</a>";

    panel.innerHTML += "<br>History Length: " + history.length + "<br>";
    panel.innerHTML += "Current Location: " + location.pathname + "<br>";

    panel.innerHTML += "<button onclick='history.back()'>Back</button>";
    panel.innerHTML += "<button onclick='history.forward()'>Forward</button>";
}
document.addEventListener("DOMContentLoaded", init, false);