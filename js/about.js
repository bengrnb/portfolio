let download = document.querySelector(".download");
let resumeImg = document.querySelector("#resume-image");
download.addEventListener('mouseover', function(){
    resumeImg.src = "./images/resume_hover.svg";
    download.style.backgroundColor='White';
    download.style.color='Black';
})
download.addEventListener('mouseout', function(){
    resumeImg.src = "./images/resume.svg";
    download.style.backgroundColor='#2D95BF';
    download.style.color='White';
})
download.addEventListener('touchstart', function(){
    resumeImg.src = "./images/resume_hover.svg";
    download.style.backgroundColor='White';
    download.style.color='Black';
})
download.addEventListener('touchend', function(){
    resumeImg.src = "./images/resume.svg";
    download.style.backgroundColor='#2D95BF';
    download.style.color='White';
})
download.addEventListener('click', function(){
    resumeImg.src = "./images/resume.svg";
    download.style.backgroundColor='#2D95BF';
    download.style.color='White';
})