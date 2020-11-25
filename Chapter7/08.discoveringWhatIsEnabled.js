function init() {
    var panel = document.getElementById("panel");
    if (navigator.javaEnabled()) { panel.innerHTML = "Java Support is Enabled"; }
    if (navigator.plugins.length !== 0) {
        panel.innerHTML += "<hr>Total Plugins: " + navigator.plugins.length;
        panel.innerHTML += "<br>Example: " + navigator.plugins[0].name;
        panel.innerHTML += " - " + navigator.plugins[0].description;
    }
    if (navigator.mimeTypes.length !== 0) {
        panel.innerHTML += "<hr>Total MIME Types: " + navigator.mimeTypes.length;
        panel.innerHTML += "<br>Example: " + navigator.mimeTypes[1].type;
        panel.innerHTML += " - " + navigator.mimeTypes[1].description;
    }

}
document.addEventListener("DOMContentLoaded", init, false);