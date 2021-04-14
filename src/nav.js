// Creates header/nav
function navContent() {
    //Identifying parent container
    const container = document.getElementById("container");
    //Creating header and text
    const header = document.createElement("header");
    const headerText = document.createElement("h1");
    headerText.setAttribute("id", "headerLogo");
    headerText.textContent = "Vegi 🍱 Sushi";
    container.appendChild(header);
    header.appendChild(headerText);
    //Creating sub-header
    const subHeader = document.createElement("nav");
    subHeader.setAttribute("id", "subHeader");
    header.appendChild(subHeader);
    //Creating sub-header boxes
    const hamburgerContainer = document.createElement("div");
    hamburgerContainer.classList.add("hamburgerContainer");
    subHeader.appendChild(hamburgerContainer);
    for(let i=0; i < 3; i++){
        let layer = document.createElement("div");
        layer.classList.add("layer");
        hamburgerContainer.appendChild(layer);
    }
    hamburgerContainer.addEventListener("click", () => {
        let navItems = document.querySelectorAll(".headerButton");
        for(let i=0; i<navItems.length; i++){
            if(navItems[i].style.display === "none"){
                navItems[i].style.display = "block";   
            } else {
                navItems[i].style.display = "none"
            }
        }
    });
    //About Us
    const aboutUs = document.createElement("button");
    aboutUs.setAttribute("id", "about");
    aboutUs.setAttribute("class", "headerButton");
    aboutUs.textContent = "About";
    subHeader.appendChild(aboutUs);
    //Menu
    const menu = document.createElement("button");
    menu.setAttribute("id", "menu");
    menu.setAttribute("class", "headerButton");
    menu.textContent = "Menu";
    subHeader.appendChild(menu);
    //book
    const book = document.createElement("button");
    book.setAttribute("id", "book");
    book.setAttribute("class", "headerButton");
    book.textContent = "Book";
    subHeader.appendChild(book);
    //Contact Us
    const contact = document.createElement("button");
    contact.setAttribute("id", "contact");
    contact.setAttribute("class", "headerButton");
    contact.textContent = "Contact";
    subHeader.appendChild(contact);
    //Creating body content divs
    const bodyContent = document.createElement("div");
    bodyContent.setAttribute("id", "bodyContent");
    container.appendChild(bodyContent);
};

export { navContent }