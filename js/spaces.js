let personaButton1 = document.querySelector("#persona-toggle-1");
let personaButton2 = document.querySelector("#persona-toggle-2");
let personaText1 = document.querySelector("#persona-text-1");
let personaText2 = document.querySelector("#persona-text-2");
let personaIcon1 = document.querySelector("#persona-icon-1");
let personaIcon2 = document.querySelector("#persona-icon-2");
let personaImage1 = document.querySelector("#persona-image-1");
let personaImage2 = document.querySelector("#persona-image-2");

personaButton1.addEventListener('click', function(){
    if (personaImage1.style.display == "none") {
        personaImage1.style.display = "block";
        personaText1.innerHTML = "Click to hide persona #1";
        personaIcon1.innerHTML = "&#9650;";
    } else {
        personaImage1.style.display = "none"
        personaText1.innerHTML = "Click to show persona #1";
        personaIcon1.innerHTML = "&#9660;";
    }
})
personaButton2.addEventListener('click', function(){
    if (personaImage2.style.display == "none") {
        personaImage2.style.display = "block";
        personaText2.innerHTML = "Click to hide persona #2";
        personaIcon2.innerHTML = "&#9650;";
    } else {
        personaImage2.style.display = "none"
        personaText2.innerHTML = "Click to show persona #2";
        personaIcon2.innerHTML = "&#9660;";
    }
})