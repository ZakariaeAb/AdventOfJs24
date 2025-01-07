const textArea = document.querySelector('.textarea');

const resizeTextArea = () => {
    //Réinitialise la hauteur
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
}

textArea.addEventListener('input', resizeTextArea);