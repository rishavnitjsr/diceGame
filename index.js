function refreshPage(){
    window.location.reload();
} 

var n = Math.floor(Math.random()*6 + 1);
var m = Math.floor(Math.random()*6 + 1);

document.querySelector(".img1").getAttribute("src");

if(n==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
if(n==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
if(n==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
if(n==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
if(n==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
if(n==6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}


document.querySelector(".img2").getAttribute("src");

if(m==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
if(m==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
if(m==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
if(m==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
if(m==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
if(m==6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
if(n>m){
    document.getElementsByTagName("h1")[0].innerHTML = "Harshita Wins !";
}
else if(n<m){
    document.getElementsByTagName("h1")[0].innerHTML = "Shreyas Wins !";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "Draw !";
}