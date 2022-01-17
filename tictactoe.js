const xChecker = '<img src="img/x-tic-tac-toe.png">';
const oChecker = '<img src="img/circulo-tic-tac-toe.png">';
let victoryX = false; // Check if fisrt player is victorious
let victoryO = false; // Check if second player is victorious
let player = true; // Alternates each player's turn
let plays = 0; // Count turns occurence
// Blocks marked by player to check if it's a winning play
let firstArray = new Array();
let secondArray = new Array();

function resetVariables() {
    victoryX = false;
    victoryO = false;
    player = true;
    plays = 0;
    firstArray = new Array();
    secondArray = new Array();
    document.querySelector('#block-screen').style.display = 'none';
}

const victories = [ // All possible victories configuration
    ['block1','block2','block3'],
    ['block4','block5','block6'],
    ['block7','block8','block9'],
    ['block1','block4','block7'],
    ['block2','block5','block8'],
    ['block3','block6','block9'],
    ['block1','block5','block9'],
    ['block3','block5','block7']
]
let checker = (array, target) => target.every(v => array.includes(v));
function arrayChecker(array, target) {
    for(let i in target) {
        if (checker(array, target[i])) {
            return true;
        }
    }
    return false;
}

const game = document.querySelectorAll('#game-content p');
game.forEach(element => {
    element.addEventListener('click', insertCheckers);
});

function insertCheckers(event) {
    const block = event.target;
    if(player && plays < 9 && !victoryX && !victoryO) {
        firstArray.push(block.id);
        block.innerHTML = xChecker;
        player = false;
    } else if (!player && plays <9 && !victoryX && !victoryO) {
        secondArray.push(block.id);
        block.innerHTML = oChecker;
        player = true;
    }
    plays++
    if(plays >= 5) {
        victoryX = arrayChecker(firstArray, victories);
        victoryO = arrayChecker(secondArray, victories);
    }
    const winner = document.querySelector('#block-screen p');
    const playersNames = document.querySelectorAll('#players p');
    const screenBlocker = document.querySelector('#block-screen')
    if(victoryX) {
        winner.innerText = `${playersNames[0].innerText} foi vencedor(a)`;
        screenBlocker.style.display = 'block';
    } else if(victoryO) {
        winner.innerText = `${playersNames[2].innerText} foi vencedor(a)`;
        screenBlocker.style.display = 'block';
    } else if(plays == 9) {
        winner.innerText = `Deu Emprate!`;
        screenBlocker.style.display = 'block';
    }
}

const buttons = document.querySelectorAll('#block-screen a');
buttons[0].onclick = function() {
    standardClick();
    document.querySelector('#content').style.display = 'none';
    document.querySelector('#beginning').style.display = 'block';
}
buttons[1].onclick = function() {
    standardClick();
}
const standardClick = () => {
    const images = document.getElementById('game-content').getElementsByTagName('img'); // It needs to be getElementById
    while(images.length >= 1) images[0].remove();
    resetVariables();
}
