import './reset.css';
import './styles.css';
import { navContent } from './nav.js';
import { homeContent } from './home.js';
import { aboutContent } from './about.js';
import { menuContent } from './menu.js';
import { bookContent } from './book.js';
import { contactContent } from './contact.js';

//for some reason global variables for the header link didn't work so have repeated

//functions to remove default content
function removeChildren() {
    let bodyContent = document.getElementById("bodyContent");   
    while (bodyContent.hasChildNodes()) {  
        bodyContent.removeChild(bodyContent.firstChild);
    };

    let home = document.getElementById("headerLogo");
    let about = document.getElementById("about");
    let menu = document.getElementById("menu");
    let book = document.getElementById("book");
    let contact = document.getElementById("contact");
    let headerLinks = [home, about, menu, book, contact];
    for(let i = 0; i < headerLinks.length; i++){
        if(headerLinks[i].classList.contains("selectedPageStyle")){
            headerLinks[i].classList.remove("selectedPageStyle")
        }
    };
};

function addNavEvents(){
    //get button elements
    let home = document.getElementById("headerLogo");
    let about = document.getElementById("about");
    let menu = document.getElementById("menu");
    let book = document.getElementById("book");
    let contact = document.getElementById("contact");
    //event listener for home
    home.addEventListener("click", () => {
        removeChildren();
        homeContent();
    });

    //event listener for about us
    about.addEventListener("click", () => {
        removeChildren();
        aboutContent();
    });

    //event listener for about us
    menu.addEventListener("click", () => {
        removeChildren();
        menuContent();
    });

    //event listener for about us
    book.addEventListener("click", () => {
        removeChildren();
        bookContent();
    });

    //event listener for about us
    contact.addEventListener("click", () => {
        removeChildren();
        contactContent();
    });
};

function setUpPage(){
    navContent();
    homeContent();
    addNavEvents();
};
setUpPage();