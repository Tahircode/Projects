
var n1=Math.random();
n1*=6;
var num1=Math.floor(n1)+1;
var imm1="dice"+num1+".png";

document.querySelectorAll("img")[0].setAttribute("src","/images/"+imm1);
var n2=Math.random();
n2*=6;
var num2=Math.floor(n2)+1;
var imm2="dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src","/images/"+imm2);
 if(num1>num2){
    document.querySelector("h1").innerHTML="Player-1 has Won";
 }
 else if(num2>num1){
    document.querySelector("h1").innerHTML="Player-2 has Won";
 }
 else{
    document.querySelector("h1").innerHTML="Match Draw";
 }

