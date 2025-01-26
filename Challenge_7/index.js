const output = document.querySelector('.output');
const input = document.querySelector('.input');

input.addEventListener('input', e => {
    const value = e.target.value;
    if (e.target.value !== '') {
        output.textContent = `/${value.toLowerCase().split(' ').join('-')}`;
    } else {
        output.textContent = '';
    }
});