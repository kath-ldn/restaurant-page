function homeContent() {
    const bodyContent = document.getElementById("bodyContent")
    const homeImg = document.createElement("div");
    homeImg.setAttribute("id", "home-img");
    homeImg.setAttribute("class", "cover-img");
    bodyContent.appendChild(homeImg);

    //Creating homeTagDiv
    const homeTagDiv = document.createElement("div");
    homeTagDiv.setAttribute("id", "homeTagDiv");
    homeImg.appendChild(homeTagDiv);
    //Creating homeTagLine
    const homeTagLine = document.createElement("div");
    homeTagLine.setAttribute("id", "homeTagLine");
    homeTagLine.textContent = "delicious plant-based sushi.\ elegant noodle dishes.\
    decadent japanese platters";
    homeTagDiv.appendChild(homeTagLine);

    //Creating popup ad
    const popUpAd = document.createElement("div");
    popUpAd.classList.add("popUpAd");
    homeImg.appendChild(popUpAd);
    //popup ad close
    const popUpAdClose = document.createElement("div");
    popUpAdClose.classList.add("popUpAdClose");
    popUpAd.appendChild(popUpAdClose);
    popUpAdClose.textContent = "x";
    popUpAdClose.addEventListener("click", () => {
        popUpAd.style.display = "none";
    })
    //Creating ad text
    const popUpAdText = document.createElement("div");
    popUpAdText.classList.add("popUpAdText");
    popUpAdText.textContent = "Limited Time Offer! Click here to get 20% off all restaurant bookings until the end of April !!";
    popUpAd.appendChild(popUpAdText);
};

export { homeContent }