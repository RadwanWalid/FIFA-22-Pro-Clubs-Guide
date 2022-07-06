function onHover(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Pace/" + name + " On Hover.png";
}

function offHover(name, num) {
  document.getElementById(name + "" + num).src = "../Images/Skill Tree/Pace/" + name + ".png";
}

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }


  // Prints the vertex and adjacency list
  printGraph()
  {
      // get all the vertices
      var get_keys = this.AdjList.keys();

      // iterate over the vertices
      for (var i of get_keys)
  {
          // great the corresponding adjacency list
          // for the vertex
          var get_values = this.AdjList.get(i);
          var conc = "";

          // iterate over the adjacency list
          // concatenate the values into a string
          for (var j of get_values)
              conc += j + " ";

          // print the vertex and its adjacency list
          console.log(i + " -> " + conc);
      }
  }
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
}


const acc1 = new Node(document.getElementById('acc1'), document.getElementById('Acceleration1'));
const ss1 = new Node(document.getElementById('ss1'), document.getElementById('Sprint-Speed1'));
const acc2 = new Node(document.getElementById('acc2'), document.getElementById('Acceleration2'));
const ss2 = new Node(document.getElementById('ss2'), document.getElementById('Sprint-Speed2'));
const acc3 = new Node(document.getElementById('acc3'), document.getElementById('Acceleration3'));
const ss3 = new Node(document.getElementById('ss3'), document.getElementById('Sprint-Speed3'));
const ss4 = new Node(document.getElementById('ss4'), document.getElementById('Sprint-Speed4'));
const ch1 = new Node(document.getElementById('ch1'), document.getElementById('Cheetah1'));

// var graph = new Graph(8);
// var vertices = [acc1, ss1, acc2, ss2, acc3, ss3, ss4, ch1];
//
// for(var i = 0; i < vertices.length; i++) {
//   graph.addVertex(vertices[i]);
//   vertices[i].button.addEventListener("click", function(){traverse(vertices[i]);});
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

// graph.bfs(ch1);

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

acc1.nextNode = acc2;
ss1.nextNode = ss2;
acc2.prevNode = acc1; acc2.nextNode = acc3;
ss2.prevNode = ss1; ss2.nextNode = ss3;
acc3.prevNode = acc2;
ss3.prevNode = ss2;
ss4.prevNode = acc2;
ss4.nextNode = ch1;
ch1.prevNode = ss4;

// acc1.nextNode = [acc2];
// ss1.nextNode = [ss2];
// acc2.prevNode = [acc1]; acc2.nextNode = [acc3, ss4, ss3];
// ss2.prevNode = [ss1]; ss2.nextNode = [ss3, ss4, acc3];
// acc3.prevNode = [acc2, ss2];
// ss3.prevNode = [ss2, acc2];
// ss4.prevNode = [acc2, ss2];
// ss4.nextNode = [ch1];
// ch1.prevNode = [ss4];

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

function isEmpty(array) {
  return (array == "");
}

// alert(adjacencyList = graph.AdjList.get(acc2));

function traverse2(chosen) {
  var cost = 100;
  var pathIndex = -1;

  if(chosen.paths !== null) {
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
    } else {
      // unselect
  }
}
chosen.image.src = "../Images/Skill Tree/Pace/" + chosen.image.id.substring(0,chosen.image.id.length-1) + " Selected.png";
chosen.selected = true;
}
