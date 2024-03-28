var opened = false;

const titles = ["Streak Tracker", "EcoMaps", "Digit Recognition", "Sorting Visualizer", "MakeMeLaugh", "A* Pathfinding", "Wordle Clone", "Multiplayer Minesweeper", "Live Filter", "Wordle Solver", "Javascript Pokemon", "Blackjack"];

const backgrounds = ["This project was one of my internship assignments at Life Hikes. The point of this application is to collect data from clients which will then be used by coaches to better help them and also as an incentive to the clients. My team and I tackled this project with a psychological approach, with the goal of getting the users back every day. We used many techniques such as gameifying many elements, keeping the form interactive and rewarding, and allowing for data comparison with other users. <br><br> My role on this project was the lead back-end programmer, and front-end implementor. I learned a ton about server-side Javascript and Node.JS as well as collaborating with a professional team",
    "I co-developed this project as part of a Hackthon Submission. It was designed to be a Google Maps alternative which is environmentally friendly, offering users the mode of transportation which makes the most sense. The website is loaded with informative details such as how much carbon they are emitting or saving based on the mode of transportation and a a fun fact related to the environment with each run. Overall, this was a very successful project, and we ended up winning the prize for the best use of Google Cloud. <br><br> I contributed all of the code to this project including the integration of the API, logic, and front-end implementation while my friend created a mock display of the page. This project taught me a lot about using different APIs.",
    "This was the first time I experimented with AI and machine learning. I decided upon creating the 'hello world' of machine learning, by putting my own twist on it. This twist is that the users draw the numbers which the AI will try to predict. I designed the user interface through pygame and trained the prediction model through Tensorflow. I also integrated a statistics portion of the project which uses local file memory to tell the user the success they are having with each number, including the most common misconception. <br><br> This was a personal project, so I was the sole contributer. I was very happy that I completed this because I learned the fundamentals of machine learning and hope to utilize it more in the future.",
    "This project was my first Javascript creation, so you can imagine how many bugs there were. I was starting my data structures class at this time and a portion was devoted to the sorting methods, so I acquired my inspiration from this. In total, I incorporated 13 different sorting algorithms into this project, 3 of which I invented myself! In addition, I implemented several features such as changing the array size, adjusting the speed, pausing, and re-randomizing arrays. <br><br> I was the sole contributer to this project. As I previously mentioned, this was my first time working with Javascript so I learned a great deal about the JS syntax as well as how to deal with bugs in this language.",
    "This was another hackathon project in which I worked on a team of 4. The hackathon theme was centered around comedy, and our project was a great fit for this. Our website allows users to generate a joke and have it spoken to them in the accent of their choice. We used a joke API to generate the joke and a text-to-speech API for the telling of the joke. We ended up winning the comedy section for this project, which was super exciting! <br><br> I was the back-end developer for this project which means that I integrated both of the APIs, and programmed them to work in kahoots. I was also in charge of connecting our site to its domain. All in all, I learned more about working with a developer team, working with APIs, and connecting sites to domains.",
    "This project was a personal implementation of the A star pathfinding algorithm. This was a very fun project to create because of how visually satisfying the outcome was. I put my own twist on the algorithm by adding the options for users to choose their starting and ending point, and also placing optional walls. I also allowed them to pick their preffered grid size and animation speed. Finally, I 'accidentally' created my own maze generation algorithm which I kept in the project. <br><br> I was the sole contributor to this project. I learned a great deal about Javascripts asynchronous capabilities as well as derrived a stronger interest in algorithms.",
    "This project was sort of a challenge to recreate New York Times' Wordle as accurately as I could. I feel that I was able to secure this while also adding the option of different words being chosen each time as opposed to one word a day. I used a list of ~10,000 words to pick from and another list of ~300,000 words to determine validity from. I additionally used local storage to keep track of personal statistics and a confetti API for celebrations! <br><br> I was the sole contributor for this project. I learned a lot about https's local storage system as well as what goes in to making a popular game. I also learned how easy it is to copy a game and that the real magic of game creation is coming up with the idea.",
    "After seeing a leetcode multiplayer game on LinkedIn, I really was interested in sockets and making a multiplayer game of my own. I decided on Minesweeper because it is a simple and fun game that people can race each other while also being careful of not going too fast and hitting a bomb. <br><br> I learned a lot about socket.io while working on this through communicating between the players. I also challenged myself to host the application, and I did so using an EC2 instance and a Route 53 domain. I used Caddy to enforce my https security. Overall, I loved the outcome of the project and learned a lot.",
    "This was a project in which I was inspired by a youtuber, The Coding Train. It utilizes a JS camera API to display the users webcam. I then created an altered form of the webcam based on a series of user-selected filters and color schemes, displayed next to the normal camera. In total, I included 9 color schemed and 6 filter schemes for the picking as well the ability to adjust the resolution to your liking. The outcome is hilarious, so you have to try it for youself! <br><br> I was the sole developer for this project. This taught me about many specifications of API use such as how to create your own features which are not included in the API. I also learned more about analyzing pixel data from images.",
    "This project started as a simple python program which I made to reccomend me a word to use. I continuously improved on this program, next adding pixel reading so that it would update the data itself, then alowing the program to autonomously type inputs and run by itself. Finally, I remade it in Javascript and decided to make a chrome extension out of it! <br><br> Some challenges I faced while making this was firstly integrating my code with the Wordle code. This involved truly understanding the DOM of the website so that my code could read the new data after each guess. I also had to follow all of the regulations of the chrome web store for them to publish my app, which was tricky at first.",
    "I challenged myself to remake my pokemon game that I had made in Python a year ago. This included improving the AI difficulty, adding more visuals to the game, and making it more realistic to the true experience. I feel like I hit the bullseye with this one! Not only is it insanely fun to play, but it is randomized, so it never feels boring. <br><br> I developed this project by myself. Through making this project, I was able to refresh myself on working with Javascript, HTML, and CSS, while also learning how to build off of a starting point, which in this case was my previous Pokemon game.",
    "After working on a database team, I wanted to make a game with a working backend. I decided to combine that addictiveness of Blackjack with a SQL and node.js backend which supports account creation, storage of data, and querying of data. I am hostin it freely, so it does take a couple of seconds to load. <br><br> This was a solo project, but nonetheless I learned a ton more about node.js and SQL databases. I also learned about the abundance of npm installs you can use to enhance your app. For example, I used bcrypt to securely encrypt/decrypt passwords saved on the database, and used sqlite3 to store and access my data."
]

