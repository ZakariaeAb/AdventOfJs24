const input = document.getElementById("input");
const convertButton = document.getElementById("convert-button");
let isCelsius = true;

const convertTemperature = (value, fromCelsius) => {
    if (fromCelsius) {
        return (value * 9/5) + 32;
    }
    return (value - 32) * 5/9;
}

const updateDialPosition = (temperature, isCelsius) => {
    const dial = document.getElementById("dial");
    if(isCelsius) {
        const limitedTemp = Math.max(0, Math.min(39, temperature));
        const angle = limitedTemp * 9;
        dial.style.transform = `translate(-50%, 158px) rotate(${angle}deg)`;
    } else {
        const limitedTemp = Math.max(0, Math.min(99, temperature));
        const angle = limitedTemp * 3.6;
        dial.style.transform = `translate(-50%, 158px) rotate(${angle}deg)`;
    }
}

const updateDisplay = (unit) => {
    const unitElement = document.getElementById("unit");
    const leftElement = document.querySelector(".left-element");
    const rightElement = document.querySelector(".right-element");
    const topElement = document.querySelector(".top-element");

    unitElement.textContent = unit ? '°C' : '°F'
    leftElement.textContent = unit ? '10°' : '25°';
    rightElement.textContent = unit ? '30°': '75°';
    topElement.textContent = unit ? '20°' : '50°';
    convertButton.textContent = unit ? 'Convert to Fahrenheit' : 'Convert to Celsius';
}

input.addEventListener("input", (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    updateDialPosition(value, isCelsius);
});


convertButton.addEventListener("click", () => {
    const inputValue = parseFloat(input.value);

    if(isCelsius) {
        input.value = convertTemperature(inputValue, isCelsius);
        isCelsius = false;
        updateDisplay(isCelsius);
        updateDialPosition(input.value, isCelsius);
    } else {
        input.value = convertTemperature(inputValue, isCelsius);
        isCelsius = true;
        updateDisplay(isCelsius);
        updateDialPosition(input.value, isCelsius);
    }
});
