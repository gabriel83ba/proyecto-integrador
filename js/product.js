const inputProductName = document.getElementById("id-product-name")
const inputPrice = document.getElementById("id-price")
const inputStock = document.getElementById("id-stock")
const inputPublisher = document.getElementById("id-publisher")
const inputDescription1 = document.getElementById("id-description1")
const inputDescription2 = document.getElementById("id-description2")
const buttonSave = document.getElementById("id-save");
const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertClose = document.querySelector(".alert__close");


const regexProductName = /^[a-zA-Z0-9]{5,50}$/;
const regexPrice = /^([1-9]{1}\d{0,2})$|^1000$/;
const regexStock = /^([1-9]{1}\d{0,1})$|^100$/;
const regexPublisher = /^[a-zA-Z0-9]{3,50}$/;
const regexDescription1 = /^[a-zA-Z0-9]{5,200}$/;
const regexDescription2 = /^[a-zA-Z0-9]{100,1000}$/;

function validateProductName() {
    if (!regexProductName.test(inputProductName.value)) {
        inputProductName.nextElementSibling.innerText = "El nombre debe tener entre 5 y 50 caracteres.";
        buttonSave.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
        alertClose.onclick = alert.setAttribute("class", "alert");
    } else {
        inputProductName.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validatePrice() {
    if (!regexPrice.test(inputPrice.value)) {
        inputPrice.nextElementSibling.innerText = "El valor debe ser entre 1 y 1000.";
        buttonSave.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
    } else {
        inputPrice.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validateStock() {
    if (!regexStock.test(inputStock.value)) {
        inputStock.nextElementSibling.innerText = "El valor debe ser entre 1 y 100.";
        buttonSave.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
    } else {
        inputStock.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validatePublisher() {
    if (!regexPublisher.test(inputPublisher.value)) {
        inputPublisher.nextElementSibling.innerText = "El nombre debe tener entre 3 y 50 caracteres.";
        buttonSave.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
    } else {
        inputPublisher.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validateDescription1() {
    if (!regexDescription1.test(inputDescription1.value)) {
        inputDescription1.nextElementSibling.innerText = "La descripción debe tener entre 5 y 200 caracteres";
        buttonSave.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
    } else {
        inputDescription1.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validateDescription2() {
    if (!regexDescription2.test(inputDescription2.value)) {
        inputDescription2.nextElementSibling.innerText = "La descripción debe tener entre 100 y 1000 caracteres";
        buttonSave.disabled = true;
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger");
    } else {
        inputDescription2.nextElementSibling.innerText = "";
        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success");
    }
}

function validateProduct() {
    validateProductName();
    validatePrice();
    validateStock();
    validatePublisher();
    validateDescription1();
    validateDescription2();
}

buttonSave.onclick = validateProduct;