// variables

let skillz = [
    'coding', 'UI/UX', 'web', 'DevOps',
    'Git', 'Linux', 'Windows', 'JavaScript',
    'Python', 'docker', 'Angular', 'database',
    'security', 'data', 'science', 'apps',
    'networks', 'servers', 'engineering'
]
let randomSort = []
let n = 10; // Number of skillz at the same time
for (let i = 0; i < n; i++) { randomSort.push(i) }
let isMenu = false; // menu off

// Script

$(document).ready(() => {

    $('#home').load('../modules/home.html');
    $('#footer').load('../modules/footer.html');
    $('#navbar').load('../modules/navbar.html', () => {
        $('.menu-btn').click(toggleMenu);
    });
    setTimeout(() => {
        generateBackground();
        setInterval(generateBackground, 5000);
    }, 500);

});

// Functions

function toggleMenu() {
    if (!isMenu) {
        isMenu = true;
        // Menu button
        $('.middle-bar').css('display', 'none');
        $('.bar1').addClass('close-btn-1').removeClass('long-bar');
        $('.bar2').addClass('close-btn-2').removeClass('long-bar');
        // Content
        $('.title').addClass('fade-out').css('width', '100%');
        setTimeout(() => { $('#fullscreen-menu').load('../modules/menu.html') }, 500);
        setTimeout(() => { $('.title').css('display', 'none') }, 1000);
    } else {
        isMenu = false;
        // menu button
        $('.middle-bar').css('display', 'block');
        $('.bar1').removeClass('close-btn-1').addClass('long-bar');
        $('.bar2').removeClass('close-btn-2').addClass('long-bar');
        // Content
        $('.title').removeClass('fade-out').css('display', 'flex');
        $('.fullscreen-menu').css('display', 'none');
    }
}

function generateBackground() {
    randomSort = shuffle(randomSort);
    skillz = shuffle(skillz);
    let bts = document.querySelectorAll('.back-text');

    for (let bt of bts) {
        bt.remove();
    }

    for (let i = 0; i < n; i++) {
        let yPosition = document.body.clientHeight / n * i;
        let xPosition = document.body.clientWidth / n * randomSort[i];
        newChild = document.createElement('div');
        newChild.classList.add('back-text');
        newChild.style.top = yPosition + 'px';
        newChild.style.left = xPosition + 'px';
        newChild.style.animation = i % 2 == 0 ? 'right-slide 4s linear' : 'left-slide 4s linear';
        newChild.style.animationFillMode = 'forwards';
        newChild.innerHTML = skillz[i];
        document.body.appendChild(newChild);
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
