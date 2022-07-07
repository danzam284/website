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
let string = "Hello, my name is Daniel Zamloot";
for (let i = 0; i < string.length; i++) {
    let letter;
    if (string[i] == " ") {
        letter = "<span>" + string[i] + "</span>";
    } else if (i > 17) {
        letter = "<span class='name'>" + string[i] + "</span>";
    } else {
        letter = "<span class='letter'>" + string[i] + "</span>";
    }
    header.innerHTML += letter;
}