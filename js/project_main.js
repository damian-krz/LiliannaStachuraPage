let $main;
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
    $main = document.querySelector("main");
    $introSvgLetters = document.querySelector(".intro__svgLetters");
    $hamburgerButton = document.querySelector(".navBar__hamburgerButton");
    $hamburgerMenuButtons = document.querySelectorAll(".hamburgerMenu__btn");
    $hamburgerMenu = document.querySelector(".hamburgerMenu");
    $homeSlider = document.querySelector(".homeSection__homeSlider");
    $footerMenuButtons = document.querySelectorAll(".footerSection__menu-btn");
    $footerYear = document.querySelector(".footerSection__year");
    $body = document.body;
    $buttons = document.querySelectorAll(".button");
    $navBar = document.querySelector(".navBar__desktopMenu");
    $headingNarrow = document.querySelectorAll(".headingNarrow");
    $headingSection = document.querySelectorAll(".section-heading");
};

const prepareDomEvents = () => {
    window.addEventListener("resize", hamburgerMenuResizeWindowAnimation)
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

    scrollSpy(".projectSection", 1);  


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

// ------------ MENU ------------ //

const hamburgerButtonAnimation = () => {
    $hamburgerButton.classList.toggle("navBar__hamburgerButton--active");
    $hamburgerMenuButtons.forEach(e => {
        e.classList.toggle("hamburgerMenu--active");
    });
    $hamburgerMenu.classList.toggle("hamburgerMenu--active");
    if($hamburgerMenu.classList.contains("hamburgerMenu--active")) {
        $main.style.opacity = ".75";
    } else { 
        mainNormalOpacity();
    }
};

const hamburgerMenuAnimation = () => {
    $hamburgerButton.classList.remove("navBar__hamburgerButton--active");
    $hamburgerMenu.classList.remove("hamburgerMenu--active");  
    mainNormalOpacity();
}

const hamburgerMenuResizeWindowAnimation = () => {
    if(document.documentElement.clientWidth >= 768) {
        $hamburgerButton.classList.remove("navBar__hamburgerButton--active");
        $hamburgerMenu.classList.remove("hamburgerMenu--active");    
        mainNormalOpacity();
    } 
};

const mainNormalOpacity = () => {
    $main.style.opacity = "1";
}

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