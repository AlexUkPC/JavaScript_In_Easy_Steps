function sendMsg() {
    var win = document.getElementById("ifr").contentWindow;
    win.postMessage("Message Received from: " + document.domain, "http://localhost");
}

function readMsg(event) {
    if (event.origin === "http://127.0.0.1:5500")
        document.getElementById("para").innerHTML = (event.data);
}
function init(){
    document.getElementById("host").innerHTML+=document.domain;
    window.addEventListener("message",readMsg,false); 
    document.getElementById("btn").onclick=sendMsg;
}
document.addEventListener("DOMContentLoaded",init,false);