function init() {
    var panel = document.getElementById("panel");
    var i, rand, temp, str, nums = [];
    for (i = 1; i < 50; i++) {
        nums[i] = i;
    }
    
    for (i = 1; i < 50; i++) {
        console.log("i="+i);
        rand = Math.ceil(Math.random() * 49);console.log("rand="+rand);
        temp = nums[i];console.log("temp="+temp);
        nums[i] = nums[rand];console.log("nums[i]="+nums[i]);
        nums[rand] = temp;console.log("nums[rand]="+nums[rand]);
    }
    // nums.forEach(num => console.log(num) );
    str = "Your Six Lucky Number:<br>";
    for (i = 1; i < 7; i++) {
        str += nums[i];
        if (i !== 6) {
            str += " - ";
        }
    }
    panel.innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);