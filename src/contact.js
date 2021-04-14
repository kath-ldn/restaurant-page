/* Each module will export a function that creates a div element, adds the appropriate
content and styles to that element and then appends it to the DOM. */

function contactContent() {
    let selectedPage = document.getElementById("contact");
    selectedPage.classList.add("selectedPageStyle")
    const bodyContent = document.getElementById("bodyContent")
    //page container
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("id", "contactContainer");
    pageContainer.classList.add("pageContainer");
    bodyContent.appendChild(pageContainer);
    // image for page - 50% width
    const pageImg = document.createElement("div");
    pageImg.setAttribute("id", "contactImg");
    pageImg.classList.add("pageImg");
    pageContainer.appendChild(pageImg);
    // text container for page - 50% width
    const pageTextContainer = document.createElement("div");
    pageTextContainer.setAttribute("id", "contactText");
    pageTextContainer.classList.add("pageTextContainer");
    pageContainer.appendChild(pageTextContainer);
    // page sub-header text
    const subHeader = document.createElement("h4");
    subHeader.textContent = 'Address';
    pageTextContainer.appendChild(subHeader);
    // page text body
    const pageText = document.createElement("p");
    pageText.classList.add("pageText");
    pageText.innerHTML = "44 Hackney Street<br> London<br> E2 7NX";
    pageTextContainer.appendChild(pageText);
    // page sub-header text
    const subHeader2 = document.createElement("h4");
    subHeader2.textContent = 'Email';
    pageTextContainer.appendChild(subHeader2);
    // page text body
    const pageText2 = document.createElement("p");
    pageText.classList.add("pageText");
    pageText2.textContent = "hello@vegi-sushi.com";
    pageTextContainer.appendChild(pageText2);
    // page sub-header text
    const subHeader3 = document.createElement("h4");
    subHeader3.textContent = 'Phone';
    pageTextContainer.appendChild(subHeader3);
    // page text body
    const pageText3 = document.createElement("p");
    pageText.classList.add("pageText");
    pageText3.textContent = "+44 (0) 2034 111723";
    pageTextContainer.appendChild(pageText3);

};

export { contactContent }