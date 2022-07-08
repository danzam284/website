AOS.init({
    easing: 'ease-in-quad',
});

let logo = document.getElementById("logo")
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");
let portfolio = document.getElementById("portfolio");
let instagram = document.getElementById("instagram");
let leetcode = document.getElementById("leetcode");

logo.onmouseover = function() {
    logo.src = "images/logo.png";
}
logo.onmouseout = function() {
    logo.src = "images/logo-hover.png";
}
github.onmouseover = function() {
    github.src="images/github-hover.svg";
}
github.onmouseout = function() {
    github.src="images/github.svg";
}
linkedin.onmouseout = function() {
    linkedin.src="images/linkedin.svg";
}
linkedin.onmouseover = function() {
    linkedin.src="images/linkedin-hover.svg";
}
portfolio.onmouseout = function() {
    portfolio.src="images/portfolio.svg";
}
portfolio.onmouseover = function() {
    portfolio.src="images/portfolio-hover.svg";
}
instagram.onmouseout = function() {
    instagram.src="images/instagram.svg";
}
instagram.onmouseover = function() {
    instagram.src="images/instagram-hover.svg";
}
leetcode.onmouseout = function() {
    leetcode.src="images/leetcode.svg";
}
leetcode.onmouseover = function() {
    leetcode.src="images/leetcode-hover.svg";
}

logo.onclick = function() {
    window.location.href = "index.html"
}
github.onclick = function() {
    window.open("https://github.com/danzam284", "_blank")
}
linkedin.onclick = function() {
    window.open("https://www.linkedin.com/in/daniel-zamloot-5bb48a177/", "_blank")
}
portfolio.onclick = function() {
    window.open("https://docs.google.com/presentation/d/e/2PACX-1vQnIMVwDrwAipo8t3auYUr20k3Ay0KNNfGyrt65ix6Y8rfefwScJnRuRMgWxYUfG3shFJJ8tiB7WaF0/pub?start=true&loop=false&delayms=3000&slide=id.gc6f80d1ff_0_0", "_blank")
}
instagram.onclick = function() {
    window.open("https://www.instagram.com/dan.zamloot/", "_blank")
}
leetcode.onclick = function() {
    window.open("https://leetcode.com/danzam284/", "_blank");
}

let header = document.getElementById("header");
header.innerHTML += "<span class='letter hello'>Hello</span>";
header.innerHTML += "<span class='anim'>, </span>";
header.innerHTML += "<span class='anim letter'>my</span>";
header.innerHTML += "<span class='anim'> </span>";
header.innerHTML += "<span class='anim letter'>name</span>";
header.innerHTML += "<span class='anim'> </span>";
header.innerHTML += "<span class='anim letter'>is</span>";
header.innerHTML += "<span class='anim'> </span>";
header.innerHTML += "<br><span class='name'>Daniel Zamloot</span>";

function huskify() {
    let index = Math.floor(Math.random() * 10) + 1;
    let audio = new Audio('sounds/husky' + index + '.mp3');
    audio.play();
}