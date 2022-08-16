let stars = document.getElementById('start')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river5 = document.getElementById('river5')
let boat6 = document.getElementById('boat6')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value + 'px';
    mountains3.style.top = value + 'px';
}