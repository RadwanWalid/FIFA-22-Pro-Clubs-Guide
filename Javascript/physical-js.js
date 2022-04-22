function onHover(name, num) {
  document.getElementById(name + "" + num).src = "Images/Skill Tree/Physical/" + name + " On Hover.png";
}

function offHover(name, num) {
document.getElementById(name + "" + num).src = "Images/Skill Tree/Physical/" + name + ".png";
}


var clickedBefore = false;

function increaseAttribute(name, value) {
  if(!clickedBefore) {
    var successBar = document.getElementById(name + "-success");
    var successNum = document.getElementsByClassName(name + "-success-value");
    successBar.style.width = value + "px";
    successNum[0].innerHTML = "+" + value;
    clickedBefore = true;
  } else {
    var bar = document.getElementById(name + "-bar");
    var barVal = document.getElementById(name + "-val");
    var successBar = document.getElementById(name + "-success");
    var successNum = document.getElementsByClassName(name + "-success-value");
    var newVal = parseInt(bar.style.width) + parseInt(value);
    bar.style.width = newVal + "px";
    barVal.innerHTML = newVal;
    successBar.style.width = "0px";
    successNum[0].innerHTML = "";
  }
}
