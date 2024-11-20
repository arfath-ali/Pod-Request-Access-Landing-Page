const form = document.querySelector(".pod-page__form");
const email = document.querySelector(".pod-page__email");
const button = document.querySelector(".pod-page__button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (emailValidation(email.value)) {
        clearError();
    } else {
        showError();
    }
});

function emailValidation(email) {
    const emailRegex = /^[a-z0-9._+%-]+\@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
}

function showError() {
    clearError();
    email.classList.add("errorAlert");
    const errorAlert = document.createElement("p");
    errorAlert.textContent = "Oops! Please check your email";
    errorAlert.classList.add("errorMessage");
    form.appendChild(errorAlert);
}

function clearError() {
    const errorAlert = document.getElementsByClassName("errorAlert")[0];
    const errorMessage = document.getElementsByClassName("errorMessage")[0];

    if (errorAlert) {
        email.classList.remove("errorAlert");
    }

    if (errorMessage) {
        form.removeChild(errorMessage);
    }
}

