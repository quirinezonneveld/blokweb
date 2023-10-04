// JavaScript Document
console.log("hi");



//sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





// loading state
window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loaderHidden');

    loader.addEventListener('transitioned', () => {
        document.body.removeChild("loader");
    })
})
/* loading state:
https://youtu.be/q76TexbMXJg?si=vlp8dG1rG1nBCQAv */





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

if (navigatieMelding) {
    updateAndRemove();
    setInterval(updateAndRemove, 4000);
}
/* textContent:
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent */






// hamburgermenu
let hamburgermenuButton = document.querySelector('header nav ul:first-of-type li:first-of-type');
let hamburgermenuBovenkant = document.querySelector('header nav ul:nth-of-type(2)');
let hamburgermenuOnderkant = document.querySelector('footer > ul:last-of-type');
let fixedButtons = document.querySelector('main > ul:last-of-type');



hamburgermenuBovenkant.classList.add('hiddenVisibility');
hamburgermenuOnderkant.classList.add('hiddenVisibility');

function openHamburgermenu() {
    hamburgermenuBovenkant.classList.remove('hiddenVisibility');
    hamburgermenuOnderkant.classList.remove('hiddenVisibility');
    fixedButtons.classList.add('hiddenVisibility');
};

hamburgermenuButton.addEventListener('click', openHamburgermenu);





// settings 
let settingsButton = document.querySelector('main > ul:last-of-type > li:first-of-type > button');
let settingsUl = document.querySelector('main > ul:last-of-type li:first-of-type ul');
let root = document.querySelector(':root');


let darklightModeButton = document.querySelector('main > ul:last-of-type li:first-of-type ul li:first-of-type button');
let darklightModeImg = document.querySelector('main > ul:last-of-type li:first-of-type ul li:first-of-type button img');


let fallThemeButton = document.querySelector('main > ul:last-of-type li:first-of-type ul li:nth-of-type(2) button');
let fallThemeImg = document.querySelector('main > ul:last-of-type li:first-of-type ul li:nth-of-type(2) button img');
const fallAnimations = document.getElementsByClassName('fallDecoration');


let fontSizeButton = document.querySelector('main > ul:last-of-type li:first-of-type ul li:nth-of-type(3) button');
let fontSizeImg = document.querySelector('main > ul:last-of-type li:first-of-type ul li:nth-of-type(3) button img');


let soundButton = document.querySelector('main > ul:last-of-type li:first-of-type ul li:nth-of-type(4) button'); 
const soundImg = document.querySelector('main > ul:last-of-type li:first-of-type ul li:nth-of-type(4) button img'); 
const audio = new Audio('sounds/riverForest.mp3');
audio.loop = true;
let buttons = document.querySelectorAll('button');
let links = document.querySelectorAll('a');



settingsUl.classList.add('hidden');

function openSettings() {
    settingsUl.classList.toggle('hidden');
    console.log('open settings')
};
settingsButton.addEventListener('click', openSettings);





// darklight mode
darklightModeButton.addEventListener('click', function() {
  root.classList.toggle('darkmode');

  if (darklightModeImg.src.includes("darkmode.png")) {
    darklightModeImg.src= "images/lightmode.png";
  } else {
    darklightModeImg.src= "images/darkmode.png";
  }
});





// fall theme
for (let i = 0; i < fallAnimations.length; i++) {
  fallAnimations[i].classList.add('hidden');
}
// Loopt door de gevonden elementen en voegt "hidden" toe

fallThemeButton.addEventListener('click', function() {
    root.classList.toggle('fallTheme');
    
    for (let i = 0; i < fallAnimations.length; i++) {
        fallAnimations[i].classList.toggle('hidden');
    }

    if (fallThemeImg.src.includes("fallThemeOn.png")) {
        fallThemeImg.src= "images/fallThemeOff.png";
      } else {
        fallThemeImg.src= "images/fallThemeOn.png";
    }
});





