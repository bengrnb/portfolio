let about = document.querySelector(".home-about");
let aboutImg = document.querySelector("#about-image");

about.addEventListener('mouseover', function(){
    aboutImg.src = "./images/ellipse_hover.svg";
    about.style.backgroundColor='White';
    about.style.color='Black';
})
about.addEventListener('mouseout', function(){
    aboutImg.src = "./images/ellipse.svg";
    about.style.backgroundColor='#4EBA6F';
    about.style.color='White';
})
about.addEventListener('touchstart', function(){
    aboutImg.src = "./images/ellipse_hover.svg";
    about.style.backgroundColor='White';
    about.style.color='Black';
})
about.addEventListener('touchend', function(){
    aboutImg.src = "./images/ellipse.svg";
    about.style.backgroundColor='#4EBA6F';
    about.style.color='White';
})
about.addEventListener('click', function(){
    aboutImg.src = "./images/ellipse.svg";
    about.style.backgroundColor='#4EBA6F';
    about.style.color='White';
})

let portfolio = document.querySelector(".home-portfolio")
let portfolioImg = document.querySelector("#portfolio-image");

portfolio.addEventListener('mouseover', function(){
    portfolioImg.src = "./images/triangle_hover.svg";
    portfolio.style.backgroundColor='White';
    portfolio.style.color='Black';
})
portfolio.addEventListener('mouseout', function(){
    portfolioImg.src = "./images/triangle.svg";
    portfolio.style.backgroundColor='#2D95BF';
    portfolio.style.color='White';
})
portfolio.addEventListener('touchstart', function(){
    portfolioImg.src = "./images/triangle_hover.svg";
    portfolio.style.backgroundColor='White';
    portfolio.style.color='Black';
})
portfolio.addEventListener('touchend', function(){
    portfolioImg.src = "./images/triangle.svg";
    portfolio.style.backgroundColor='#2D95BF';
    portfolio.style.color='White';
})
portfolio.addEventListener('click', function(){
    portfolioImg.src = "./images/triangle.svg";
    portfolio.style.backgroundColor='#2D95BF';
    portfolio.style.color='White';
})

let contact = document.querySelector(".home-contact")
let contactImg = document.querySelector("#contact-image");

contact.addEventListener('mouseover', function(){
    contactImg.src = "./images/hexagon_hover.svg";
    contact.style.backgroundColor='White';
    contact.style.color='Black';
})
contact.addEventListener('mouseout', function(){
    contactImg.src = "./images/hexagon.svg";
    contact.style.backgroundColor='#955BA5';
    contact.style.color='White';
})
contact.addEventListener('touchstart', function(){
    contactImg.src = "./images/hexagon_hover.svg";
    contact.style.backgroundColor='White';
    contact.style.color='Black';
})
contact.addEventListener('touchend', function(){
    contactImg.src = "./images/hexagon.svg";
    contact.style.backgroundColor='#955BA5';
    contact.style.color='White';
})
window.addEventListener('click', function(){
    contactImg.src = "./images/hexagon.svg";
    contact.style.backgroundColor='#955BA5';
    contact.style.color='White';
})