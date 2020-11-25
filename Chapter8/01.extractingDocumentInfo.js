function init() {
    var panel = document.getElementById("panel");
    panel.innerHTML += "Linked From: " + document.referrer;
    panel.innerHTML += "<br>Title: " + document.title;
    panel.innerHTML += "<br>URL: " + document.URL;
    panel.innerHTML += "<br>Domain: " + document.domain;
    panel.innerHTML += "<br>Last modified: " + document.lastModified;
}
document.addEventListener("DOMContentLoaded", init, false);