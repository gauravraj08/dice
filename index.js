var randomNumber1=Math.floor(Math.random()*6)+1;

var dice="images/dice"+randomNumber1+".png";

var imageSource=document.querySelectorAll("img")[0];

imageSource.setAttribute("src",dice);

var randomNumber2=Math.floor(Math.random()*6)+1;

var dice2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",dice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}