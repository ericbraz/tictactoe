function openGame() {
    if(inputOne.value && inputTwo.value) {
        document.querySelector('#beginning').style.display = 'none'; // Hide inputs
        document.querySelector('#content').style.display = 'block'; // Show game

        const fisrtPlayer = document.querySelector('[data-input-divs] div:nth-child(1) input');
        const secondPlayer = document.querySelector('[data-input-divs] div:nth-child(2) input');
        const receivePlayersNames = document.querySelectorAll('#players p');
        receivePlayersNames[0].innerText = fisrtPlayer.value;
        receivePlayersNames[2].innerText = secondPlayer.value;

        // Reset previous values
        fisrtPlayer.value = '';
        secondPlayer.value = '';
        document.querySelector('a').classList.remove('colored');
        document.querySelector('a').classList.add('gray');
    }
}

const button = document.querySelector('#button a.gray');
button.addEventListener('click', openGame);
