const textArea = document.querySelector('.textarea');
const counterNumber = document.querySelector('.counter-number');
let counter = 0;

const resizeTextArea = () => {
    //Réinitialise la hauteur
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
}

const countCharacters = () => {
    counter = textArea.value.length;
    counterNumber.textContent = counter;
}

// Initialisation
countCharacters();
resizeTextArea();

textArea.addEventListener('input', () => {
    resizeTextArea();
    countCharacters();
});