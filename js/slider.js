//Slider Div
let sliderImage = document.getElementById("sliderImage");

//Zeitintervall für den Bildwechsel
let time = 3000; 

//Images Array
let images = [];

//Start Index Punkt
let i = 0;

//Image List
images[0]='../images/sliderImages/beutel1.jpeg';
images[1]='../images/sliderImages/beutel2.jpeg';
images[2]='../images/sliderImages/beutel3.jpeg';

//Change Image Methode
function changeImage(){
    document.sliderImage.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImage()", time);
}

//Starte Funktion, wenn das die Seite vollständig geladen ist
window.onload = changeImage;

