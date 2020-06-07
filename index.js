var r1=Math.floor(Math.random()*6)+1;
var i="dice"+r1+".png";
var s="images/"+i;
var w=document.querySelectorAll("img")[0];
w.setAttribute("src",s);
var k=Math.floor(Math.random()*6)+1;
var s1="images/dice"+k+".png";
var w=document.querySelectorAll("img")[1].setAttribute("src",s1);
