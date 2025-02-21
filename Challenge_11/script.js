const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const meridiemElement = document.getElementById('meridiem');

const updateTime = () => {
    const date = new Date();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    let hours = date.getHours();

    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.innerText = minutes;
    meridiemElement.innerText = meridiem;
}

updateTime();
setInterval(updateTime, 1000);