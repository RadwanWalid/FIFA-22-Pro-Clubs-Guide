var reflexes1 = document.getElementById("Reflexes1");
var kicking1 = document.getElementById("Kicking1");
var kicking2 = document.getElementById("Kicking2");
var diving1 = document.getElementById("Diving1");
var handling1 = document.getElementById("Handling1");
var hawk1 = document.getElementById("Hawk1");
var positioning1 = document.getElementById("Positioning1");
var reflexes2 = document.getElementById("Reflexes2");
var wall1 = document.getElementById("Wall1");

var path1 = [reflexes1, kicking1, kicking2];
var path2 = [reflexes1, diving1, handling1, hawk1];
var path3 = [reflexes1, positioning1, reflexes2, wall1];

var ref1branch = document.getElementsByClassName("from-ref1-to-branch")[0];
var ref1kic1 = document.getElementsByClassName("from-ref1-to-kic1")[0];
var kic1kic2 = document.getElementsByClassName("from-kic1-to-kic2")[0];
var line1 = [ref1branch, ref1kic1, kic1kic2];


function showDescription(name, num) {
  document.getElementById(name + "" + num + "-des").style.display = "inline-block";
  document.getElementById(name + "-inc").style.width = "2px";
  document.getElementById(name + "-growth-value").innerHTML = "+2";
}

function hideDescription(name, num) {
  document.getElementById(name + "" + num + "-des").style.display = "none";
  document.getElementById(name + "-inc").style.width = "0px";
  document.getElementById(name + "-growth-value").innerHTML = "";
}

function select(name, num) {
  var select = document.getElementById(name + "" + num);
  var index1 = parseInt(path1.indexOf(select));
  if(path1[index1].id == "Reflexes1") {
    select.src = "../Images/Skill Tree/Goalkeeping/" + name + " Selected.png";
    select.onclick = function() {unselect(path1[index1].id.substring(0,path1[index1].id.length-1), path1[index1].id.substring(path1[index1].id.length-1,path1[index1].id.length));}
  } else {
      for(var i = 0; i <= index1; i++) {
        let newname = path1[i].id.substring(0,path1[i].id.length-1);
        let newnum = path1[i].id.substring(path1[i].id.length-1,path1[i].id.length);
        path1[i].src = "../Images/Skill Tree/Goalkeeping/" + newname + " Selected.png";
        path1[i].onclick = function() { unselect(newname, newnum); }
        line1[i].style.borderTop = "35px solid #0A8BFF";
      }
  }
}

function unselect(name, num) {
  var unselect = document.getElementById(name + "" + num);
  var index2 = parseInt(path1.indexOf(unselect));
  alert(unselect.id);
  if(path1[index2].id == "Kicking2") {
    document.getElementById(name + "" + num).src = "../Images/Skill Tree/Goalkeeping/" + name + ".png";
    document.getElementById(name + "" + num).onclick = function() {select(name, num);}
    line1[index2].style.borderTop = "0px";
  } else {
      for(var j =  path1.length-1; j >= index2; j--) {
        let newnameun = path1[j].id.substring(0 ,path1[j].id.length-1);
        let newnumun = path1[j].id.substring(path1[j].id.length-1, path1[j].id.length);
        path1[j].src = "../Images/Skill Tree/Goalkeeping/" + newnameun + ".png";
        path1[j].onclick = function() {select(newnameun, newnumun);}
        if(j==index2 && index2!=0)
          line1[j-1].style.borderTop = "0px";
        line1[j].style.borderTop = "0px";
      }
    }
}
