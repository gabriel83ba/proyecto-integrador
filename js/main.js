const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const showAlert = document.querySelector("#id-save");
const hideAlert = document.querySelector(".alert__close");

function show() {
    alert.setAttribute("class", "alert alert--success")
}

function hide() {
    alert.setAttribute("class", "alert")
}

showAlert.onclick = show;
hideAlert.onclick = hide;

/******************************************************/
function modifyErrorMessage(element) {
    if (element.validity.rangeOverflow) return "Este valor debe ser menor o igual a " + element.getAttribute("max");
    if (element.validity.rangeUnderflow) return "Este valor debe ser mayor o igual a " + element.getAttribute("min");
    if (element.validity.tooShort) return "Este valor debe tener una logitud mínima de " + element.getAttribute("minlength") + " caracteres";
    if (element.validity.valueMissing) return "Este valor es obligatorio";
}

const formTesting = document.querySelector(".form-testing");
const inputFirstName = document.querySelector("#id-first-name");
const inputAge = document.querySelector("#id-age");
const buttonSave = document.querySelector("#id-save");

function validate() {
    const elements = [inputFirstName, inputAge];
    let errorsFound = 0;

    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].validity.valid) {
            // Selecciona el siguiente elemento hermano adyacente: Agrega texto
            elements[i].nextElementSibling.innerText = modifyErrorMessage(elements[i]);
            errorsFound++;
        } else {
            // Selecciona el siguiente elemento hermano adyacente: Quita texto
            elements[i].nextElementSibling.innerText = "";
        }
    }

    if (errorsFound === 0) {
        // Resetea el formulario
        formTesting.reset();

        alertText.innerText = "Los datos se guardaron correctamente.";
        alert.setAttribute("class", "alert alert--success alert--show");

        setTimeout(() => {
            alert.setAttribute("class", "alert--hide");
        }, 2000);
    } else {
        alertText.innerText = "Hay campos que requieren su atención.";
        alert.setAttribute("class", "alert alert--danger alert--show");
    }
}

buttonSave.onclick = validate;
