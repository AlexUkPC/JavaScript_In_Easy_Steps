function init() {
    var msg = "JavaScript"; msg += " Code";//Concatenate
    var flt = 7.5; flt += 2.25;//Add and assign.
    var intA = 8; intA -= 4;//Subtract and assign.
    var intB = 24; intB *= intA;//Multiply and assign.
    var intC = 24; intC /= intA;//Divide and assign.
    var intD = 24; intD %= intA;//Modulus and assign.
    var str = "Add & assign string: " + msg;
    str += "<br>Add & assign float: " + flt;
    str += "<br>Subtract & assign: " + intA;
    str += "<br>Multiply & assign: " + intB;
    str += "<br>Divide & assign: " + intC;
    str += "<br>Modulus & assign: " + intD;
    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);