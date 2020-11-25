function init() {
    var panel = document.getElementById("panel");
    panel.innerHTML += document.title;
    var pop = open("", "", "top=200,left=100,width=450,height=100");
    pop.document.write("<title>Popup Windows</title>");
    pop.document.write("<img src='02.addressingComponentArray-debate.png'>");
    pop.document.write("Dynamic Popup Content");
    pop.document.close();

}
document.addEventListener("DOMContentLoaded", init, false);