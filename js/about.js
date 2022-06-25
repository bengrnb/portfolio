let download = document.querySelector(".download");
let resumeImg = document.querySelector("#resume-image");
download.addEventListener('mouseover', function(){
    resumeImg.src = "./images/about_images/resume.svg";
    download.style.backgroundColor='#2D95BF';
    download.style.color='White';
})
download.addEventListener('mouseout', function(){
    resumeImg.src = "./images/about_images/resume_hover.svg";
    download.style.backgroundColor='White';
    download.style.color='Black';
})
download.addEventListener('touchstart', function(){
    resumeImg.src = "./images/about_images/resume.svg";
    download.style.backgroundColor='#2D95BF';
    download.style.color='White';
})
download.addEventListener('touchend', function(){
    resumeImg.src = "./images/about_images/resume_hover.svg";
    download.style.backgroundColor='White';
    download.style.color='Black';
})
download.addEventListener('click', function(){
    resumeImg.src = "./images/about_images/resume_hover.svg";
    download.style.backgroundColor='White';
    download.style.color='Black';
})