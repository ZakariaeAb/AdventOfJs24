const fullNameField = document.getElementById("full-name");
const emailField = document.getElementById("email");
const radioButtons = document.querySelectorAll('input[name="reindeer"]');
const selectBoxes = document.querySelectorAll('input[name="movie"]');
const form = document.querySelector('form');

fullNameField.addEventListener("change", (e) => {
    sessionStorage.setItem("fullName", e.target.value);
});

emailField.addEventListener("change", (e) => {
    sessionStorage.setItem("email", e.target.value);
});

radioButtons.forEach(button => {
    button.addEventListener("change", (e) => {
        if (e.target.checked) {
            sessionStorage.setItem("selectedReindeer", e.target.value);
        }
    })
});

const saveMovies = () => {
    const selectedMovies = Array.from(selectBoxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    sessionStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
}

selectBoxes.forEach((select) => {
    select.addEventListener("change", saveMovies);
})

window.addEventListener("DOMContentLoaded", () => {
    const fullName = sessionStorage.getItem("fullName");
    const email = sessionStorage.getItem("email");
    const selectedReindeer = sessionStorage.getItem("selectedReindeer");
    const selectedMovies = JSON.parse(sessionStorage.getItem("selectedMovies"));

    fullNameField.value = fullName || "";
    emailField.value = email || "";
    if(selectedReindeer){
        const radioToCheck = document.querySelector(`input[name="reindeer"][value="${selectedReindeer}"]`);
        if(radioToCheck) radioToCheck.checked = true;
    }
    selectBoxes.forEach((select) => {
        select.checked = selectedMovies.includes(select.value);
    })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    sessionStorage.clear();
})
