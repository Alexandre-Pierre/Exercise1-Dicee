

/*var randomNumbers = [1, 2, 3, 4, 5, 6];
function dice1(){
  var randomNumber1 = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];
  if (randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  }

  return randomNumber1;
}

function dice2(){
  var randomNumber2 = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];
  if (randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }

  return randomNumber2;
}

var randomNumber1 = dice1();
var randomNumber2 = dice2();

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}*/


var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎊 Player 1 wins!"
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🎊"
}
else{
  document.querySelector("h1").innerHTML = "It's a draw!"
}
