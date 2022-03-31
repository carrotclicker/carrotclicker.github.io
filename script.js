var carrotClickPoints = 0;
var pointsGotOnCarrotClick = 1;
var add1ClickPoints = 50;
var pointsGotFromClickUpgrade = 0;
var autoClickPrice = 300;
var autoClickPoints = 1;

document.body.onkeyup = function(e){
  onCarrotClick()
}

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

    document.getElementById("carrotFactoryPrice").innerHTML = autoClickPrice;
    
      function onAutoClick() {
    carrotClickPoints = carrotClickPoints + 1;

    document.getElementById("carrotPoints").innerHTML = carrotClickPoints;
  }
  
  setInterval(onAutoClick, 500);
  } else {
    alert("You don't Have enough carrots for that!");
  }
}

function loadData() {
  localStorage.getItem("carrots");

  carrotClickPoints = localStorage.carrots;

  document.getElementById("carrotPoints").innerHTML = carrotClickPoints;
}

/*
while (true) {
  localStorage.setItem("carrots", carrotClickPoints);
  
  setInterval(10000);

  localStorage.removeItem("carrots");
}
*/