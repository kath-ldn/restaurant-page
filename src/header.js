function pageLoad() {

//Identifying parent container
const content = document.getElementById("content");

//Creating header and text
const header = document.createElement("div");
header.setAttribute("id", "header");
const headerText = document.createElement("h1");
headerText.textContent = "Vegan Cat Sushi";
content.appendChild(header);
header.appendChild(headerText);

//Creating sub-header
const subHeader = document.createElement("div");
subHeader.setAttribute("id", "subHeader");
content.appendChild(subHeader);

//Creating sub-header boxes
//Home
const home = document.createElement("button");
home.setAttribute("id", "home");
home.setAttribute("class", "headerButton");
home.textContent = "Home";
subHeader.appendChild(home);
//About Us
const aboutUs = document.createElement("button");
aboutUs.setAttribute("id", "aboutUs");
aboutUs.setAttribute("class", "headerButton");
aboutUs.textContent = "About Us";
subHeader.appendChild(aboutUs);
//Menu
const menu = document.createElement("button");
menu.setAttribute("id", "menu");
menu.setAttribute("class", "headerButton");
menu.textContent = "Menu";
subHeader.appendChild(menu);
//Blog
const blog = document.createElement("button");
blog.setAttribute("id", "blog");
blog.setAttribute("class", "headerButton");
blog.textContent = "Blog";
subHeader.appendChild(blog);
//Contact Us
const contact = document.createElement("button");
contact.setAttribute("id", "contact");
contact.setAttribute("class", "headerButton");
contact.textContent = "Contact Us";
subHeader.appendChild(contact);

//Creating body content
const bodyContent = document.createElement("div");
bodyContent.setAttribute("id", "bodyContent");
content.appendChild(bodyContent);

};

function defaultContent() {

    //Creating tagline
    const tagText = "Come and enjoy delicious plant-based sushi, in a room filled with rescue cats.\
    Choose from ten varieties including tofu, avocado, cucumber, mushroom and pepper.\
    Come for the sushi, stay for the cats.";
    const tagLine = document.createElement("div");
    tagLine.setAttribute("id", "tagLine");
    tagLine.textContent = tagText;
    bodyContent.appendChild(tagLine);

    //Creating imgbox
    const imgBox = document.createElement("div");
    imgBox.setAttribute("id", "imgBox");
    bodyContent.appendChild(imgBox);

    //Adding image1
    var img1 = document.createElement("img");
    img1.src = "sushi.jpg";
    img1.setAttribute("id", "img1");
    img1.setAttribute("class", "img");
    imgBox.appendChild(img1);

    //Adding image2
    var img2 = document.createElement("img");
    img2.src = "cat1.jpg";
    img2.setAttribute("id", "img2");
    img2.setAttribute("class", "img");
    imgBox.appendChild(img2);

    //Adding image3
    var img3 = document.createElement("img");
    img3.src = "sushi2.jpg";
    img3.setAttribute("id", "img3");
    img3.setAttribute("class", "img");
    imgBox.appendChild(img3);

    //Adding image4
    var img4 = document.createElement("img");
    img4.src = "cat2.jpg";
    img4.setAttribute("id", "img4");
    img4.setAttribute("class", "img");
    imgBox.appendChild(img4);
    }

export { pageLoad }
export { defaultContent }