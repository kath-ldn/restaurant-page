function aboutUsContent() {
    //Creating img and text box
const imgTextBox = document.createElement("div");
imgTextBox.setAttribute("id", "imgTextBox");
bodyContent.appendChild(imgTextBox);

//Adding image
var img1 = document.createElement("img");
img1.src = "sushi.jpg";
img1.setAttribute("id", "img1");
img1.setAttribute("class", "img");
imgTextBox.appendChild(img1);

//Adding image text box
const imgText = document.createElement("div");
imgText.setAttribute("id", "imgText");
imgTextBox.appendChild(imgText);
//Image text
var para1 = document.createElement("p");
para1.textContent = "Hiss and stare at nothing then run suddenly away purr when being pet for curl up and \
    sleep on the freshly laundered towels.\
    Miaow then turn around and show you my bum sleep stick butt in face, but sniff sniff run outside as \
    soon as door open yet cats go for world domination, mice.";
var para2 = document.createElement("p");
para2.textContent = "Bleghbleghvomit my furball really tie the room together mesmerizing birds yet i bet my nine lives on you-oooo-ooo-hooo and scream at teh\
 bath and why use post when this sofa is here but the best thing in the universe is a cardboard box.\
    Purr like an angel. Need to check on human, have not seen \
    in an hour might be dead oh look, human is alive, hiss at human, feed me but eats owners hair then \
    claws head, but a nice warm laptop for me to sit on eat prawns daintily with a claw then lick paws \
    clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to \
    claw at the fabric before taking a catnap stares at human while pushing stuff off a table."
var para3 = document.createElement("p");
para3.textContent = "I love cuddles tickle my belly at your own peril i will pester for food when you're in the \
  kitchen even if it's salad . Chew foot stare at guinea pigs but pee on walls it smells like breakfast, \
  yet pretend you want to go out but then don't meowwww and find empty spot in cupboard and sleep all day, \
  for roll on the floor purring your whiskers off. Lies down find empty spot in cupboard and sleep all day \
  spill litter box, scratch at owner, destroy all furniture, especially couch or kitty kitty really likes \
  hummus. Under the bed why use post when this sofa is here. Steal mom's crouton while she is in the bathroom \
  pretend not to be evil jump on counter removed by human jump on counter again removed by human meow before \
  jumping on counter this time to let the human know am coming back. Relentlessly pursues moth sniff catnip \
  and act crazy.";
var para4 = document.createElement("p");
para4.textContent = "Bite nose of your human trip on catnip headbutt owner's knee drool jump on counter removed \
by human jump on counter again removed by human meow before jumping on counter this time to let the human \
know am coming back. Pee in the shoe. Paw your face to wake you up in the morning stinky cat \
pee on walls it smells like breakfast kitty ipsum dolor sit amet, shed everywhere shed everywhere \
stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff but purrr purr \
littel cat, little cat purr purr.";
//Appending image text
imgText.appendChild(para1);
imgText.appendChild(para2);
imgText.appendChild(para3);
imgText.appendChild(para4);
};

export { aboutUsContent }