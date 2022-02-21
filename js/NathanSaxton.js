var slideIndex = 1;
showSlides(slideIndex); //sets the initial slide as image 1

function changeSlide(n) { //changes the slide using the next and prev buttons
    showSlides(slideIndex += n);
}

function currentSlide(n) { //changes the slide using the dots
    showSlides(slideIndex = n)
}

function showSlides(n) {//changes what slide is viewed by the user based off the slide index
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showContact() { //shows the contact form
    document.getElementById('hidden-form').style.display = "block";
}

function closeContact() { //closes the contact form
    document.getElementById('hidden-form').style.display = "none";
}

function toLinkedIn(){ //uses the onclick event to redirect to my linkedIn profile
    location.href = "https://www.linkedin.com/in/nathan-saxton-23835a145/"
}

function goTo(target){ //moves the user to another section of the page. 
    window.location.hash = target;
}