// font size
fontSizeButton.addEventListener('click', function() {
    root.classList.toggle('largeText');
    console.log('geklikt')

    if (fontSizeImg.src.includes("fontSize.png")) {
        fontSizeImg.src= "images/fontSizeSmall.png";
      } else {
        fontSizeImg.src= "images/fontSize.png";
    }
});





// sound
function playsound() {
    if (soundImg.src.includes("soundOn.png")) {
        function riverForest() {
            audio.play();
        }
        riverForest();

        soundImg.src = "images/soundOff.png";
    } else {
        audio.pause();
        soundImg.src = "images/soundOn.png";
    }
}
soundButton.addEventListener('click', playsound);



// sound button
function buttonSound() {
    const audio = new Audio('sounds/buttonSound.mp3');
    audio.play();
}

buttons.forEach(function(button) {
    button.addEventListener('click', buttonSound);
});





// herfst bij dille: koken met krachtige kruiden
let scrollContainer = document.querySelector('main section:nth-of-type(2) ul');
let arrowLeft = document.querySelector('main section:nth-of-type(2) button:first-of-type');
let arrowRight = document.querySelector('main section:nth-of-type(2) button:last-of-type');

if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener('click', function(){
        scrollContainer.scrollLeft -= 300;
    });
    arrowRight.addEventListener('click', function(){
        scrollContainer.scrollLeft += 300;
    });
}
/* image galary:
https://www.youtube.com/watch?v=gzXyRa7jwk4 */





//instagram
let scrollContainerInstagram = document.querySelector('main section:nth-of-type(4) ul:first-of-type');
let arrowLeftInstagram = document.querySelector('main section:nth-of-type(4) ul:last-of-type li:first-of-type');
let arrowRightInstagram = document.querySelector('main section:nth-of-type(4) ul:last-of-type li:last-of-type');

if (arrowLeftInstagram && arrowRightInstagram) {
    arrowLeftInstagram.addEventListener('click', function(){
        scrollContainerInstagram.scrollLeft -= 335;
    });
    arrowRightInstagram.addEventListener('click', function(){
        scrollContainerInstagram.scrollLeft += 335;
    });

}





//theepot
let scrollContainerTheepot = document.querySelector('section:nth-child(1) ul');
let buttonTheepot = document.querySelector('section:nth-child(1) div button img');
let radioButtonLeft = document.querySelector('section:nth-child(1) input:first-of-type');
let radioButtonRight = document.querySelector('section:nth-child(1) input:last-of-type');

if (scrollContainerTheepot) {
    radioButtonLeft.addEventListener('click', function() {
        scrollContainerTheepot.scrollLeft -= 375;
        buttonTheepot.src = "images/iconArrow3.png";
    });

    radioButtonRight.addEventListener('click', function() {
        scrollContainerTheepot.scrollLeft += 375;
        buttonTheepot.src = "images/iconArrow3Left.png";
    });

    buttonTheepot.addEventListener('click', function() {
        if (buttonTheepot.src.includes("iconArrow3.png")) {
            scrollContainerTheepot.scrollLeft += 375;
            buttonTheepot.src = "images/iconArrow3Left.png";
            radioButtonRight.checked = true;
        } else {
            scrollContainerTheepot.scrollLeft -= 375;
            buttonTheepot.src = "images/iconArrow3.png";
            radioButtonLeft.checked = true;
        }
    });
}





// dropdowns productinformatie & specificaties
let buttonProductinformatie = document.querySelector('.theepotDropdown li:first-of-type button');
let iconProductinformatie = document.querySelector('.theepotDropdown li:first-of-type button img');
let buttonSpecificaties = document.querySelector('.theepotDropdown li:last-of-type button');
let iconSpecificaties = document.querySelector('.theepotDropdown li:last-of-type button img');

