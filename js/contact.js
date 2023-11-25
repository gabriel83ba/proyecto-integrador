const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertClose = document.querySelector(".alert__close");
const inputFullName = document.getElementById("id-fullname");
const inputEmail = document.getElementById("id-email");
const inputConsult = document.getElementById("id-consult");
const buttonSubmit = document.getElementById("id-submit");

const regexFullName = /^[a-zA-Z0-9]{8,50}$/;
const regexEmail = /^[a-z0-9._]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const regexConsult = /^[a-zA-Z0-9]{100,800}$/;

function validateFullName() {
    if (!regexFullName.test(inputFullName.value)) {
        inputFullName.nextElementSibling.innerText = "Este campo debe tener entre 8 y 50 caracteres.";
        buttonSubmit.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
        alertClose.onclick = alert.setAttribute("class", "alert");
    } else {
        inputFullName.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validateEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        inputEmail.nextElementSibling.innerText = "El correo electrónico ingresado no es válido.";
        buttonSubmit.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
        alertClose.onclick = alert.setAttribute("class", "alert");
    } else {
        inputEmail.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validateConsult() {
    if (!regexConsult.test(inputConsult.value)) {
        inputConsult.nextElementSibling.innerText = "Este campo debe tener entre 100 y 800 caracteres.";
        buttonSubmit.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
        alertClose.onclick = alert.setAttribute("class", "alert");
    } else {
        inputConsult.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validateContact() {
    validateFullName();
    validateEmail();
    validateConsult();
}

buttonSubmit.onclick = validateContact;