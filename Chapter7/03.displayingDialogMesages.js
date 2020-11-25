function init() {
    var panel = document.getElementById("panel");
    window.alert("Here's a simple mesage.");
    panel.innerHTML = "Confirm: " + window.confirm("Go or Stop?");
    panel.innerHTML += "<br>Prompt: " + window.prompt("Yes or No?", "Yes");
}
document.addEventListener("DOMContentLoaded", init, false);