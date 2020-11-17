let $introSvgLetters;
let $hamburgerButton;
let $hamburgerMenuButtons;
let $homeSlider;
let $footerMenuButtons;
let $hamburgerMenu;
let $body;
let $footerYear;
let $navBar;
let $headingNarrow;
let $headingSection;

const initialize = () => {
    prepareDomElements();
    prepareDomEvents();
};

const prepareDomElements = () => {
    $introSvgLetters = document.querySelector(".intro__svgLetters");
    $hamburgerButton = document.querySelector(".navBar__hamburgerButton");
    $hamburgerMenuButtons = document.querySelectorAll(".hamburgerMenu__btn");
    $hamburgerMenu = document.querySelector(".hamburgerMenu");
    $homeSlider = document.querySelector(".homeSection__homeSlider");
    $footerMenuButtons = document.querySelectorAll(".footerSection__btn");
    $footerYear = document.querySelector(".footerSection__year");
    $body = document.body;
    $buttons = document.querySelectorAll(".button");
    $aboutMe = document.querySelector(".aboutMeSection");
    $navBar = document.querySelector(".navBar__desktopMenu");
    $headingNarrow = document.querySelectorAll(".headingNarrow");
    $headingSection = document.querySelectorAll(".section-heading");
};

const prepareDomEvents = () => {
    // $introSvgLetters.addEventListener("load", introSvgAnimation);
    window.addEventListener("load", homeSlideShow);
    window.addEventListener("resize", hamburgerMenuResizeWindowAnimation)
    $homeSlider.addEventListener("transitionend", infiniteHomeSlideShow);
    $hamburgerButton.addEventListener("click", hamburgerButtonAnimation);
    $hamburgerMenuButtons.forEach((e) => {
        e.addEventListener("click", hamburgerMenuAnimation);
    }); 
    $footerMenuButtons.forEach((e) => {
        e.addEventListener("click", hamburgerMenuAnimation)
    });
    $body.addEventListener("click", closeHamburgerMenu);
    window.addEventListener("load", currentYear);

    const scrollSpy = (sectionTarget, child) => {
        const section = document.querySelector(sectionTarget);
        const button = $navBar.children[child];
        
        window.addEventListener("scroll", () => {
            const top = Math.floor(section.getBoundingClientRect().top);
            const bottom = Math.floor(section.getBoundingClientRect().bottom);

            if(top <= 200 && bottom > 200) {
                button.classList.add("scrollSpy");
            } else {
                button.classList.remove("scrollSpy");
            };
        });
    };

    scrollSpy(".homeSection", 0);  
    scrollSpy(".aboutMeSection", 1);  
    scrollSpy(".portfolioSection", 2);  
    scrollSpy(".contactSection", 3); 

    const headingSpy = () => {
        const headingNarrow = $headingNarrow;
        const headingSection = document.querySelectorAll(".section-heading");
        
        window.addEventListener("scroll", () => {            
            headingNarrow.forEach((e) => {
                const top = Math.floor(e.getBoundingClientRect().top);

                if(top <= 200) {
                    e.classList.add("headingNarrow--active");
                } else {
                    e.classList.remove("headingNarrow--active");
                };
            });

            headingSection.forEach((e) => {
                const top = Math.floor(e.getBoundingClientRect().top);

                if(top <= 200) {
                    e.classList.add("section-heading--active");
                } else {
                    e.classList.remove("section-heading--active");
                };
            });
        });
    };

    headingSpy();
};


// ------------ INTRO ------------ //

// const introSvgAnimation = () => {
//     const svgDocument = $introSvgLetters.contentDocument;
//     const svg = svgDocument.getElementById("svg");
//     const svgLetters = svgDocument.getElementById("svg").children;
//     let nameLetterPostion = 1;
//     let surnameLetterPosition = 16;
//     let numberOfLetters = 16;   
//     let totalLengthNameLetters = svgDocument.getElementById("svg").children[nameLetterPostion].getTotalLength();
//     let totalLengthSurnameLetters = svgDocument.getElementById("svg").children[surnameLetterPosition].getTotalLength();
    
