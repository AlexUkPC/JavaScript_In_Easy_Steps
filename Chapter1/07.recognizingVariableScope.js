var global = "This is Worldwide Global news<hr>";
function init() {
    var obj = document.getElementById("panel");
    obj.innerHTML = global;
    us(obj);
    eu(obj);
}
function us(obj) {
    var local = "***This is United States Local news***<hr>";
    obj.innerHTML += local;
    obj.innerHTML += global;
}
function eu(obj) {
    var local = "---This is European Local news---<hr>";
    obj.innerHTML += local;
    obj.innerHTML += global;
}
document.addEventListener("DOMContentLoaded", init, false);