let productinformatie = document.querySelectorAll('.theepotDropdown li p');
let specificaties = document.querySelectorAll('.theepotDropdown li div ul');


console.log(window.location.pathname);
if (window.location.pathname === '/theepot.html') {
    // productinformatie.classList.add('hidden');

    productinformatie.forEach(function(p) {
        p.classList.add('hidden');
    });
    
    specificaties.forEach(function(ul) {
        ul.classList.add('hidden');
    });

    function openProductinformatieTheepot() {

        productinformatie.forEach(function(p) {
            p.classList.toggle('hidden');
        });

    };
    buttonProductinformatie.addEventListener('click', openProductinformatieTheepot);


    function openSpecificatiesTheepot() {
        specificaties.forEach(function(ul) {
            ul.classList.toggle('hidden');
        });
    };
    buttonSpecificaties.addEventListener('click', openSpecificatiesTheepot);
}





/**********/
/* footer */
/**********/

/* dropdowns: service, over ons & inspiratie */
let buttonService = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:first-of-type button');
let iconService = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:first-of-type button img');
let service = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:first-of-type ul');

let buttonOverOns = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:nth-of-type(2) button');
let iconOverOns = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:nth-of-type(2) button img');
let overOns = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:nth-of-type(2) ul');

let buttonInspiratie = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:last-of-type button');
let iconInspiratie = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:last-of-type button img');
let inspiratie = document.querySelector('footer section:nth-of-type(3) ul:first-of-type li:last-of-type ul');



service.classList.add('hidden');
overOns.classList.add('hidden');
inspiratie.classList.add('hidden');


function openService() {
    service.classList.toggle('hidden');

    if (service.classList.contains('hidden')) {
        iconService.src = "images/iconAdd.svg";
    } else {
        iconService.src = "images/iconStripe.svg";
    }
};
buttonService.addEventListener('click', openService);

function openOverOns() {
    overOns.classList.toggle('hidden');

    if (overOns.classList.contains('hidden')) {
        iconOverOns.src = "images/iconAdd.svg";
    } else {
        iconOverOns.src = "images/iconStripe.svg";
    }
};
buttonOverOns.addEventListener('click', openOverOns);

function openInspiratie() {
    inspiratie.classList.toggle('hidden');

    if (inspiratie.classList.contains('hidden')) {
        iconInspiratie.src = "images/iconAdd.svg";
    } else {
        iconInspiratie.src = "images/iconStripe.svg";
    }
};
buttonInspiratie.addEventListener('click', openInspiratie);





/* language dropdown */
let languageDropdown = document.querySelector('body > footer > section:nth-child(4) > button');
let languageDropdownUl = document.querySelector('footer section:nth-of-type(3) ul:nth-of-type(2)');
let languageDropdownArrow = document.querySelector('footer section:nth-of-type(3) > button img:last-of-type');
let languageDropdownCheck = document.querySelectorAll('footer section:nth-of-type(3) ul:nth-of-type(2) li img:last-child');


//hidden
if (languageDropdown) {
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
}



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
            langName = languageDropdown.querySelectorAll('span')[0]; // debug: undefined
            langName.textContent = langNameUl;
        }
    }
};

if (languageDropdownUl) {

    languageDropdownUl.addEventListener('click', languageDropdownClick);
}

/* target: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
   closest(): https://www.w3schools.com/jsref/met_element_closest.asp

   the event.target property can be used in order to implement event delegation.
   the closest() method searches up the DOM tree for elements which matches a specified CSS selector.

   GetAttribute(): https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute 
   SetAttribute(): https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute 
*/





// scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const elementsToObserve = document.querySelectorAll('.hiddenAnimation, .slideAnimation');

elementsToObserve.forEach((element) => {
    observer.observe(element);
});

/* scroll-animation:
https://www.youtube.com/watch?v=huVJW23JHKQ https://youtu.be/huVJW23JHKQ?si=iJcgi2joHmCez_Jo */