let about = document.querySelector(".home-about");
let aboutImg = document.querySelector("#about-image");

about.addEventListener('mouseover', function(){
    aboutImg.src = "./images/home_images/about_blue.svg";
    about.style.backgroundColor='#BFB78F';
    about.style.color='#011F26';
})
about.addEventListener('mouseout', function(){
    aboutImg.src = "./images/home_images/about_gold.svg";
    about.style.backgroundColor='#011F26';
    about.style.color='#BFB78F';
})
about.addEventListener('touchstart', function(){
    aboutImg.src = "./images/home_images/about_blue.svg";
    about.style.backgroundColor='#BFB78F';
    about.style.color='#011F26';
})
about.addEventListener('touchend', function(){
    aboutImg.src = "./images/home_images/about_gold.svg";
    about.style.backgroundColor='#011F26';
    about.style.color='#BFB78F';
})
about.addEventListener('click', function(){
    aboutImg.src = "./images/home_images/about_gold.svg";
    about.style.backgroundColor='#011F26';
    about.style.color='#BFB78F';
})

let portfolio = document.querySelector(".home-portfolio")
let portfolioImg = document.querySelector("#portfolio-image");

portfolio.addEventListener('mouseover', function(){
    portfolioImg.src = "./images/home_images/portfolio_blue.svg";
    portfolio.style.backgroundColor='#BFB78F';
    portfolio.style.color='#011F26';
})
portfolio.addEventListener('mouseout', function(){
    portfolioImg.src = "./images/home_images/portfolio_gold.svg";
    portfolio.style.backgroundColor='#011F26';
    portfolio.style.color='#BFB78F';
})
portfolio.addEventListener('touchstart', function(){
    portfolioImg.src = "./images/home_images/portfolio_blue.svg";
    portfolio.style.backgroundColor='#BFB78F';
    portfolio.style.color='#011F26';
})
portfolio.addEventListener('touchend', function(){
    portfolioImg.src = "./images/home_images/portfolio_gold.svg";
    portfolio.style.backgroundColor='#011F26';
    portfolio.style.color='#BFB78F';
})
portfolio.addEventListener('click', function(){
    portfolioImg.src = "./images/home_images/portfolio_gold.svg";
    portfolio.style.backgroundColor='#011F26';
    portfolio.style.color='#BFB78F';
})

let contact = document.querySelector(".home-contact")
let contactImg = document.querySelector("#contact-image");

contact.addEventListener('mouseover', function(){
    contactImg.src = "./images/home_images/contact_blue.svg";
    contact.style.backgroundColor='#BFB78F';
    contact.style.color='#011F26';
})
contact.addEventListener('mouseout', function(){
    contactImg.src = "./images/home_images/contact_gold.svg";
    contact.style.backgroundColor='#011F26';
    contact.style.color='#BFB78F';
})
contact.addEventListener('touchstart', function(){
    contactImg.src = "./images/home_images/contact_blue.svg";
    contact.style.backgroundColor='#BFB78F';
    contact.style.color='#011F26';
})
contact.addEventListener('touchend', function(){
    contactImg.src = "./images/home_images/contact_gold.svg";
    contact.style.backgroundColor='#011F26';
    contact.style.color='#BFB78F';
})
contact.addEventListener('click', function(){
    contactImg.src = "./images/home_images/contact_gold.svg";
    contact.style.backgroundColor='#011F26';
    contact.style.color='#BFB78F';
})