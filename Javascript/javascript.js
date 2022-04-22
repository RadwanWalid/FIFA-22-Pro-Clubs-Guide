// NOTE(for future implementation): use loops to get all data instead of that tall code
/* Retrieving all data */

/* Each Skill Tree IFrame */

const athleticPart = document.getElementById("athletic-part");
const physicalPart = document.getElementById("physical-part");
const defendingPart = document.getElementById("defending-part");
const dribblingPart = document.getElementById("dribbling-part");
const passingPart = document.getElementById("passing-part");
const shootingPart = document.getElementById("shooting-part");
const pacePart = document.getElementById("pace-part");
const goalkeepingPart = document.getElementById("goalkeeping-part");

/* Each Stat Current Positin */

const athleticPointer = document.getElementById("athletic-ptr");
const physicalPointer = document.getElementById("physical-ptr");
const defendingPointer = document.getElementById("defending-ptr");
const dribblingPointer = document.getElementById("dribbling-ptr");
const passingPointer = document.getElementById("passing-ptr");
const shootingPointer = document.getElementById("shooting-ptr");
const pacePointer = document.getElementById("pace-ptr");
const goalkeepingPointer = document.getElementById("goalkeeping-ptr");

/* Form Navigation Buttons */

const nextStepButton = document.getElementById("nextStepButton");
const previousStepButton = document.getElementById("previousStepButton");

const athleticButton = document.getElementById("athletic-btn");
const physicalButton = document.getElementById("physical-btn");
const defendingButton = document.getElementById("defending-btn");
const dribblingButton = document.getElementById("dribbling-btn");
const passingButton = document.getElementById("passing-btn");
const shootingButton = document.getElementById("shooting-btn");
const paceButton = document.getElementById("pace-btn");
const goalkeepingButton = document.getElementById("goalkeeping-btn");

/* Helper Functions */

function changeFrame(frameOn, ptrOn, btnOn, frameOff, ptrOff, btnOff) {
  frameOn.style.display = "block";
  ptrOn.style.borderBottom = "2px solid #CD2862";
  ptrOn.style.backgroundColor = "#1D1F2C";
  btnOn.style.color = "#C7F650";

  frameOff.style.display = "none";
  ptrOff.style.borderBottom = "0px";
  ptrOff.style.backgroundColor = "#2F3545";
  btnOff.style.color = "white";
}

/* Start Values */

var pointer = 0;
athleticPart.style.display = "block";
athleticPointer.style.borderBottom = "2px solid #CD2862";
athleticPointer.style.backgroundColor = "#1D1F2C";
athleticButton.style.color = "#C7F650";


/* Each Buttons' Event Listeners */

nextStepButton.addEventListener("click", function() {
  if (athleticPart.style.display == "block") {
    changeFrame(physicalPart, physicalPointer, physicalButton, athleticPart, athleticPointer, athleticButton);
    pointer++;

  } else if (physicalPart.style.display == "block") {
    changeFrame(defendingPart, defendingPointer, defendingButton, physicalPart, physicalPointer, physicalButton);
    pointer++;

  } else if (defendingPart.style.display == "block") {
    changeFrame(dribblingPart, dribblingPointer, dribblingButton, defendingPart, defendingPointer, defendingButton);
    pointer++;

  } else if (dribblingPart.style.display == "block") {
    changeFrame(passingPart, passingPointer, passingButton, dribblingPart, dribblingPointer, dribblingButton);
    pointer++;

  } else if (passingPart.style.display == "block") {
    changeFrame(shootingPart, shootingPointer, shootingButton, passingPart, passingPointer, passingButton);
    pointer++;

  } else if (shootingPart.style.display == "block") {
    changeFrame(pacePart, pacePointer, paceButton, shootingPart, shootingPointer, shootingButton);
    pointer++;

  } else if (pacePart.style.display == "block") {
    changeFrame(goalkeepingPart, goalkeepingPointer, goalkeepingButton, pacePart, pacePointer, paceButton);
    pointer++;
  }
});

