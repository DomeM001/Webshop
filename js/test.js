//let plusButton = document.getElementById("plusButton");
//let minusButton = document.getElementById("minusButton");
//let amountLabel = document.getElementById("amountLabel");
let badgeID = document.getElementById("badgeID");

let plusButton1 = document.getElementById("plusButton1");
let plusButton2 = document.getElementById("plusButton2");
let plusButton3 = document.getElementById("plusButton3");
let plusButton4 = document.getElementById("plusButton4");
let plusButton5 = document.getElementById("plusButton5");
let plusButton6 = document.getElementById("plusButton6");
let plusButton7 = document.getElementById("plusButton7");
let plusButton8 = document.getElementById("plusButton8");
let plusButton9 = document.getElementById("plusButton9");

plusButton1.addEventListener('click', plusOne)

//Create addToCart Elements
try{
    let addToCartArray = ["addToCart1", "addToCart2", "addToCart3", "addToCart4", "addToCart5", "addToCart6", "addToCart7", "addToCart8", "addToCart9"];
    let i = 0;
    addToCartArray.forEach(element => {
        let j = addToCartArray[i];
        addToCartArray[i] = document.getElementById(addToCartArray[i]);
        console.log([i]);
        console.log(j);
        addToCartArray[i].addEventListener('click', addToCart)
        addToCartArray[i].style.color = "red";
        i++;
    });
} catch(Exception){
    console.log(Exception);
}

/*
//Create plusButton Elements
try{
    let plusButtonArray = ["plusButton1", "plusButton2", "plusButton3", "plusButton4", "plusButton5", "plusButton6", "plusButton7", "plusButton8", "plusButton9"];
    let k = 0;
    plusButtonArray.forEach(element => {
        //let j = plusButtonArray[k];
        document.getElementById(plusButtonArray[k]);
        //j = document.getElementById(plusButtonArray[k]);
        //j.addEventListener('click', plusOne(k));
        //j.style.color = "red";
        console.log(plusButtonArray[k]);
        plusButtonArray[k].addEventListener('click', plusOne(k));
        plusButtonArray[k].style.color = "red";

        k++;
    });
} catch(Exception){
    console.log(Exception);
} 
*/

try{

    let plusButtons = document.getElementsByClassName("plusButton");
    /*plusButtons.forEach(element => {
        addEventListener('click', plusOne);
        style.color = "red";
    });*/
    let i = 0;
    plusButtons.forEach(function(element) {
        element.style.color = "red";
        element.addEventListener('click', plusOne(i));
        i++;
      });

} catch(Exception){
    console.log(Exception);
}

//Create minusButton Elements
try{
    let minusButtonArray = ["minusButton1", "minusButton2", "minusButton3", "minusButton4", "minusButton5", "minusButton6", "minusButton7", "minusButton8", "minusButton9"];
    let a = 0;
    minusButtonArray.forEach(element => {
        let j = minusButtonArray[a];
        j = document.getElementById(minusButtonArray[a]);
        j.addEventListener('click', minusOne);
        j.style.color = "red";
        a++;
    });
} catch(Exception){
    console.log(Exception);
}

//Create amountLabel Elements
try{
    let amountLabelArray = ["amountLabel1", "amountLabel2", "amountLabel3", "amountLabel4", "amountLabel5", "amountLabel6", "amountLabel7", "amountLabel8", "amountLabel9"];
    let amountLabelElementArray = [];
    let b = 0;
    amountLabelArray.forEach(element => {
        let j = amountLabelArray[b];
        j = document.getElementById(amountLabelArray[b]);
        amountLabelElementArray[b] = j;
        j.style.color = "red";
        b++;
    });
} catch(Exception){
    console.log(Exception);
} 


function plusOne(){

    
    //if(/**Bedingung: Anzahl auf dem Display darf nicht größer sein als der Bestand */){
    //let j = document.getElementById(amountLabelArray[i]).innerHTML; 
    //j++;
    //amountLabelArray[i].innerHTML = j;
    //} else {

    //}
    //console.log("Plus");
    
}

function minusOne(){
    let i = document.getElementById("amountLabel").innerHTML; 
    
    if(i > 0){
        i--;
        document.getElementById("amountLabel").innerHTML = i;
    } else {
        throw new Exception("A negative Amount is not possible!");
    }
}

function badgeCounter(){
    //Speichere den Inhalt des Labels in einer Variable
    let j = amountLabel.innerHTML;

    //Erstelle eine Variable mit dem aktuellen Wert des Badge-Elements
    let badge = badgeID.innerHTML;

    //Das Badge Element und der Wert, um den er erhöht wird, werden addiert
    badge = badge + j;

    //Zeige den neuen Wert für die Anzahl der Artikel im Warenkorb
    badgeID.innerHTML = badge;

    //Setze das Label zurück auf 0
    amountLabel.innerHTML = 0;
}


function addToCart(){
    //TODO
    
    
    //Führe die Badge Counter Methode aus, nachdem die Artikel dem Warenkorb zugefügt worden sind
    badgeCounter();
}

