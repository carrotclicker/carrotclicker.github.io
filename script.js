var carrotClickPoints = 0;
var pointsGotOnCarrotClick = 1;
var add1ClickPoints = 50;
var pointsGotFromClickUpgrade = 0;
var autoClickPrice = 300;
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

function commonCarrotUpgradeClick() {
  if (carrotClickPoints >= commonCarrotPrice) {
    carrotClickPoints = carrotClickPoints - commonCarrotPrice;
    pointsGotOnCarrotClick = pointsGotOnCarrotClick + 50;
    
    var commonCarrotImage = document.getElementById("commonCarrotUpgradeButton");
    commonCarrotImage.remove();
    
    var commonCarrotText = document.getElementById("commonCarrotUpgradeText");
    commonCarrotText.remove();
  } else {
    alert("You don't have enough carrots for that!");
  }
}

function uncommonCarrotUpgradeClick() {
  if (carrotClickPoints >= uncommonCarrotPrice) {
    carrotClickPoints = carrotClickPoints - uncommonCarrotPrice;
    pointsGotOnCarrotClick = pointsGotOnCarrotClick + 100;
    
    var uncommonCarrotImage = document.getElementById("uncommonCarrotUpgradeButton");
    uncommonCarrotImage.remove();
    
    var uncommonCarrotText = document.getElementById("uncommonCarrotUpgradeText");
    uncommonCarrotText.remove();
  } else {
    alert("You don't have enough carrots for that!");
  }
}

function rareCarrotUpgradeClick() {
  if (carrotClickPoints >= rareCarrotPrice) {
    carrotClickPoints = carrotClickPoints - rareCarrotPrice;
    pointsGotOnCarrotClick = pointsGotOnCarrotClick + 1000;
    
    var rareCarrotImage = document.getElementById("rareCarrotUpgradeButton");
    rareCarrotImage.remove();
    
    var rareCarrotText = document.getElementById("rareCarrotUpgradeText");
    rareCarrotText.remove();
  } else {
    alert("You don't have enough carrots for that!");
  }
}

function epicCarrotUpgradeClick() {
  if (carrotClickPoints >= epicCarrotPrice) {
    carrotClickPoints = carrotClickPoints - epicCarrotPrice;
    pointsGotOnCarrotClick = pointsGotOnCarrotClick + 10000;
    
    document.getElementById("epicCarrotUpgradeButton").remove();
    
    document.getElementById("epicCarrotUpradeText").remove();
  } else {
    alert("You don't have enough carrots for that!");
  }
}



/*
function loadData() {
  localStorage.getItem("carrots");

  carrotClickPoints = localStorage.carrots;

  document.getElementById("carrotPoints").innerHTML = carrotClickPoints;
}


while (true) {
  localStorage.setItem("carrots", carrotClickPoints);
  
  setInterval(10000);

  localStorage.removeItem("carrots");
}
*/
