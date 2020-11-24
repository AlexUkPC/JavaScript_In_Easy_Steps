function init() {
    var sum = 80 + 20; //Add two operands.
    var sub = sum - 50; //Subtract 2nd operand from 1st.
    var mul = sum * 5; //Multiply two operands.
    var div = sum / 4; //Divide 1st operand by 2nd operand.
    var mod = sum % 2; //Remainder afrer dividing by two.
    var inc = ++sum; //Immediately increment by one.
    var dec = --sum; //Immediately decrement by one.
    var str = "Sum: " + sum + "<br>Sutraction: " + sub;
    str += "<br>Multliplication: " + mul;
    str += "<br>Division: " + div + "<br>Modulus: " + mod;
    str += "<br>Increment: " + inc;
    str += "<br>Decrement: " + dec;
    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);