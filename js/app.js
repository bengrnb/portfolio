let about = document.querySelector(".home-about")
let aboutImg = document.querySelector("#about-image");
about.addEventListener('mouseover', function(){
    aboutImg.src = "./images/ellipse_hover.svg"
})
about.addEventListener('mouseout', function(){
    aboutImg.src = "./images/ellipse.svg"
})

let portfolio = document.querySelector(".home-portfolio")
let portfolioImg = document.querySelector("#portfolio-image");
portfolio.addEventListener('mouseover', function(){
    portfolioImg.src = "./images/triangle_hover.svg"
})
portfolio.addEventListener('mouseout', function(){
    portfolioImg.src = "./images/triangle.svg"
})

let contact = document.querySelector(".home-contact")
let contactImg = document.querySelector("#contact-image");
contact.addEventListener('mouseover', function(){
    contactImg.src = "./images/hexagon_hover.svg"
})
contact.addEventListener('mouseout', function(){
    contactImg.src = "./images/hexagon.svg"
})

// might need to add more to this so that it works a little better on mobile when pressing