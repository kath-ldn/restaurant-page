function blogContent() {
    const imgTextBox = document.createElement("div");
    imgTextBox.setAttribute("id", "imgTextBox");
    bodyContent.appendChild(imgTextBox);
    
    const blogText = document.createElement("div");
    blogText.setAttribute("id", "blogText");
    imgTextBox.appendChild(blogText);
    
//Image text
var para1 = document.createElement("p");
para1.textContent = "10 October 2020";
var para2 = document.createElement("p");
para2.textContent = "Bleghbleghvomit my furball really tie the room together mesmerizing birds yet i bet my nine lives on you-oooo-ooo-hooo and scream at teh\
 bath and why use post when this sofa is here but the best thing in the universe is a cardboard box.\
    Purr like an angel. Need to check on human, have not seen \
    in an hour might be dead oh look, human is alive, hiss at human, feed me but eats owners hair then \
    claws head, but a nice warm laptop for me to sit on eat prawns daintily with a claw then lick paws \
    clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to \
    claw at the fabric before taking a catnap stares at human while pushing stuff off a table."
var para3 = document.createElement("p");
para3.textContent = "04 October 2020";
var para4 = document.createElement("p");
para4.textContent = "Bite nose of your human trip on catnip headbutt owner's knee drool jump on counter removed \
by human jump on counter again removed by human meow before jumping on counter this time to let the human \
know am coming back. Pee in the shoe. Paw your face to wake you up in the morning stinky cat \
pee on walls it smells like breakfast kitty ipsum dolor sit amet, shed everywhere shed everywhere \
stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff but purrr purr \
littel cat, little cat purr purr.";
//Appending image text
blogText.appendChild(para1);
blogText.appendChild(para2);
blogText.appendChild(para3);
blogText.appendChild(para4);
    
    //Creating img and text box
    var img3 = document.createElement("img");
    img3.src = "sushi2.jpg";
    img3.setAttribute("id", "img3");
    img3.setAttribute("class", "img");
    imgTextBox.appendChild(img3);

};

export { blogContent }