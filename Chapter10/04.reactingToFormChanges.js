var panel, field, saved;
function update() {
    panel.innerHTML = saved + " changed to " + field.value + "<br>";
    saved = field.value;
}
function wipe() {
    panel.innerHTML = "<br>";
}
function init() {
    panel = document.getElementById("panel");
    field = document.getElementById("txt");
    saved = field.value;
    var form = document.getElementById("lang");
    form.onreset = wipe;
    field.onchange = update;
    wipe();
}
document.addEventListener("DOMContentLoaded", init, false);