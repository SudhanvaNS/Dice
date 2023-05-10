var v=Math.random();
v=v*6;
v=Math.floor(v)+1;
var b=Math.floor((Math.random()*6))+1;
var randomDice="dice"+v+".png";
var randomDice2="dice"+b+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomDice);
    document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(v>b){
    document.querySelector("h1").innerHTML="Player 1 won";
}else if(v<b){
    document.querySelector("h1").innerHTML="Player 2 won";
}else{
    document.querySelector("h1").innerHTML="It's a Draw";
}
