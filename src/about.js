function aboutContent() {
    let selectedPage = document.getElementById("about");
    selectedPage.classList.add("selectedPageStyle")
    const bodyContent = document.getElementById("bodyContent")
    //page container
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("id", "aboutContainer");
    pageContainer.classList.add("pageContainer");
    bodyContent.appendChild(pageContainer);
    // text container for page - 50% width
    const pageTextContainer = document.createElement("div");
    pageTextContainer.setAttribute("id", "aboutText");
    pageTextContainer.classList.add("pageTextContainer");
    pageContainer.appendChild(pageTextContainer);
    // page sub-header text
    const subHeader = document.createElement("h3");
    subHeader.textContent = '"One of the most exciting sushi restaurants to hit London in a long time" - Time London';
    pageTextContainer.appendChild(subHeader);
    // page text body
    const pageText = document.createElement("p");
    pageText.classList.add("pageText");
    pageText.textContent = "We use only the freshest, locally-sourced vegetarian ingredients to craft beautiful sushi and Japanese-inspired dishes and sides.";
    pageTextContainer.appendChild(pageText);
    // page text body
    const pageText2 = document.createElement("p");
    pageText.classList.add("pageText");
    pageText2.textContent = "Pair your food with our carefully selected wines, beers, spirits and home-made herbal soft drinks.";
    pageTextContainer.appendChild(pageText2);
    // page text body
    const pageText3 = document.createElement("p");
    pageText.classList.add("pageText");
    pageText3.textContent = "Offering takeaway and delivery - book to begin your dining experience today.";
    pageTextContainer.appendChild(pageText3);
    // image for page - 50% width
    const pageImg = document.createElement("div");
    pageImg.setAttribute("id", "aboutImg");
    pageImg.classList.add("pageImg");
    pageContainer.appendChild(pageImg);
};

export { aboutContent }