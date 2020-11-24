function init() {
    var strA = "JavaScript" === "JAVASCRIPT";
    var strB = "JavaScript" === "JavaScript";
    var flt = 7.5 === 7.5;//Equality test.
    var intA = 8 !== 8;//Inequality test.
    var intB = 24 > 12;//Greater than test.
    var intC = 24 < 12;//Less than test.
    var intD = 24 <= 24;//Less than or equal test.
    var str = "String equality test1: " + strA;
    str += "<br>String equality test2: " + strB;
    str += "<br>Float equality test: " + flt;
    str += "<br>Integer inequality test: " + intA;
    str += "<br>Greater than test: " + intB;
    str += "<br>Less than test: " + intC;
    str += "<br>Less than or equal test: " + intD;
    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);