let dpdValue = document.getElementById("dpd").value;
let dhlValue = document.getElementById("dhl").value;
let expressValue = document.getElementById("express").value;
let warenkorbValue =document.getElementById("warenkorbSumme").innerHTML;

parseFloat(warenkorbValue);
parseFloat(dpdValue);
console.log(warenkorbValue);

let dpd = document.getElementById("dpd");
let dhl = document.getElementById("dhl");
let express = document.getElementById("express");
let versadkostenID =document.getElementById("versadkostenID")
let warenkorbSumme = document.getElementById("warenkorbSumme");
let gesamtSumme = document.getElementById("gesamtSumme");


dpd.addEventListener("click", ()=>{
    versadkostenID.innerHTML = dpdValue;
    gesamtSumme.innerHTML = warenkorbValue + dpdValue;
});
dhl.addEventListener("click", ()=>{
    versadkostenID.innerHTML = dhlValue;
    gesamtSumme.innerHTML = warenkorbValue + dhlValue;
});
express.addEventListener("click", ()=>{
    versadkostenID.innerHTML = expressValue;
    gesamtSumme.innerHTML = warenkorbValue + expressValue;
});


    /*
    var x = document.getElementsByClassName('plusButton');
    console.dir(x);
    //console.log(x);
    //var h = document.getElementsByClassName("amountDiv");

    for(var d = 0; d < x.length; d++){
        x[d].addEventListener('click', function(){
            console.log("Das Element " + x[d] + "tut.");
        }
    )};
        */
    /*
    x.addEventListener('click', ()=>{
        console.log("Hello");
    });
    */
    var plusButton1 = document.getElementById("plusButton1");
    plusButton1.addEventListener('click', plusOne());
    function plusOne(event){
        let g = this.parentNode.childNodes[3].innerHTML;
        g++;
        console.log(g);
        this.parentNode.childNodes[3].innerHTML = g;
    }
    plusOne();
    //console.log(event.parentNode.childNodes[3].outerText);
    //event.parentNode.childNodes[3].outerText = 6;
