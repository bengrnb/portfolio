let download = document.querySelector("#download");
download.addEventListener('mouseover', function(){
    download.style.backgroundColor='White';
    download.style.color='Black';
})
download.addEventListener('mouseout', function(){
    download.style.backgroundColor='#4EBA6F';
    download.style.color='White';
})
download.addEventListener('touchstart', function(){
    download.style.backgroundColor='White';
    download.style.color='Black';
})
download.addEventListener('touchend', function(){
    download.style.backgroundColor='#4EBA6F';
    download.style.color='White';
})
download.addEventListener('click', function(){
    download.style.backgroundColor='#4EBA6F';
    download.style.color='White';
})