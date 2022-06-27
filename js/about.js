let download = document.querySelector(".download");
let resumeImg = document.querySelector("#resume-image");
download.addEventListener('mouseover', function(){
    resumeImg.src = "./images/about_images/resume_hover.svg";
    download.style.backgroundColor='#A5A692';
    download.style.color='#011F26';
})
download.addEventListener('mouseout', function(){
    resumeImg.src = "./images/about_images/resume.svg";
    download.style.backgroundColor='#011F26';
    download.style.color='White';
})
download.addEventListener('touchstart', function(){
    resumeImg.src = "./images/about_images/resume_hover.svg";
    download.style.backgroundColor='#A5A692';
    download.style.color='#011F26';
})
download.addEventListener('touchend', function(){
    resumeImg.src = "./images/about_images/resume.svg";
    download.style.backgroundColor='#011F26';
    download.style.color='White';
})
download.addEventListener('click', function(){
    resumeImg.src = "./images/about_images/resume.svg";
    download.style.backgroundColor='#011F26';
    download.style.color='White';
})