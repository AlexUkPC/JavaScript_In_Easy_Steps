function init() {
    var panel = document.getElementById("panel");
    var day = 0;
    try {
        if (day > 31) { throw new RangeError(" 'day' cannot exceed 31"); }
        if (day < 1) { throw "GetReal"; }
    }
    catch (err) {
        panel.innerHTML = (err === "GetReal") ? ("Ooops! The 'day' variable has an invalid value of " + day) : (err.name + " exception has occured: " + err.message);
    }
    finally {
        panel.innerHTML += "<br>The script has ignored that cariable and is continuing...";
    }
}
document.addEventListener("DOMContentLoaded", init, false);