const techUsed = [
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Code-Node.js-informational?style=flat&logo=nodedotjs&color=green'><img src='https://img.shields.io/badge/Code-JQuery-informational?style=flat&logo=jquery&color=blue'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-NPM-informational?style=flat&logo=NPM&color=CB3837'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'><img src='https://img.shields.io/badge/Tools-Figma-informational?style=flat&logo=figma&color=red'><img src='https://img.shields.io/badge/Tools-Chart.JS-informational?style=flat&logo=chartdotjs&color=pink'>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&color=F05032'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'><img src='https://img.shields.io/badge/Tools-GoogleCloud-informational?style=flat&logo=google-cloud&color=white'><img src='https://img.shields.io/badge/Tools-Figma-informational?style=flat&logo=figma&color=white'><img src='https://img.shields.io/badge/Tools-Domain.com-informational?style=flat&logo=domaindotcom&color=black'>",
    "<img src='https://img.shields.io/badge/Code-Python-informational?style=flat&logo=Python&color=003B57'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'><img src='https://img.shields.io/badge/Tools-TensorFlow-informational?style=flat&logo=tensorflow&color=orange'><img src='https://img.shields.io/badge/Tools-Pygame-informational?style=flat&logo=pygame&color=181717'>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Code-Python-informational?style=flat&logo=Python&color=003B57'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&color=F05032'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'><img src='https://img.shields.io/badge/Tools-BootStrap-informational?style=flat&logo=bootstrap&color=purple'><img src='https://img.shields.io/badge/Tools-Joke%20Generator%20API-informational?style=flat&logo=joke&color=white'><img src='https://img.shields.io/badge/Tools-TTS%20API-informational?style=flat&logo=TTS&color=white'>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'><img src='https://img.shields.io/badge/Tools-Confetti API-informational?style=flat&logo=Confetti&color=white'>",
    "<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'><img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'><img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'><img src='https://img.shields.io/static/v1?style=for-the-badge&message=Socket.io&color=010101&logo=Socket.io&logoColor=FFFFFF&label='><img src='https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'><img src='https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white'><img src='https://img.shields.io/static/v1?style=for-the-badge&message=Amazon+EC2&color=222222&logo=Amazon+EC2&logoColor=FF9900&label='><img src='https://img.shields.io/static/v1?style=for-the-badge&message=Amazon+Route+53&color=8C4FFF&logo=Amazon+Route+53&logoColor=FFFFFF&label='><img src='https://img.shields.io/static/v1?style=for-the-badge&message=Caddy&color=1F88C0&logo=Caddy&logoColor=FFFFFF&label='>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'><img src='https://img.shields.io/badge/Tools-Webcam%20Easy%20API-informational?style=flat&logo=Webcam&color=white'>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Code-Python-informational?style=flat&logo=Python&color=003B57'><img src='https://img.shields.io/badge/Tools-Chrome%20Web%20Store-informational?style=flat&logo=Webcam&color=white'>",
    "<img src='https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E'><img src='https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26'><img src='https://img.shields.io/badge/Tools-CSS3-informational?style=flat&logo=CSS3&color=1572B6'><img src='https://img.shields.io/badge/Tools-Visual%20Studio%20Code-informational?style=flat&logo=Visual%20Studio%20Code&color=purple'><img src='https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717'>",
    "<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'><img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'><img src='https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white'><img src='https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white'><img src='https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white'><img src='https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'><img src='https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'>"

]

