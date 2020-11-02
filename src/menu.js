/* Each module will export a function that creates a div element, adds the appropriate
content and styles to that element and then appends it to the DOM. */

function menuContent() {
    //Creating img and text box
    const imgTextBox = document.createElement("div");
    imgTextBox.setAttribute("id", "imgTextBox");
    bodyContent.appendChild(imgTextBox);
    
    //Adding image2
    var img2 = document.createElement("img");
    img2.src = "cat1.jpg";
    img2.setAttribute("id", "img2");
    img2.setAttribute("class", "img");
    imgTextBox.appendChild(img2);


//Adding image text box
const menuText = document.createElement("div");
menuText.setAttribute("id", "menuText");
imgTextBox.appendChild(menuText);

//Menu items
//item 1
var item1 = document.createElement("p");
item1.setAttribute("class", "menuItem");
item1.textContent = "1. Avocado Maki" ;
menuText.appendChild(item1);
//item 2
var item2 = document.createElement("p");
item2.setAttribute("class", "menuItem");
item2.textContent = "2. Cucumber Maki";
menuText.appendChild(item2);
//item 3
var item3 = document.createElement("p");
item3.setAttribute("class", "menuItem");
item3.textContent = "3. Mushroom Temari";
menuText.appendChild(item3);
//item 4
var item4 = document.createElement("p");
item4.setAttribute("class", "menuItem");
item4.textContent = "4. Jumbo Spicy Tofu Temaki";
menuText.appendChild(item4);
//item 5
var item5 = document.createElement("p");
item5.setAttribute("class", "menuItem");
item5.textContent = "5. Red Pepper Nigiri";
menuText.appendChild(item5);

//item 6
var item6 = document.createElement("p");
item6.setAttribute("class", "menuItem");
item6.textContent = "6. Sweet Tofu Inarizushi";
menuText.appendChild(item6);

//item 7
var item7 = document.createElement("p");
item7.setAttribute("class", "menuItem");
item7.textContent = "7. Oyster Mushroom Termari";
menuText.appendChild(item7);

//item 8
var item8 = document.createElement("p");
item8.setAttribute("class", "menuItem");
item8.textContent = "8. Wakame Salad";
menuText.appendChild(item8);

//item 9
var item9 = document.createElement("p");
item9.setAttribute("class", "menuItem");
item9.textContent = "9. Miso Soup";
menuText.appendChild(item9);

//item 10
var item10 = document.createElement("p");
item10.setAttribute("class", "menuItem");
item10.textContent = "10. Edamame Beans (Salted or Spicy)";
menuText.appendChild(item10);



/*
var para1 = document.createElement("p");
para1.textContent = "";
var para2 = document.createElement("p");
para2.textContent = ""
var para3 = document.createElement("p");
para3.textContent = "";
var para4 = document.createElement("p");
para4.textContent = "";
//Appending image text
imgText.appendChild(para1);
imgText.appendChild(para2);
imgText.appendChild(para3);
imgText.appendChild(para4);


*/



};

export { menuContent }