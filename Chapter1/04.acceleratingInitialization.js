function loaded() {
    window.alert("Window Loaded");
}
function init() {
    document.getElementById("panel").innerHTML = "Page initialized";
    window.alert("DOM Loaded");
}

window.onload = loaded;
document.addEventListener("DOMContentLoaded", init, false);