//     const drawLetters = () => {
//         for(let i = 1; i <= numberOfLetters; i++) {
//             let totalLength = svgDocument.getElementById("svg").children[i].getTotalLength();
//             svgLetters[i].style.strokeDasharray = totalLength + "px";
//             svgLetters[i].style.strokeDashoffset = totalLength + "px";
//         }; 
//         iterateSvgLetters();
//     };
    
//     const iterateSvgLetters = () => {
//         const drawNameID = setInterval(drawName, 2.5);
//         const drawSurnameID = setInterval(drawSurname, 2.5);
        
//         function drawName() {
//             if(nameLetterPostion == numberOfLetters / 2) {
//                 clearInterval(drawNameID);
//             } else if(totalLengthNameLetters <= 0) {
//                 svgLetters[nameLetterPostion].style.strokeDashoffset = totalLengthNameLetters - totalLengthNameLetters;
//                 nameLetterPostion++;
//                 totalLengthNameLetters = svgDocument.getElementById("svg").children[nameLetterPostion].getTotalLength();
//             } else { 
//                 totalLengthNameLetters -= 2.5;
//                 svgLetters[nameLetterPostion].style.strokeDashoffset = totalLengthNameLetters + "px";
//             }; 
//         };
        
//         function drawSurname() {
//             if(surnameLetterPosition < numberOfLetters / 2) {
//                 clearInterval(drawSurnameID);
//                 svg.style.transition = "1.5s";
//                 svg.style.fillOpacity = "0";
//             } else if(totalLengthSurnameLetters <= 0) {
//                 svgLetters[surnameLetterPosition].style.strokeDashoffset = totalLengthSurnameLetters - totalLengthSurnameLetters;
//                 surnameLetterPosition--;  
//                 totalLengthSurnameLetters = svgDocument.getElementById("svg").children[surnameLetterPosition].getTotalLength();
//             } else {
//                 totalLengthSurnameLetters -= 2.5;
//                 svgLetters[surnameLetterPosition].style.strokeDashoffset = totalLengthSurnameLetters + "px";
//             }; 
//         };
//    };
//     drawLetters();
// };

// ------------ SLIDESHOW ------------ //

const homeSlideShow = () => {
    setInterval(() => {
        $homeSlider.style.transform = "translateX(-33.3%)";
    }, 1000);
};

const infiniteHomeSlideShow = () => {
    $homeSlider.appendChild($homeSlider.firstElementChild);
    $homeSlider.style.transition = "none";
    $homeSlider.style.transform = "translateX(0)";
    setTimeout(() => {
        $homeSlider.style.transition = "transform 5s linear 10s";
    });
};

// ------------ MENU ------------ //

const hamburgerButtonAnimation = () => {
    $hamburgerButton.classList.toggle("navBar__hamburgerButton--active");
    $hamburgerMenuButtons.forEach(e => {
        e.classList.toggle("hamburgerMenu--active");
    });
    $hamburgerMenu.classList.toggle("hamburgerMenu--active");
};

const hamburgerMenuAnimation = () => {
    $hamburgerButton.classList.remove("navBar__hamburgerButton--active");
    $hamburgerMenu.classList.remove("hamburgerMenu--active");   
}

const hamburgerMenuResizeWindowAnimation = () => {
    if(document.documentElement.clientWidth >= 768) {
        $hamburgerButton.classList.remove("navBar__hamburgerButton--active");
        $hamburgerMenu.classList.remove("hamburgerMenu--active");    
    } 
};

const closeHamburgerMenu = (e) => {
    if(e.target.closest("main")) {
        hamburgerMenuAnimation();
    };
};

// ------------ FOOTER ------------ //

const currentYear = () => {
    const year = (new Date).getFullYear();
    $footerYear.innerHTML = year;
};


document.addEventListener("DOMContentLoaded", initialize);