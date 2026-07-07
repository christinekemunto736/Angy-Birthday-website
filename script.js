// =========================
// Happy Birthday Angy ❤️
// =========================

// Birthday Message
const message = `🎉 Happy Birthday, Angy! 🎂❤️

Today is all about celebrating YOU!

May your day be filled with endless happiness,
lots of laughter,
sweet surprises,
delicious cake,
and unforgettable memories.

May God continue to bless you,
protect you,
guide you,
and grant you good health,
peace,
and endless joy.

May you live to blow many, many more birthday candles
surrounded by love and happiness.

Keep smiling,
keep shining,
and always remember how special you are.

You'll always be Daddy's little princess 👑❤️

Enjoy your special day and have an absolute blast!

Happy Birthday once again, Angy!

With lots of love ❤️`;

let i = 0;

// Start everything
function startBirthday() {

    // Play music
    const song = document.getElementById("birthdaySong");

    song.play().catch(() => {
        console.log("Browser blocked autoplay until user interaction.");
    });

    // Type message only once
    document.getElementById("typing").innerHTML = "";
    i = 0;
    typeWriter();

    // Fireworks
    launchFireworks();
}

// =========================
// Typewriter Effect
// =========================

function typeWriter(){

    if(i < message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

// =========================
// Fireworks
// =========================

function launchFireworks(){

    const duration = 7000;

    const animationEnd = Date.now() + duration;

    const interval = setInterval(function(){

        confetti({

            particleCount:7,

            angle:60,

            spread:80,

            origin:{x:0}

        });

        confetti({

            particleCount:7,

            angle:120,

            spread:80,

            origin:{x:1}

        });

        confetti({

            particleCount:100,

            spread:360,

            ticks:120,

            origin:{

                x:Math.random(),

                y:Math.random()-0.2

            }

        });

        if(Date.now() > animationEnd){

            clearInterval(interval);

        }

    },250);

}

// =========================
// Floating Hearts
// =========================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*30) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

// =========================
// Floating Balloons
// =========================

const balloons = document.getElementById("balloons");

const balloonColors = [

"🎈",

"🎈",

"🎈",

"🎈"

];

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.innerHTML = balloonColors[Math.floor(Math.random()*balloonColors.length)];

    balloon.classList.add("balloon");

    balloon.style.left = Math.random()*100 + "vw";

    balloon.style.fontSize = (40 + Math.random()*30) + "px";

    balloon.style.animationDuration = (8 + Math.random()*5) + "s";

    balloons.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },15000);

}

setInterval(createBalloon,800);

// =========================
// Twinkling Stars
// =========================

const stars = document.getElementById("stars");

for(let s=0;s<120;s++){

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random()*100 + "%";

    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay = Math.random()*5 + "s";

    star.style.animationDuration = (1 + Math.random()*2) + "s";

    stars.appendChild(star);

}