const videos = [
    "videos/tracker.mp4", "videos/eco.mp4", "videos/ml.mp4", "videos/sort.mp4", "videos/laugh.mp4", "videos/path.mp4", "videos/wordle.mp4", "videos/mine.mov", "videos/filter.mp4", "videos/wordlesolver.mov", "videos/javascriptPokemon.mp4", "videos/blackjack.mov"
];

const links = [
    "https://codesandbox.io/s/admiring-frost-6zrj8y",
    "http://ecomaps.tech/",
    "https://github.com/danzam284/digit-recognition",
    "https://danzam284.github.io/sort/",
    "http://makemelaugh.tech/",
    "https://danzam284.github.io/path/",
    "https://danzam284.github.io/wordle/",
    "https://multiplayermine.xyz/",
    "https://danzam284.github.io/filter-live/",
    "https://chromewebstore.google.com/detail/dackgklclohfgkhkgcbffocblfinffla",
    "https://danzam284.github.io/mon/",
    "https://blackjack-e5jh.onrender.com/"
]

const brs = [2, 2, 2, 3, 2, 3, 3, 1, 3, 1, 2, 2];

const title = document.getElementById("proj-title");
const background = document.getElementById("background");
const tech = document.getElementById("tech");
const parent = document.getElementById("portfolio-zoom");
const vidParent = document.getElementById("vid");
const link = document.getElementById("test-link");
const br = document.getElementById("brs");
var vidChild;

async function load(i) {
    if (opened) {
        reset();
    }
    opened = true;
    parent.style.animation = "openProject 1s ease forwards";
    vidChild = document.createElement('source');
    vidChild.id = "vidSrc";
    vidChild.type = "video/mp4";
    vidChild.src = videos[i];
    br.innerHTML = "<br>".repeat(brs[i]);
    vidParent.load();
    link.href=links[i];
    title.innerHTML = titles[i];
    background.innerHTML = backgrounds[i];
    tech.innerHTML = techUsed[i];
    vidParent.appendChild(vidChild);
    parent.hidden = false;

    let children = parent.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.animation = "1s show 1s ease forwards";
    }
}

function reset() {
    vidParent.pause();
    opened = false;
    title.innerHTML = "";
    link.href = "";
    background.innerHTML = "";
    tech.innerHTML = "";
    vidParent.innerHTML = "";
    br.innerHTML = "";
    parent.style.animation = "closeProject 1s ease forwards";
    let children = parent.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.animation = "hide 1s ease forwards";
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        reset();
    }
};

