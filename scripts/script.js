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
    setInterval(updateText, 3000); 
  }
animateText();

/* textContent:
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent */





// herfst bij dille: koken met krachtige kruiden
let scrollContainer = document.querySelector('main section:nth-of-type(2) div:nth-of-type(2)');
let arrowLeft = document.querySelector('main section:nth-of-type(2) button:first-of-type');
let arrowRight = document.querySelector('main section:nth-of-type(2) button:last-of-type');

arrowLeft.addEventListener('click', function(){
    scrollContainer.scrollLeft -= 300;
});
arrowRight.addEventListener('click', function(){
    scrollContainer.scrollLeft += 300;
});
/* image galary:
https://www.youtube.com/watch?v=gzXyRa7jwk4 */



//instagram
let scrollContainerInstagram = document.querySelector('main section:nth-of-type(4) ul:first-of-type');
let arrowLeftInstagram = document.querySelector('main section:nth-of-type(4) ul:last-of-type li:first-of-type');
let arrowRightInstagram = document.querySelector('main section:nth-of-type(4) ul:last-of-type li:last-of-type');

arrowLeftInstagram.addEventListener('click', function(){
    scrollContainerInstagram.scrollLeft -= 335;
});
arrowRightInstagram.addEventListener('click', function(){
    scrollContainerInstagram.scrollLeft += 335;
});



// footer
let languageDropdown = document.querySelector('footer section:nth-of-type(3) > button');
let languageDropdownUl = document.querySelector('footer section:nth-of-type(3) ul:nth-of-type(2)');
let languageDropdownCheck = document.querySelectorAll('footer section:nth-of-type(3) ul:nth-of-type(2) li img:last-child');

languageDropdownUl.classList.add('hidden');

languageDropdownCheck.forEach(function(img) {
    console.log(img)
    img.classList.add('hidden');
});
languageDropdownCheck[0].classList.remove('hidden')


languageDropdown.addEventListener('click', function(){
    languageDropdownUl.classList.toggle('hidden');
})

let languageSelectionItem = document.querySelector('body > footer > section:nth-child(4) > ul:nth-child(6)');

languageSelectionItem.addEventListener('click', function(event) {
    let buttonElement = event.target.closest('button');

    if (buttonElement) {
        let liElement = buttonElement.closest('li');

        if (liElement) {
            // hide all checkmarks
            languageDropdownCheck.forEach(function(img) {
                img.classList.add('hidden');
            });

            // display the checkmark for the right language
            let checkmarkIcon = liElement.querySelectorAll('img')[1];

            if (checkmarkIcon) {
                checkmarkIcon.classList.remove('hidden');
            }

            // change language in main language button
            // start with img
            flagImgUrl = liElement.querySelectorAll('img')[0].getAttribute('src');

            flag = languageDropdown.querySelectorAll('img')[0];
            flag.setAttribute('src', flagImgUrl)

            // now lang name
            newLangName = buttonElement.getAttribute('lang');
            langName = languageDropdown.querySelectorAll('p')[0];
            langName.textContent = newLangName;

            
        }
    }
});

