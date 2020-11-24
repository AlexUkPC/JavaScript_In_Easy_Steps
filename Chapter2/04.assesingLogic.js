function init() {
    var yes = true, no = false;//Initialize with booleans
    var blnA = yes && yes; //Test if both are true.
    var blnB = yes && no; //Test if both are true.
    var blnC = no || yes; //Test if either is true.
    var blnD = no || no; //Test if either is true.
    var tog = !yes; //Reverse the value.
    var str = "Are both values true?: "+blnA+"<br>";
    str += "Are both values true now?: "+blnB+"<br>";
    str += "Is either value true?: "+blnC+"<br>";
    str += "Is either value true now?: "+blnD+"<br>";
    str += "Initial value: "+yes+"<br>";
    str += "Toggled value: "+tog+"<br>";

    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);