alert("website is down right now, come back later");
var carrotClickPoints = 0;
var pointsGotFromClickUpgrade = 0;
var pointsGotOnCarrotClick = 1;
var add1ClickPoints = 50;
var autoClickPrice = 300;
var carrotInvestorPrice = 1000000000;
var autoClickPoints = 1;
var commonCarrotPrice = 5000;
var uncommonCarrotPrice = 50000;
var rareCarrotPrice = 100000;
var epicCarrotPrice = 1000000;
var secondsPlayed = 0;
var minutesPlayed = 0;
var hoursPlayed = 0;

document.body.onkeyup = function(e){
  onCarrotClick()
}

function secondsPlayedTimer() {
  secondsPlayed = secondsPlayed + 1;
  document.getElementById("secondsPlayedTimerText").innerHTML = secondsPlayed;
  
  if (secondsPlayed == 60) {
    secondsPlayed = 0;
    document.getElementById("secondsPlayedTimerText").innerHTML = secondsPlayed;
    
    minutesPlayed = minutesPlayed + 1;
    document.getElementById("minutesPlayedTimerText").innerHTML = minutesPlayed;
  }
}

setInterval(secondsPlayedTimer, 1000);

function onCarrotClick() {
  carrotClickPoints = carrotClickPoints + pointsGotOnCarrotClick;

  document.getElementById("carrotPoints").innerHTML = carrotClickPoints;
}

function onClickUpgrade1Click() {
  if (carrotClickPoints >= add1ClickPoints) {
    carrotClickPoints = carrotClickPoints - add1ClickPoints;

    document.getElementById("carrotPoints").innerHTML = carrotClickPoints;

    pointsGotOnCarrotClick = pointsGotOnCarrotClick + 1;

    add1ClickPoints = add1ClickPoints + 50;
    document.getElementById("clickUpgrade1Price").innerHTML = add1ClickPoints;
  } else {
    alert("You don't have enough carrots for that!");
  }
}

function onClickUpgrade1AutoClick() {
  if (carrotClickPoints >= autoClickPrice) {
    carrotClickPoints = carrotClickPoints - autoClickPrice;

    document.getElementById("carrotPoints").innerHTML = carrotClickPoints;
    
    autoClickPrice = autoClickPrice + 300;

    document.getElementById("carrotStandPrice").innerHTML = autoClickPrice;
    
      function onAutoClick() {
    carrotClickPoints = carrotClickPoints + 1;

    document.getElementById("carrotPoints").innerHTML = carrotClickPoints;
  }
  
  setInterval(onAutoClick, 500);
  } else {
    alert("You don't Have enough carrots for that!");
  }
}

function carrotInvestorMultiply() {
  if (carrotClickPoints >= carrotInvestorPrice) {
    pointsGotOnCarrotClick = pointsGotOnCarrotClick * 2;
    
    document.getElementById("carrotInvestor3PriceText").remove();
    document.getElementById("carrotInvestorUpgrade3").remove();
  } else {
    alert("You don't have enough carrots for that!");
  }
}



function saveData() {
  localStorage.clear();
  
  let carrotClickPoints_serialized = JSON.stringify("carrotClickPoints");
  window.localStorage.setItem("carrotClickPoints", carrotClickPoints_serialized);
  
  let pointsGotOnCarrotClick_serialized = JSON.stringify("pointsGotOnCarrotClick");
  window.localStorage.setItem("pointsGotOnCarrotClick", pointsGotOnCarrotClick_serialized);
  
  let add1ClickPoints_serialized = JSON.stringify("add1ClickPoints");
  window.localStorage.setItem("add1ClickPoints", add1ClickPoints_serialized);
  
  let autoClickPrice_serialized = JSON.stringify("autoClickPrice");
  window.localStorage.setItem("autoClickPrice", autoClickPrice_serialized);
  
  let autoClickPoints_serialized = JSON.stringify("autoClickPoints");
  window.localStorage.setItem("autoClickPoints", autoClickPoints_serialized);
  
  let secondsPlayed_serialized = JSON.stringify("secondsPlayed");
  window.localStorage.setItem("secondsPlayed", secondsPlayed_serialized);
  
  let minutesPlayed_serialized = JSON.stringify("minutesPlayed");
  window.localStorage.setItem("minutesPlayed", minutesPlayed_serialized);
  
  let hoursPlayed_serialized = JSON.stringify("hoursPlayed");
  window.localStorage.setItem("hoursPlayed", hoursPlayed_serialized);
}

function loadData() {
  let carrotClickPoints_deserialized = JSON.parse(localStorage.getItem("carrotClickPoints"));
  carrotClickPoints = carrotClickPoints_deserialized;
  document.getElementById("carrotPoints").innerHTML = carrotClickPoints;
  
  let pointsGotOnCarrotClick_deserialized = JSON.parse(localStorage.getItem("pointsGotOnCarrotClick"));
  pointsGotOnCarrotClick = pointsGotOnCarrotClick_deserialized;
  
  let add1ClickPoints_deserialized = JSON.parse(localStorage.getItem((add1ClickPoints));
  add1ClickPoints = add1ClickPoints_deserialized;
  document.getElementById("clickUpgrade1Price").innerHTML = add1ClickPoints;
  
  let autoClickPrice_deserialized = JSON.parse(localStorage.getItem("autoClickPrice"));
  autoClickPrice = autoClickPrice_deserialized;
  document.getElementById("carrotStandPrice").innerHTML = autoClickPrice;
  
  let secondsPlayed_deserialized = JSON.parse(localStorage.getItem("secondsPlayed"));
  secondsPlayed = secondsPlayed_deserialized;
  document.getElementById("secondsPlayedTimerText").innerHTML = secondsPlayed;
  
  let minutesPlayed_deserialized = JSON.parse(localStorage.getItem("minutesPlayed"));
  minutesPlayed = minutesPlayed_deserialized;
  document.getElementById("minutesPlayedTimerText").innerHTML = minutesPlayed;
  
  let hoursPlayed_deserialized = JSON.parse(localStorage.getItem("hoursPlayed"));
  hoursPlayed = hoursPlayed_deserialized;
  document.getElementById("hoursPlayedTimerText").innerHTML = hoursPlayed;
}


function inDevelopment() {
  alert("This is currently in development. Come back soon for an update!");
}
