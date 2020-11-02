import { pageLoad } from './header.js'
import { defaultContent } from './header.js'
import { aboutUsContent } from './about.js'
import { menuContent } from './menu.js'
import { blogContent } from './blog.js'
import { contactContent } from './contact.js'

pageLoad();
defaultContent();

//get button elements
document.getElementById("home");
document.getElementById("aboutUs");
document.getElementById("menu");
document.getElementById("blog");
document.getElementById("contactUs");


//functions to remove default content
function removeChildren() {
 document.getElementById("bodyContent");   
    while (bodyContent.hasChildNodes()) {  
        bodyContent.removeChild(bodyContent.firstChild);
      };
};

//event listener for home
home.addEventListener("click", () => {
    removeChildren();
    defaultContent();
});

//event listener for about us
aboutUs.addEventListener("click", () => {
    removeChildren();
    aboutUsContent();
});

//event listener for about us
menu.addEventListener("click", () => {
    removeChildren();
    menuContent();
});

//event listener for about us
blog.addEventListener("click", () => {
    removeChildren();
    blogContent();
});

//event listener for about us
contact.addEventListener("click", () => {
    removeChildren();
    contactContent();
});

/* Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents
and then runs the correct ‘tab module’ to populate it again.*/