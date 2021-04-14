/* Each module will export a function that creates a div element, adds the appropriate
content and styles to that element and then appends it to the DOM. */

function createList(array, parent){
    let list = document.createElement("ul");
    for(let i = 0; i < array.length; i++){
        let item = document.createElement("li");
        item.textContent = array[i];
        list.appendChild(item);
    }
    parent.appendChild(list);
}

function menuContent() {
    let selectedPage = document.getElementById("menu");
    selectedPage.classList.add("selectedPageStyle")
    const bodyContent = document.getElementById("bodyContent")
    //page container
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("id", "menuContainer");
    pageContainer.classList.add("pageContainer");
    bodyContent.appendChild(pageContainer);
    // image for page - 50% width
    const pageImg = document.createElement("div");
    pageImg.setAttribute("id", "menuImg");
    pageImg.classList.add("pageImg");
    pageContainer.appendChild(pageImg);
    // text container for page - 50% width
    const pageTextContainer = document.createElement("div");
    pageTextContainer.setAttribute("id", "menuText");
    pageTextContainer.classList.add("pageTextContainer");
    pageContainer.appendChild(pageTextContainer);
    // menu header
    const subHeader = document.createElement("h4");
    subHeader.textContent = 'Appetisers';
    subHeader.classList.add("menuHeader");
    pageTextContainer.appendChild(subHeader);
    // menu items
    const appetisers = ["Edamame with Chilli (3.0)", "Vegi Dumplings (6.0), Wakame Salad (4.5)", "Miso Soup (2.0)"];
    createList(appetisers, pageTextContainer);
    // menu header
    const subHeader2 = document.createElement("h4");
    subHeader2.textContent = 'Rolls';
    subHeader2.classList.add("menuHeader");
    pageTextContainer.appendChild(subHeader2);
    // menu items
    const rolls = ["Avocado & Cucumber Maki (4.0)", "Red Pepper Nigiri (4.0)", "Spicy Tofu Temaki (6.0)"];
    createList(rolls, pageTextContainer);
    // menu header
    const subHeader3 = document.createElement("h4");
    subHeader3.textContent = 'Mains';
    subHeader3.classList.add("menuHeader");
    pageTextContainer.appendChild(subHeader3);
    // menu items
    const mains = ["Fried Garlic Tofu Ramen", "Vegi Katsu Curry", "Soy-Ginger Tempeh & Sesame Salad"];
    createList(mains, pageTextContainer);
    
};

export { menuContent }