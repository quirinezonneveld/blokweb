// JavaScript Document
console.log("hi");





// navigatie melding
let navigatieMelding = document.querySelector('header div:first-of-type p');
let navigatieMeldingText = ['Vandaag besteld, maandag in huis', 'Gratis verzending vanaf 39 euro', 'Gratis afhalen in 27 winkels'];
let index = 0;

function updateText() {
    navigatieMelding.textContent = navigatieMeldingText[index];
    index = (index + 1) % navigatieMeldingText.length;
    //  % navigatieMeldingText.length zorgt ervoor dat index niet buiten de grenzen van array valt
}
function animateText() {
    updateText(); // Start met de eerste tekst
    setInterval(updateText, 2000); 
  }
animateText();

/* textContent:
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent */