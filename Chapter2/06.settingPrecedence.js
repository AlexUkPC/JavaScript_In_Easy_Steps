function init() {
    var sum = 2 * 9 + 12 / 3;//Equivalent to (2*9)+ (12/3)
    var str = "18 + 4 = " + sum;
    sum = ((2 * 9) + 12) / 3;//Equivalent to (18+12)/3
    str += "<br>30 / 3 = " + sum;
    sum = (2 * (9 + 12)) / 3;//Equivalent to (2*21)/3
    str += "<br>42 / 3 = " + sum;
    sum = 2 * (9 + (12 / 3));//Equivalent to 2*(9+4)
    str += "<br>2 * 13 = " + sum;


    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);