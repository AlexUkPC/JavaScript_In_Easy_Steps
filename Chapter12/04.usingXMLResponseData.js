var panel, request;
function doRequest() {
    request = new XMLHttpRequest();
    request.open("GET", "data.xml", true);
    request.send(null);
    request.onreadystatechange = showXML;
}
function showXML() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            var i, names = request.responseXML.getElementsByTagName("name");
            for (i = 0; i < names.length; i++) {
                panel.innerHTML += "<br>" + names[i].firstChild.data;
            }
        }
    }
}
function init() {
    panel = document.getElementById("panel");
    var btn = document.getElementById("btn");
    btn.onclick = doRequest;
}
document.addEventListener("DOMContentLoaded", init, false);