previousStepButton.addEventListener("click", function() {
  if (goalkeepingPart.style.display == "block") {
    changeFrame(pacePart, pacePointer, paceButton, goalkeepingPart, goalkeepingPointer, goalkeepingButton);
    pointer--;

  } else if (pacePart.style.display == "block") {
    changeFrame(shootingPart, shootingPointer, shootingButton, pacePart, pacePointer, paceButton);
    pointer--;

  } else if (shootingPart.style.display == "block") {
    changeFrame(passingPart, passingPointer, passingButton, shootingPart, shootingPointer, shootingButton);
    pointer--;

  } else if (passingPart.style.display == "block") {
    changeFrame(dribblingPart, dribblingPointer, dribblingButton, passingPart, passingPointer, passingButton);
    pointer--;

  } else if (dribblingPart.style.display == "block") {
    changeFrame(defendingPart, defendingPointer, defendingButton, dribblingPart, dribblingPointer, dribblingButton);
    pointer--;

  } else if (defendingPart.style.display == "block") {
    changeFrame(physicalPart, physicalPointer, physicalButton, defendingPart, defendingPointer, defendingButton);
    pointer--;

  } else if (physicalPart.style.display == "block") {
    changeFrame(athleticPart, athleticPointer, athleticButton, physicalPart, physicalPointer, physicalButton);
    pointer--;

  }
});

/* Each Button in Upper Ribbon */


const partArray = [athleticPart, physicalPart, defendingPart, dribblingPart, passingPart, shootingPart, pacePart, goalkeepingPart];
const pointerArray = [athleticPointer, physicalPointer, defendingPointer, dribblingPointer, passingPointer, shootingPointer, pacePointer, goalkeepingPointer];
const buttonArray = [athleticButton, physicalButton, defendingButton, dribblingButton, passingButton, shootingButton, paceButton, goalkeepingButton];

