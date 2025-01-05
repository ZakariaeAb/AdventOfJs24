const eyePath = document.querySelector(".eye");
const passwordInput = document.getElementById("password");

const togglePassword = () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordInput.classList.toggle('active');
        eyePath.classList.toggle('active');
    } else {
        passwordInput.type = "password";
        passwordInput.classList.toggle('active');
        eyePath.classList.toggle('active');
    }
}

eyePath.addEventListener("click", togglePassword);