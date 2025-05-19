function onScrollAnimate() {
    const sections = document.querySelectorAll('section, .wish-carousel');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('load', () => {
    onScrollAnimate();
});

const wishes = [
    {
        character: "Naruto Uzumaki",
        message: "“Yo, Sukanya! Believe it — may your birthday be as bright and energetic as a Rasengan! Keep chasing your dreams with the same unstoppable spirit. Dattebayo!”"
    },
    {
        character: "Sasuke Uchiha",
        message: "“Sukanya, may your year ahead be filled with strength and clarity. Remember, even in darkness, you have the power to shine. Happy birthday.”"
    },
    {
        character: "Eren Yeager",
        message: "“Sukanya, never stop fighting for what you believe in. Your birthday marks another step toward freedom and your true path. Stay strong.”"
    },
    {
        character: "Mikasa Ackerman",
        message: "“Sukanya, on your birthday, I wish you the strength to protect what you love and the courage to face any challenge. You’re not alone.”"
    },
    {
        character: "Levi Ackerman",
        message: "“Sukanya, don’t let anyone mess up your day. Keep your space clean, your mind sharp, and your heart strong. Happy birthday.”"
    },
    {
        character: "Gojo Satoru",
        message: "“Sukanya, happy birthday! Here’s to a limitless year ahead, full of infinite possibilities and endless fun. Stay dazzling and unstoppable!”"
    },
    {
        character: "Yuji Itadori",
        message: "“Sukanya! Hope your birthday is packed with energy, smiles, and all the good vibes. Let’s make this year super strong together!”"
    },
    {
        character: "Tanjiro Kamado",
        message: "“Happy birthday, Sukanya. May your heart always stay kind, and your spirit remain as bright as the sun after rain.”"
    },
    {
        character: "Nezuko Kamado",
        message: "Shy smile and gentle wave “Happy birthday, Sukanya! May you always be safe and surrounded by love.”"
    },
    {
        character: "Izuku Midoriya (Deku)",
        message: "“Sukanya! I hope your birthday is filled with heroic moments and the courage to chase your dreams. Plus ultra, always!”"
    },
    {
        character: "Katsuki Bakugo",
        message: "“Hey, Sukanya! Don’t slack off today — make it explosive! I’m not saying happy birthday ‘cause I care or anything… but have a good one.”"
    },
    {
        character: "Megumi Fushiguro",
        message: "“Sukanya, I hope your birthday brings calm in the chaos and strength to face whatever comes next. Stay true to yourself.”"
    },
    {
        character: "Gon Freecss",
        message: "“Happy birthday, Sukanya! Keep exploring, keep smiling, and never lose your adventurous spirit. The world is yours!”"
    },
    {
        character: "Killua Zoldyck",
        message: "“Sukanya, I hope your birthday is as cool and unexpected as a lightning strike. Stay sharp and have fun!”"
    },
    {
        character: "Edward Elric",
        message: "“Happy birthday, Sukanya! May your year be full of discovery and determination — just remember, no alchemy can replace a kind heart.”"
    },
    {
        character: "Sung Jin-Woo",
        message: "“Sukanya, on your special day, may you gain strength beyond limits and overcome every challenge. Level up in life like a true hunter!”"
    },
    {
        character: "Cha Hae-In",
        message: "“Sukanya, wishing you a birthday filled with peace, strength, and the grace to face life’s battles with a smile.”"
    },
    {
        character: "Go Gun-Hee",
        message: "“Sukanya, happy birthday! May your courage inspire others and your heart remain steadfast in all your journeys.”"
    },
    {
        character: "Alphonse Elric",
        message: "“Happy birthday, Sukanya! Even if I’m just a suit of armor, I wish you warmth, happiness, and protection all year round.”"
    },
    {
        character: "Roy Mustang",
        message: "“Sukanya, may your birthday ignite a flame of ambition and passion within you. Keep burning bright, but don’t set the place on fire—unless it’s a party!”"
    },
    {
        character: "Koro Sensei",
        message: "“Happy birthday, Sukanya! Let’s aim for your dreams with 100% effort and 0% missed shots! You’ve got this—so don’t get caught slacking!”"
    }

];

const wishCharacter = document.getElementById('wish-character');
const wishMessage = document.getElementById('wish-message');
const wishCarousel = document.getElementById('wish-carousel');
let wishIndex = 0;

function showWish(index) {
    wishCharacter.textContent = wishes[index].character;
    wishMessage.textContent = wishes[index].message;
    wishCarousel.classList.add('visible');
}

function nextWish() {
    wishIndex = (wishIndex + 1) % wishes.length;
    showWish(wishIndex);
}


showWish(wishIndex);
setInterval(nextWish, 3000);

const message = "Happy Birthday Sukanya 🎂🥂🎊 Many many happy returns of the day!!! Today the world welcomed your smile, your generosity, and your lovely soul. As you mark another fantastic year, I wish you to know how precious you are—not only to me, but to everyone who surrounds you. From your charming laughter to the way you light up even the darkest corner, you possess a special gift to make life a better place with just your presence. Glancing through all the moments we have shared, I feel incredibly lucky to have you in my life. On the good days, the bad days, and everything in between, I am so thankful to have shared them with you. I hope today is packed with all the things you enjoy: fabulous food, laughter, and the company of people who love you. May this year be filled with new experiences, ample reasons to smile, and dreams coming true. I vow to be there with you always, making each moment more beautifully than the last. Here's to more exciting plans, late-night conversations, and silly laughter, and memories that will last a lifetime. I look forward to this year's surprises for you—and for us. Wishing you the best birthday ever, Sukanya! With all the love in the world, ~ Your Bolod ❤️";
let idx = 0;
function typeText() {
    if (idx < message.length) {
        document.getElementById('typing-text').textContent += message.charAt(idx);
        idx++;
        setTimeout(typeText, 50);
    }
}
window.addEventListener('DOMContentLoaded', typeText);

function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });

    if (window.innerWidth <= 768) {
        menu.classList.remove('open');
    }
}

window.onload = function () {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000);
}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});
menuToggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menu.classList.toggle('open');
    }
});
const audio = document.getElementById('backgroundAudio');
const floatingPlayer = document.getElementById('floatingPlayer');
let isPlaying = true;


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        audio.muted = false;
        audio.play().catch((error) => {
            console.log('Autoplay failed: ', error);
        });
    }, 1000);
});

floatingPlayer.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        floatingPlayer.textContent = '🫸🏼';
    } else {
        audio.play();
        floatingPlayer.textContent = '🎵';
    }
    isPlaying = !isPlaying;
});


floatingPlayer.onmousedown = function (event) {
    event.preventDefault();
    let shiftX = event.clientX - floatingPlayer.getBoundingClientRect().left;
    let shiftY = event.clientY - floatingPlayer.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        floatingPlayer.style.left = pageX - shiftX + 'px';
        floatingPlayer.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    };
};

floatingPlayer.ondragstart = function () {
    return false;
};