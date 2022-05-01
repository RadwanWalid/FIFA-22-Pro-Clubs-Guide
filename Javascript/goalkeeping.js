// function onHover(name, num) {
//   document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + " On Hover.png";
// }
//
// function offHover(name, num) {
//     document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + ".png";
// }

function select(name, num) {
  document.getElementById(name + "" + num).style.backgroundImage = "url('../Images/Skill Tree/Goalkeeping/" + name + " Selected.png')";
  document.getElementById(name + "" + num).onclick = function() {unselect(name, num);}
}

function unselect(name, num) {
  document.getElementById(name + "" + num).style.backgroundImage = "url('../Images/Skill Tree/Goalkeeping/" + name + ".png')";
  document.getElementById(name + "" + num).onclick = function() {select(name, num);}
}
