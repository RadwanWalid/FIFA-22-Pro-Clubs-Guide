function onHover(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Pace/" + name + " On Hover.png";
}

function offHover(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Pace/" + name + ".png";
}

const acc1 = new Node(document.getElementById('acc1'), document.getElementById('Acceleration1'));
const ss1 = new Node(document.getElementById('ss1'), document.getElementById('Sprint-Speed1'));
const acc2 = new Node(document.getElementById('acc2'), document.getElementById('Acceleration2'));
const ss2 = new Node(document.getElementById('ss2'), document.getElementById('Sprint-Speed2'));
const acc3 = new Node(document.getElementById('acc3'), document.getElementById('Acceleration3'));
const ss3 = new Node(document.getElementById('ss3'), document.getElementById('Sprint-Speed3'));
const ss4 = new Node(document.getElementById('ss4'), document.getElementById('Sprint-Speed4'));
const ch1 = new Node(document.getElementById('ch1'), document.getElementById('Cheetah1'));

function Node(button, image) {
  this.button = button;
  this.image = image;
  this.prevNode = null;
  this.nextNode = null;
  this.selected = false;
  this.paths = null;
}

acc3.paths = [[acc1, acc2], [ss1, ss2]];
ss3.paths = [[ss1, ss2], [acc1, acc2]];
ch1.paths = [[acc1, acc2, ss4], [ss1, ss2, ss4]];
ss4.paths = [[acc1, acc2], [ss1, ss2]];
acc2.paths = [[acc1]];
ss2.paths = [[ss1]];

// acc1.nextNode = acc2;
// ss1.nextNode = ss2;
// acc2.prevNode = acc1; acc2.nextNode = acc3;
// ss2.prevNode = ss1; ss2.nextNode = ss3;
// acc3.prevNode = acc2;
// ss3.prevNode = ss2;
// ss4.prevNode = acc2;
// ss4.nextNode = ch1;
// ch1.prevNode = ss4;
acc1.nextNode = [acc2];
ss1.nextNode = [ss2];
acc2.prevNode = [acc1]; acc2.nextNode = [acc3, ss4, ss3];
ss2.prevNode = [ss1]; ss2.nextNode = [ss3, ss4, acc3];
acc3.nextNode = null; acc3.prevNode = [acc2, ss2];
ss3.nextNode = null; ss3.prevNode = [ss2, acc2];
ss4.prevNode = [acc2, ss2];
ss4.nextNode = [ch1];
ch1.nextNode = null; ch1.prevNode = [ss4];

acc1.button.addEventListener("click", function(){traverse2(acc1);});
ss1.button.addEventListener("click", function(){traverse2(ss1);});
acc2.button.addEventListener("click", function(){traverse2(acc2);});
ss2.button.addEventListener("click", function(){traverse2(ss2);});
acc3.button.addEventListener("click", function(){traverse2(acc3);});
ss3.button.addEventListener("click", function(){traverse2(ss3);});
ss4.button.addEventListener("click", function(){traverse2(ss4);});
ch1.button.addEventListener("click", function(){traverse2(ch1);});

function traverse(chosen) {
  if(chosen == null)
    return;
  if(chosen.selected) {
    chosen.image.src = "../Images/Skill Tree/Pace/" + chosen.image.id.substring(0,chosen.image.id.length-1) + ".png";
    chosen.selected = false;
    if(chosen.nextNode == null || !chosen.nextNode.selected)
      return;
    traverse(chosen.nextNode);
  }
  else {
    chosen.image.src = "../Images/Skill Tree/Pace/" + chosen.image.id.substring(0,chosen.image.id.length-1) + " Selected.png";
    chosen.selected = true;
    if(chosen.prevNode == null || chosen.prevNode.selected)
      return;
    traverse(chosen.prevNode);
  }
}

function start(chosen) {
  if(chosen.selected) {
    chosen.image.src = "../Images/Skill Tree/Pace/" + chosen.image.id.substring(0,chosen.image.id.length-1) + ".png";
    chosen.selected = false;
  }
  else {
    chosen.image.src = "../Images/Skill Tree/Pace/" + chosen.image.id.substring(0,chosen.image.id.length-1) + " Selected.png";
    chosen.selected = true;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  add(node) {
    if(this.head == null) {
        this.head = node;
    }
    else {
      var current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

function traverse2(chosen) {
  var cost = 100;
  var pathIndex = -1;

    if(!chosen.selected) {
        for(var i = 0; i < chosen.paths.length; i++) {
          var pathCost = 0;
          for(var j = chosen.paths[i].length-1; j >= 0; j--) {
            if(!chosen.paths[i][j].selected) {
              pathCost++;
            } else {
              break;
            }
          }
          if(pathCost < cost){
            cost = pathCost;
            pathIndex = i;
          }
        }
        for(var z = 0; z < chosen.paths[pathIndex].length; z++) {
          chosen.paths[pathIndex][z].image.src = "../Images/Skill Tree/Pace/" + chosen.paths[pathIndex][z].image.id.substring(0,chosen.paths[pathIndex][z].image.id.length-1) + " Selected.png";
          chosen.paths[pathIndex][z].selected = true;
        }
        chosen.image.src = "../Images/Skill Tree/Pace/" + chosen.image.id.substring(0,chosen.image.id.length-1) + " Selected.png";
        chosen.selected = true;
    } else {
      chosen.image.src = "../Images/Skill Tree/Pace/" + chosen.image.id.substring(0,chosen.image.id.length-1) + ".png";
      chosen.selected = false;

      var isPathSelected = false;
      var nodesToBeRemoved = new LinkedList();
      for(var z = 0; z < chosen.nextNode.length; z++) {
        for(var k = 0; k < chosen.nextNode[z].paths.length; k++) {
          if(chosen.nextNode[z].paths[k][chosen.nextNode[z].paths[k].length-1].selected) {
            isPathSelected = true;
          }
        }
        if(!isPathSelected) {
          nodesToBeRemoved.add(chosen.nextNode[z]);
        }
      }
      if(!isPathSelected) {
        var current = nodesToBeRemoved.head;
        while(current) {
          current.image.src = "../Images/Skill Tree/Pace/" + current.image.id.substring(0, current.image.id.length-1) + ".png";
          current.selected = false;
          for(var y = 0; current.nextNode !== null && y < current.nextNode.length; y++) {
            current.nextNode[y].image.src = "../Images/Skill Tree/Pace/" + current.nextNode[y].image.id.substring(0,current.nextNode[y].image.id.length-1) + ".png";
            current.nextNode[y].selected = false;
          }
          current = current.next;
        }
      }

  }
}
