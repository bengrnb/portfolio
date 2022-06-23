let about = document.querySelector(".home-about");
let aboutImg = document.querySelector("#about-image");

about.addEventListener('mouseover', function(){
    aboutImg.src = "./images/home_images/about_white.svg";
    about.style.backgroundColor='#4EBA6F';
    about.style.color='White';
})
about.addEventListener('mouseout', function(){
    aboutImg.src = "./images/home_images/about_black.svg";
    about.style.backgroundColor='White';
    about.style.color='Black';
})
about.addEventListener('touchstart', function(){
    aboutImg.src = "./images/home_images/about_white.svg";
    about.style.backgroundColor='#4EBA6F';
    about.style.color='White';
})
about.addEventListener('touchend', function(){
    aboutImg.src = "./images/home_images/about_black.svg";
    about.style.backgroundColor='White';
    about.style.color='Black';
})
about.addEventListener('click', function(){
    aboutImg.src = "./images/home_images/about_black.svg";
    about.style.backgroundColor='White';
    about.style.color='Black';
})

let portfolio = document.querySelector(".home-portfolio")
let portfolioImg = document.querySelector("#portfolio-image");

portfolio.addEventListener('mouseover', function(){
    portfolioImg.src = "./images/home_images/portfolio_white.svg";
    portfolio.style.backgroundColor='#2D95BF';
    portfolio.style.color='White';
})
portfolio.addEventListener('mouseout', function(){
    portfolioImg.src = "./images/home_images/portfolio_black.svg";
    portfolio.style.backgroundColor='White';
    portfolio.style.color='Black';
})
portfolio.addEventListener('touchstart', function(){
    portfolioImg.src = "./images/home_images/portfolio_white.svg";
    portfolio.style.backgroundColor='#2D95BF';
    portfolio.style.color='White';
})
portfolio.addEventListener('touchend', function(){
    portfolioImg.src = "./images/home_images/portfolio_black.svg";
    portfolio.style.backgroundColor='White';
    portfolio.style.color='Black';
})
portfolio.addEventListener('click', function(){
    portfolioImg.src = "./images/home_images/portfolio_black.svg";
    portfolio.style.backgroundColor='White';
    portfolio.style.color='Black';
})

let contact = document.querySelector(".home-contact")
let contactImg = document.querySelector("#contact-image");

contact.addEventListener('mouseover', function(){
    contactImg.src = "./images/home_images/contact_white.svg";
    contact.style.backgroundColor='#955BA5';
    contact.style.color='White';
})
contact.addEventListener('mouseout', function(){
    contactImg.src = "./images/home_images/contact_black.svg";
    contact.style.backgroundColor='White';
    contact.style.color='Black';
})
contact.addEventListener('touchstart', function(){
    contactImg.src = "./images/home_images/contact_white.svg";
    contact.style.backgroundColor='#955BA5';
    contact.style.color='White';
})
contact.addEventListener('touchend', function(){
    contactImg.src = "./images/home_images/contact_black.svg";
    contact.style.backgroundColor='White';
    contact.style.color='Black';
})
contact.addEventListener('click', function(){
    contactImg.src = "./images/home_images/contact_black.svg";
    contact.style.backgroundColor='White';
    contact.style.color='Black';
})