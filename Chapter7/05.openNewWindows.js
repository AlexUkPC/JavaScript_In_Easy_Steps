function init() {
    var panel = document.getElementById("panel");
    panel.innerHTML = "Regular information in the main window";
    var winObject = window.open("05.openNewWindows2.html", "windowName", "top=200,left=100,width=450,height=100,status=yes");
}
document.addEventListener("DOMContentLoaded", init, false);