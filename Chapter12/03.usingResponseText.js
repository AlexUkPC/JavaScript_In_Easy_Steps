var panel, request;
function doRequest() {
    if (XMLHttpRequest){request = new XMLHttpRequest();}
    else if(ActiveXObject){request = new ActiveXObject("Microsoft.XMLHTTP");}
    else{return false;}
    request.open("GET", "data.txt", true);
    request.send(null);
    request.onreadystatechange = showText;
}
function showText() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            panel.innerHTML += "<br>"+request.responseText;
        }
    }
}
function init() {
    panel = document.getElementById("panel");
    var btn = document.getElementById("btn");
    btn.onclick = doRequest;
}
document.addEventListener("DOMContentLoaded", init, false);