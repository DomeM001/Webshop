


var plusButtonArray = document.getElementsByClassName("plusButton");

 for(var d = 0; d < plusButtonArray.length; d++){
plusButtonArray[d].addEventListener('click', function(){
let g = this.parentNode.childNodes[3].innerHTML;
g++;
console.log(g);
this.parentNode.childNodes[3].innerHTML = g;
}
)}false;
/*
function plusOne(event){
console.log("test");
console.dir(event);
event.preventDefault();
//console.dir(event);
/*
let g = this.parentNode.childNodes[3].innerHTML;
g++;
console.log(g);
this.parentNode.childNodes[3].innerHTML = g; */


 var minusButtonArray = document.getElementsByClassName("minusButton");
for(var q = 0; q < minusButtonArray.length; q++){
minusButtonArray[q].addEventListener('click', function(){
let w = this.parentNode.childNodes[4].innerHTML;
if(w > 0){
w--;
console.log(w);
this.parentNode.childNodes[4].innerHTML = w;
}else {
console.log("Hat nicht getan. FUCK");
}
}
)}false;

var body = document.getElementById("body");
console.dir(body);