athleticButton.addEventListener("click", function() {
  if (pointer != 0) {
    changeFrame(athleticPart, athleticPointer, athleticButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 0;
  }
});

physicalButton.addEventListener("click", function() {
  if (pointer != 1) {
    changeFrame(physicalPart, physicalPointer, physicalButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 1;
  }
});

defendingButton.addEventListener("click", function() {
  if (pointer != 2) {
    changeFrame(defendingPart, defendingPointer, defendingButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 2;
  }
});

dribblingButton.addEventListener("click", function() {
  if (pointer != 3) {
    changeFrame(dribblingPart, dribblingPointer, dribblingButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 3;
  }
});

passingButton.addEventListener("click", function() {
  if (pointer != 4) {
    changeFrame(passingPart, passingPointer, passingButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 4;
  }
});

shootingButton.addEventListener("click", function() {
  if (pointer != 5) {
    changeFrame(shootingPart, shootingPointer, shootingButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 5;
  }
});

paceButton.addEventListener("click", function() {
  if (pointer != 6) {
    changeFrame(pacePart, pacePointer, paceButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 6;
  }
});

goalkeepingButton.addEventListener("click", function() {
  if (pointer != 7) {
    changeFrame(goalkeepingPart, goalkeepingPointer, goalkeepingButton, partArray[pointer], pointerArray[pointer], buttonArray[pointer]);
    pointer = 7;
  }
});




/* FORMS*/

/* Striker */


var athleticWindow = document.getElementById("athletic-part").contentWindow;
var athleticDocument = athleticWindow.document;

athleticWindow.onload = function() {
  // athleticWindow.document.getElementById("position-child").innerHTML = document.getElementById("athletic-btn").innerHTML;
  var positionList = athleticWindow.document.getElementById("pos-select");
  var heightList = athleticWindow.document.getElementById("height-select");
  var weightList = athleticWindow.document.getElementById("weight-select");
  var selectedPosition;
  var selectedHeight;
  var selectedWeight;

  positionList.addEventListener("change", function() {
    selectedPosition = positionList.options[positionList.selectedIndex].text;
  });
  heightList.addEventListener("change", function() {
    selectedHeight = heightList.options[heightList.selectedIndex].text;
  });

  weightList.addEventListener("change", function() {
    selectedWeight = weightList.options[weightList.selectedIndex].text;
  });

  var athleticForm = athleticWindow.document.getElementById("athletic-form");

  function toggle() {
    if(selectedPosition == "GK") {
      athleticWindow.document.getElementById("active-gk").style.display = "block";
      athleticWindow.document.getElementById("active-st").style.display = "none";
    }
    else {
      athleticWindow.document.getElementById("active-gk").style.display = "none";
      athleticWindow.document.getElementById("active-st").style.display = "block";
    }
  }

  athleticForm.addEventListener("change", function() {
    toggle();
    if (selectedPosition != null & selectedHeight != null & selectedWeight != null) {
      if (selectedPosition == "ST") {
        strikerCombination(selectedHeight, selectedWeight);
      } else {
        goalkeeperCombination(selectedHeight, selectedWeight);
      }
    }
  });
}


function strikerStats(acc, ss, strgth, react, pos, control, dribble, finish, head, passing, power, lshots, volleys) {
  athleticWindow.document.getElementById("acceleration-progress").style.width = acc + "px";
  athleticWindow.document.getElementById("sprint-progress").style.width = ss + "px";
  athleticWindow.document.getElementById("strength-progress").style.width = strgth + "px";
  athleticWindow.document.getElementById("reactions-progress").style.width = react + "px";
  athleticWindow.document.getElementById("st-positioning-progress").style.width = pos + "px";
  athleticWindow.document.getElementById("control-progress").style.width = control + "px";
  athleticWindow.document.getElementById("dribbling-progress").style.width = dribble + "px";
  athleticWindow.document.getElementById("finishing-progress").style.width = finish + "px";
  athleticWindow.document.getElementById("heading-progress").style.width = head + "px";
  athleticWindow.document.getElementById("spassing-progress").style.width = passing + "px";
  athleticWindow.document.getElementById("power-progress").style.width = power + "px";
  athleticWindow.document.getElementById("lshots-progress").style.width = lshots + "px";
  athleticWindow.document.getElementById("volleys-progress").style.width = volleys + "px";
  athleticWindow.document.getElementById("acceleration-num").innerHTML = acc;
  athleticWindow.document.getElementById("sprint-num").innerHTML = ss;
  athleticWindow.document.getElementById("strength-num").innerHTML = strgth;
  athleticWindow.document.getElementById("reactions-num").innerHTML = react;
  athleticWindow.document.getElementById("st-positioning-num").innerHTML = pos;
  athleticWindow.document.getElementById("control-num").innerHTML = control;
  athleticWindow.document.getElementById("dribbling-num").innerHTML = dribble;
  athleticWindow.document.getElementById("finishing-num").innerHTML = finish;
  athleticWindow.document.getElementById("heading-num").innerHTML = head;
  athleticWindow.document.getElementById("spassing-num").innerHTML = passing;
  athleticWindow.document.getElementById("power-num").innerHTML = power;
  athleticWindow.document.getElementById("lshots-num").innerHTML = lshots;
  athleticWindow.document.getElementById("volleys-num").innerHTML = volleys;
}

function strikerCombination(height, weight) {
  if (height == ("5'3" + '"' + " - " + "5'4" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(84, 84, 63, 86, 84, 84, 83, 84, 77, 81, 69, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(83, 83, 64, 86, 84, 84, 83, 84, 77, 81, 69, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(82, 82, 66, 86, 84, 84, 83, 84, 77, 81, 69, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(81, 81, 67, 86, 84, 84, 83, 84, 77, 81, 69, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(80, 80, 68, 86, 84, 84, 83, 84, 77, 81, 69, 79, 81);
    } else {
      strikerStats(79, 79, 69, 86, 84, 84, 83, 84, 77, 81, 69, 79, 82);
    }
  } else if (height == ("5'5" + '"' + " - " + "5'6" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(83, 83, 64, 85, 84, 84, 83, 84, 78, 80, 70, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(82, 82, 65, 85, 84, 84, 83, 84, 78, 80, 70, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(81, 81, 67, 85, 84, 84, 83, 84, 78, 80, 70, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(80, 80, 68, 85, 84, 84, 83, 84, 78, 80, 70, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(79, 79, 69, 85, 84, 84, 83, 84, 78, 80, 70, 79, 81);
    } else {
      strikerStats(78, 78, 70, 85, 84, 84, 83, 84, 78, 80, 70, 79, 82);
    }
  } else if (height == ("5'7" + '"' + " - " + "5'8" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(82, 82, 65, 84, 84, 84, 83, 84, 79, 79, 71, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(81, 81, 66, 84, 84, 84, 83, 84, 79, 79, 71, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(80, 80, 68, 84, 84, 84, 83, 84, 79, 79, 71, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(79, 79, 69, 84, 84, 84, 83, 84, 79, 79, 71, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(78, 78, 70, 84, 84, 84, 83, 84, 79, 79, 71, 79, 81);
    } else {
      strikerStats(77, 77, 71, 84, 84, 84, 83, 84, 79, 79, 71, 79, 82);
    }
  } else if (height == ("5'9" + '"' + " - " + "5'10" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(81, 81, 66, 83, 84, 84, 83, 84, 80, 78, 72, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(80, 80, 67, 83, 84, 84, 83, 84, 80, 78, 72, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(79, 79, 69, 83, 84, 84, 83, 84, 80, 78, 72, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(78, 78, 70, 83, 84, 84, 83, 84, 80, 78, 72, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(77, 77, 71, 83, 84, 84, 83, 84, 80, 78, 72, 79, 81);
    } else {
      strikerStats(76, 76, 72, 83, 84, 84, 83, 84, 80, 78, 72, 79, 82);
    }
  } else if (height == ("5'11" + '"' + " - " + "6'0" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(80, 80, 67, 82, 84, 84, 83, 84, 81, 77, 73, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(79, 79, 68, 82, 84, 84, 83, 84, 81, 77, 73, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(78, 78, 70, 82, 84, 84, 83, 84, 81, 77, 73, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(77, 77, 71, 82, 84, 84, 83, 84, 81, 77, 73, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(76, 76, 72, 82, 84, 84, 83, 84, 81, 77, 73, 79, 81);
    } else {
      strikerStats(75, 75, 73, 82, 84, 84, 83, 84, 81, 77, 73, 79, 82);
    }
  } else if (height == ("6'1" + '"' + " - " + "6'2" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(79, 79, 68, 81, 84, 84, 83, 84, 82, 76, 74, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(78, 78, 69, 81, 84, 84, 83, 84, 82, 76, 74, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(77, 77, 71, 81, 84, 84, 83, 84, 82, 76, 74, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(76, 76, 72, 81, 84, 84, 83, 84, 82, 76, 74, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(75, 75, 73, 81, 84, 84, 83, 84, 82, 76, 74, 79, 81);
    } else {
      strikerStats(74, 74, 74, 81, 84, 84, 83, 84, 82, 76, 74, 79, 82);
    }
  } else if (height == ("6'3" + '"' + " - " + "6'4" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(78, 78, 69, 80, 84, 84, 83, 84, 83, 75, 75, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(77, 77, 70, 80, 84, 84, 83, 84, 83, 75, 75, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(76, 76, 72, 80, 84, 84, 83, 84, 83, 75, 75, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(75, 75, 73, 80, 84, 84, 83, 84, 83, 75, 75, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(74, 74, 74, 80, 84, 84, 83, 84, 83, 75, 75, 79, 81);
    } else {
      strikerStats(73, 73, 75, 80, 84, 84, 83, 84, 83, 75, 75, 79, 82);
    }
  } else if (height == ("6'5" + '"' + " - " + "6'6" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(77, 77, 70, 79, 84, 84, 83, 84, 84, 74, 76, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(76, 76, 71, 79, 84, 84, 83, 84, 84, 74, 76, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(75, 75, 73, 79, 84, 84, 83, 84, 84, 74, 76, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(74, 74, 74, 79, 84, 84, 83, 84, 84, 74, 76, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(73, 73, 75, 79, 84, 84, 83, 84, 84, 74, 76, 79, 81);
    } else {
      strikerStats(72, 72, 76, 79, 84, 84, 83, 84, 84, 74, 76, 79, 82);
    }
  } else if (height == ("6'7" + '"')) {
    if (weight == "100lbs - 119lbs") {
      strikerStats(76, 76, 71, 78, 84, 84, 83, 84, 85, 73, 77, 77, 80);
    } else if (weight == "120lbs - 149lbs") {
      strikerStats(75, 75, 72, 78, 84, 84, 83, 84, 85, 73, 77, 77, 81);
    } else if (weight == "150lbs - 174lbs") {
      strikerStats(74, 74, 74, 78, 84, 84, 83, 84, 85, 73, 77, 78, 81);
    } else if (weight == "175lbs - 199lbs") {
      strikerStats(73, 73, 75, 78, 84, 84, 83, 84, 85, 73, 77, 78, 81);
    } else if (weight == "200lbs - 224lbs") {
      strikerStats(72, 72, 76, 78, 84, 84, 83, 84, 85, 73, 77, 79, 81);
    } else {
      strikerStats(71, 71, 77, 78, 84, 84, 83, 84, 85, 73, 77, 79, 82);
    }
  }
}

/* Goalkeeper */

function goalkeeperStats(diving, handling, kicking, reflexes, positioning) {
  athleticWindow.document.getElementById("diving-progress").style.width = diving + "px";
  athleticWindow.document.getElementById("handling-progress").style.width = handling + "px";
  athleticWindow.document.getElementById("kicking-progress").style.width = kicking + "px";
  athleticWindow.document.getElementById("reflexes-progress").style.width = reflexes + "px";
  athleticWindow.document.getElementById("positioning-progress").style.width = positioning + "px";
  athleticWindow.document.getElementById("diving-num").innerHTML = diving;
  athleticWindow.document.getElementById("handling-num").innerHTML = handling;
  athleticWindow.document.getElementById("kicking-num").innerHTML = kicking;
  athleticWindow.document.getElementById("reflexes-num").innerHTML = reflexes;
  athleticWindow.document.getElementById("positioning-num").innerHTML = positioning;
}

function goalkeeperCombination(height, weight) {
  if (height == ("5'3" + '"' + " - " + "5'4" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(91, 80, 80, 85, 82);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(91, 80, 81, 85, 82);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(90, 81, 82, 84, 83);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(90, 81, 83, 84, 83);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(89, 82, 84, 83, 84);
    } else {
      goalkeeperStats(89, 83, 85, 83, 85);
    }
  } else if (height == ("5'5" + '"' + " - " + "5'6" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(90, 80, 81, 85, 83);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(90, 80, 82, 85, 83);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(89, 81, 83, 84, 84);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(89, 81, 84, 84, 84);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(88, 82, 85, 83, 85);
    } else {
      goalkeeperStats(88, 83, 86, 83, 86);
    }
  } else if (height == ("5'7" + '"' + " - " + "5'8" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(89, 80, 82, 85, 84);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(89, 80, 83, 85, 84);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(88, 81, 84, 84, 85);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(88, 81, 85, 84, 85);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(87, 82, 86, 83, 86);
    } else {
      goalkeeperStats(87, 83, 87, 83, 87);
    }
  } else if (height == ("5'9" + '"' + " - " + "5'10" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(88, 80, 83, 85, 85);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(88, 80, 84, 85, 85);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(87, 81, 85, 84, 86);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(87, 81, 86, 84, 86);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(86, 82, 87, 83, 87);
    } else {
      goalkeeperStats(68, 83, 88, 83, 88);
    }
  } else if (height == ("5'11" + '"' + " - " + "6'0" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(87, 80, 84, 85, 86);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(87, 80, 85, 85, 86);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(86, 81, 86, 84, 87);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(86, 81, 87, 84, 87);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(85, 82, 88, 83, 88);
    } else {
      goalkeeperStats(85, 83, 89, 83, 89);
    }
  } else if (height == ("6'1" + '"' + " - " + "6'2" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(86, 80, 85, 85, 87);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(86, 80, 86, 85, 87);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(85, 81, 87, 84, 88);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(85, 81, 88, 84, 88);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(84, 82, 89, 83, 89);
    } else {
      goalkeeperStats(84, 83, 90, 83, 90);
    }
  } else if (height == ("6'3" + '"' + " - " + "6'4" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(85, 80, 86, 85, 88);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(85, 80, 87, 85, 88);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(84, 81, 88, 84, 89);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(84, 81, 89, 84, 89);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(83, 82, 90, 83, 90);
    } else {
      goalkeeperStats(83, 83, 91, 83, 91);
    }
  } else if (height == ("6'5" + '"' + " - " + "6'6" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(84, 80, 87, 85, 89);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(84, 80, 88, 85, 89);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(83, 81, 89, 84, 90);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(83, 81, 90, 84, 90);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(82, 82, 91, 83, 91);
    } else {
      goalkeeperStats(82, 83, 92, 83, 92);
    }
  } else if (height == ("6'7" + '"')) {
    if (weight == "100lbs - 119lbs") {
      goalkeeperStats(83, 80, 88, 85, 90);
    } else if (weight == "120lbs - 149lbs") {
      goalkeeperStats(83, 80, 89, 85, 90);
    } else if (weight == "150lbs - 174lbs") {
      goalkeeperStats(82, 81, 90, 84, 91);
    } else if (weight == "175lbs - 199lbs") {
      goalkeeperStats(82, 81, 91, 84, 91);
    } else if (weight == "200lbs - 224lbs") {
      goalkeeperStats(81, 82, 92, 83, 92);
    } else {
      goalkeeperStats(81, 83, 93, 83, 93);
    }
  }
}
