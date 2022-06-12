function onHover(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Pace/" + name + " On Hover.png";
}

function offHover(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Pace/" + name + ".png";
}

// class Graph {
//   constructor(noOfVertices) {
//     this.noOfVertices = noOfVertices;
//     this.AdjList = new Map();
//   }
//
//   addVertex(v) {
//     this.AdjList.set(v, []);
//   }
//
//   addEdge(v, w) {
//     this.AdjList.get(v).push(w);
//     this.AdjList.get(w).push(v);
//   }
//
//   bfs(start) {
//     var visited = {};
//     var q = [];
//
//     q.push(start);
//
//     while(q != "") {
//       var node = q.shift();
//
//       console.log(node);
//
//       var list = this.AdjList.get(node);
//
//       for(var i in list) {
//         var neighbour = list[i];
//         console.log(neighbour);
//         if(!visited[neighbour]) {
//           visited[neighbour] = true;
//           q.push(neighbour);
//         }
//       }
//
//
//     }
//
//   }
//
//
// }

acc1 = new Node(document.getElementById('acc1'), document.getElementById('Acceleration1'));
ss1 = new Node(document.getElementById('ss1'), document.getElementById('Sprint-Speed1'));
acc2 = new Node(document.getElementById('acc2'), document.getElementById('Acceleration2'));
ss2 = new Node(document.getElementById('ss2'), document.getElementById('Sprint-Speed2'));
acc3 = new Node(document.getElementById('acc3'), document.getElementById('Acceleration3'));
ss3 = new Node(document.getElementById('ss3'), document.getElementById('Sprint-Speed3'));
ss4 = new Node(document.getElementById('ss4'), document.getElementById('Sprint-Speed4'));
ch1 = new Node(document.getElementById('ch1'), document.getElementById('Cheetah1'));

// var graph = new Graph(8);
// var vertices = [acc1, ss1, acc2, ss2, acc3, ss3, ss4, ch1];
//
// for(var i = 0; i < vertices.length; i++) {
//   graph.addVertex(vertices[i]);
// }
//
// graph.addEdge(acc1, acc2);
// graph.addEdge(acc2, acc3);
// graph.addEdge(acc2, ss4);
// graph.addEdge(acc2, ss3);
// graph.addEdge(ss1, ss2);
// graph.addEdge(ss2, ss3);
// graph.addEdge(ss2, ss4);
// graph.addEdge(ss2, acc3);
// graph.addEdge(ss4, ch1);
//
// graph.bfs(ch1);

function Node(button, image) {
  this.button = button;
  this.image = image;
  this.prevNode = null;
  this.nextNode = null;
  this.selected = false;
}

acc1.nextNode = acc2;
ss1.nextNode = ss2;
acc2.prevNode = acc1; acc2.nextNode = acc3;
ss2.prevNode = ss1; ss2.nextNode = ss3;
acc3.prevNode = acc2;
ss3.prevNode = ss2;
ss4.prevNode = acc2;
ss4.nextNode = ch1;
ch1.prevNode = ss4;

acc1.button.addEventListener("click", function(){traverse(acc1);});
ss1.button.addEventListener("click", function(){traverse(ss1);});
acc2.button.addEventListener("click", function(){traverse(acc2);});
ss2.button.addEventListener("click", function(){traverse(ss2);});
acc3.button.addEventListener("click", function(){traverse(acc3);});
ss3.button.addEventListener("click", function(){traverse(ss3);});
ss4.button.addEventListener("click", function(){traverse(ss4);});
ch1.button.addEventListener("click", function(){traverse(ch1);});

function traverse(chosen) {
  if(chosen === null)
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
