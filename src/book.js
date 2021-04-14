function bookContent() {
    let selectedPage = document.getElementById("book");
    selectedPage.classList.add("selectedPageStyle");
    const bodyContent = document.getElementById("bodyContent");
    //page container
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("id", "bookContainer");
    pageContainer.classList.add("pageContainer");
    bodyContent.appendChild(pageContainer);
    // text container for page - 50% width
    const pageTextContainer = document.createElement("div");
    pageTextContainer.setAttribute("id", "aboutText");
    pageTextContainer.classList.add("pageTextContainer");
    pageContainer.appendChild(pageTextContainer);
    // page sub-header text
    const subHeader = document.createElement("h3");
    subHeader.setAttribute("id", "bookSubHeader");
    subHeader.textContent = 'Book with us:';
    pageTextContainer.appendChild(subHeader);
    // creates form
    const bookingForm = document.createElement("form");
    bookingForm.setAttribute("name", "bookingForm");
    pageTextContainer.appendChild(bookingForm);
    // create input - name
    const userNameLabel = document.createElement("label");
    userNameLabel.setAttribute("for", "userName");
    userNameLabel.textContent = "Your Name:";
    bookingForm.appendChild(userNameLabel);
    const userName = document.createElement("input");
    userName.setAttribute("type", "text");
    userName.setAttribute("name", "userName");
    userName.setAttribute("placeholder", "Name");
    bookingForm.appendChild(userName);
    // create input - email
    const userEmailLabel = document.createElement("label");
    userEmailLabel.setAttribute("for", "userEmail");
    userEmailLabel.textContent = "Your Email:";
    bookingForm.appendChild(userEmailLabel);
    const userEmail = document.createElement("input");
    userEmail.setAttribute("type", "email");
    userEmail.setAttribute("name", "userEmail");
    userEmail.setAttribute("placeholder", "Email");
    bookingForm.appendChild(userEmail);
    // create input - phone
    const userPhoneLabel = document.createElement("label");
    userPhoneLabel.setAttribute("for", "userPhone");
    userPhoneLabel.textContent = "Your Phone Number:";
    bookingForm.appendChild(userPhoneLabel);
    const userPhone = document.createElement("input");
    userPhone.setAttribute("type", "tel");
    userPhone.setAttribute("name", "userPhone");
    userPhone.setAttribute("placeholder", "Phone");
    bookingForm.appendChild(userPhone);
    // create input - booking date
    let today = new Date();
    const userDateLabel = document.createElement("label");
    userDateLabel.setAttribute("for", "userDate");
    userDateLabel.textContent = "Booking Date:";
    bookingForm.appendChild(userDateLabel);
    const userDate = document.createElement("input");
    userDate.setAttribute("type", "date");
    userDate.setAttribute("min", today);
    userDate.setAttribute("name", "userDate");
    bookingForm.appendChild(userDate);
    // create input - booking time
    const userTimeLabel = document.createElement("label");
    userTimeLabel.setAttribute("for", "userTime");
    userTimeLabel.textContent = "Booking Time:";
    bookingForm.appendChild(userTimeLabel);
    const userTime = document.createElement("input");
    userTime.setAttribute("type", "time");
    userTime.min = "12:00:00:00";
    userTime.setAttribute("name", "userTime");
    bookingForm.appendChild(userTime);
    // create input - special requests
    const userReqsLabel = document.createElement("label");
    userReqsLabel.setAttribute("for", "userReqs");
    userReqsLabel.textContent = "Special Requests:";
    bookingForm.appendChild(userReqsLabel);
    const userReqs = document.createElement("textarea");
    userReqs.setAttribute("id", "userReqs")
    userReqs.setAttribute("placeholder", "Please enter any special requests, allergies, special occasions etc.");
    userReqs.setAttribute("name", "userReqs");
    bookingForm.appendChild(userReqs);
    // create submit button
    const submitBooking = document.createElement("input");
    submitBooking.setAttribute("type", "submit");
    submitBooking.setAttribute("name", "submitBooking");
    submitBooking.textContent = "Submit Booking Request";
    submitBooking.addEventListener("click", (event) => {
        event.preventDefault();
        subHeader.style.display = "none";
        bookingForm.style.display = "none";
        thankYou.style.display = "block";
    })
    bookingForm.appendChild(submitBooking);
    // after booking message
    const thankYou = document.createElement("div");
    thankYou.setAttribute("id", "thankYou");
    thankYou.textContent = "Thank you! One of our team will confirm your booking within 24 hours."
    pageTextContainer.appendChild(thankYou);
    // image for page - 50% width
    const pageImg = document.createElement("div");
    pageImg.setAttribute("id", "bookImg");
    pageImg.classList.add("pageImg");
    pageContainer.appendChild(pageImg);
};

export { bookContent }