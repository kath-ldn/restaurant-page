/* Each module will export a function that creates a div element, adds the appropriate
content and styles to that element and then appends it to the DOM. */

function contactContent() {
    const imgTextBox = document.createElement("div");
    imgTextBox.setAttribute("id", "imgTextBox");
    bodyContent.appendChild(imgTextBox);
    
    //Creating img and text box
    var img4 = document.createElement("img");
    img4.src = "cat2.jpg";
    img4.setAttribute("id", "img4");
    img4.setAttribute("class", "img");
    imgTextBox.appendChild(img4);

    const contactText = document.createElement("div");
    contactText.setAttribute("id", "contactText");
    imgTextBox.appendChild(contactText);

    var contactName = document.createElement("p");
    contactName.textContent = "E: B.Scruggs@vegancatsushi.com";
    contactText.appendChild(contactName);
    var contactNumber = document.createElement("p");
    contactNumber.textContent = "T: 07891 064 321";
    contactText.appendChild(contactNumber);
    var address = document.createElement("p");
    address.textContent = "44 Whiskers Avenue, London, N1 CAT";
    contactText.appendChild(address);

};

export { contactContent }