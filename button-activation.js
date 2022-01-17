// Button activation and deactivation
const openButton = () => {
    buttonClass()
}

const inputOne = document.querySelector('[data-input-divs] div:nth-child(1) input');
inputOne.addEventListener('change', openButton);

const inputTwo = document.querySelector('[data-input-divs] div:nth-child(2) input');
inputTwo.addEventListener('change', openButton);

function buttonClass() {
    const button = document.querySelector('a');

    if(inputOne.value && inputTwo.value) {
        button.classList.remove('gray');
        button.classList.add('colored');
    } else if(button.classList.contains('colored')) {
        button.classList.remove('colored');
        button.classList.add('gray');
    }
}
