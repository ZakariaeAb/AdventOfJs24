const inputText = document.getElementById('input');
const clipboard = document.getElementById('clipboard');
const check = document.getElementById('check');
const copiedText = document.querySelector('.copied');
const copiedTextContainer = document.querySelector('.copied-container');

clipboard.addEventListener('click', (e) => {
    if (inputText.value.length > 0) {
        navigator.clipboard.writeText(inputText.value)
        .then(() => {
            copiedText.textContent = 'Copied!';
            copiedTextContainer.classList.add('active');
            clipboard.style.display = 'none';
            check.style.display = 'block';
            setTimeout(() => {
                copiedTextContainer.classList.remove('active');
                copiedTextContainer.addEventListener('transitionend', () => {
                    copiedText.textContent = 'Copy';
                    clipboard.style.display = 'block';
                    check.style.display = 'none';
                }, { once: true });
            }, 3000);
        })
    }
});