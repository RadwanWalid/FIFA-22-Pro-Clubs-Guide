// function onHover(name, num) {
//   document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + " On Hover.png";
// }
//
// function offHover(name, num) {
//   if(document.getElementById(name + "" + num).onclick == function() {unselect(name, num);})
//   {
//     document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + " Selected.png";
//   }
//     document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + ".png";
// }
function showDescription(name, num) {
  document.getElementById(name + "" + num + "-des").style.display = "initial";
  document.getElementById(name + "-inc").style.width = "2px";
  document.getElementById(name + "-growth-value").innerHTML = "+2";
}

function hideDescription(name, num) {
  document.getElementById(name + "" + num + "-des").style.display = "none";
  document.getElementById(name + "-inc").style.width = "0px";
  document.getElementById(name + "-growth-value").innerHTML = "";
}

function select(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + " Selected.png";
  document.getElementById(name + "" + num).onclick = function() {unselect(name, num);}
}

function unselect(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + ".png";
  document.getElementById(name + "" + num).onclick = function() {select(name, num);}
}
