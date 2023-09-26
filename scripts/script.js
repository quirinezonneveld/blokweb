// JavaScript Document
console.log("hi");



//sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





// navigatie melding
let navigatieMelding = document.querySelector('header div:first-of-type p');
let navigatieMeldingCheck = document.querySelector('header div:first-of-type img');
let navigatieMeldingText = ['Vandaag besteld, maandag in huis', 'Gratis verzending vanaf 39 euro', 'Gratis afhalen in 27 winkels'];
let index = 0;


async function updateAndRemove() {
    navigatieMelding.classList.add('navigatieVerschijn');
    navigatieMeldingCheck.classList.add('navigatieVerschijn');

    navigatieMelding.textContent = navigatieMeldingText[index];
    index = (index + 1) % navigatieMeldingText.length;

    await sleep(3600);
    navigatieMelding.classList.remove('navigatieVerschijn');
    navigatieMeldingCheck.classList.remove('navigatieVerschijn');
        
}
updateAndRemove();
setInterval(updateAndRemove, 3000);

/* textContent:
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent */





// hamburgermenu
let hamburgermenuButton = document.querySelector('header nav ul:first-of-type li:first-of-type');
let hamburgermenuBovenkant = document.querySelector('header nav ul:nth-of-type(2)');
let hamburgermenuOnderkant = document.querySelector('footer > ul:last-of-type');

hamburgermenuBovenkant.classList.add('hiddenVisibility');
hamburgermenuOnderkant.classList.add('hiddenVisibility');

function openHamburgermenu() {
    hamburgermenuBovenkant.classList.remove('hiddenVisibility');
    hamburgermenuOnderkant.classList.remove('hiddenVisibility');
};
hamburgermenuButton.addEventListener('click', openHamburgermenu);






// herfst bij dille: koken met krachtige kruiden
let scrollContainer = document.querySelector('main section:nth-of-type(2) ul');
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



//theepot
let scrollContainerTheepot = document.querySelector('section:nth-child(1) ul');






/**********/
/* footer */
/**********/

/* service, over ons & inspiratie */
let informationButtons = document.querySelectorAll('footer section:nth-of-type(3) ul:first-of-type li button');
let informationUls = document.querySelectorAll('footer section:nth-of-type(3) ul:first-of-type li ul');

informationUls.forEach(function(ul) {
    ul.classList.add('hidden');
});

informationButtons.forEach(function(button, index) {
    button.addEventListener('click', function(){
        informationUls[index].classList.toggle('hidden');
    });
});





/* language dropdown */
let languageDropdown = document.querySelector('footer section:nth-of-type(3) > button');
let languageDropdownUl = document.querySelector('footer section:nth-of-type(3) ul:nth-of-type(2)');
let languageDropdownArrow = document.querySelector('footer section:nth-of-type(3) > button img:last-of-type');
let languageDropdownCheck = document.querySelectorAll('footer section:nth-of-type(3) ul:nth-of-type(2) li img:last-child');


//hidden
languageDropdownUl.classList.add('hidden');

languageDropdownCheck.forEach(function(img) {
    img.classList.add('hidden');
});
languageDropdownCheck[0].classList.remove('hidden')
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */


// toggle
languageDropdown.addEventListener('click', function(){
    languageDropdownUl.classList.toggle('hidden');

    // languageDropdownArrow.src='images/iconArrowDropdownUp.png';
})


// click language
function languageDropdownClick(event) {
    let buttonElement = event.target.closest('button');

    if (buttonElement) {
        let liElement = buttonElement.closest('li');

        // meaning a <button> element was clicked inside the languageDropdownUl element.
        

        if (liElement) {
            // hide all checkmarks
            languageDropdownCheck.forEach(function(img) {
                img.classList.add('hidden');
            });


            // display checkmark right language
            let checkmarkIcon = liElement.querySelectorAll('img')[1];

            if (checkmarkIcon) {
                checkmarkIcon.classList.remove('hidden');
            }


            // change language img
            flagUl = liElement.querySelectorAll('img')[0].getAttribute('src');
            flag = languageDropdown.querySelectorAll('img')[0];

            flag.setAttribute('src', flagUl)

        
            // now lang name
            langNameUl = buttonElement.getAttribute('lang');
            langName = languageDropdown.querySelectorAll('p')[0];
            
            langName.textContent = langNameUl;
        }
    }
};
languageDropdownUl.addEventListener('click', languageDropdownClick);

/* target: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
   closest(): https://www.w3schools.com/jsref/met_element_closest.asp

   the event.target property can be used in order to implement event delegation.
   the closest() method searches up the DOM tree for elements which matches a specified CSS selector.

   GetAttribute(): https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute 
   SetAttribute(): https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute 
*/

