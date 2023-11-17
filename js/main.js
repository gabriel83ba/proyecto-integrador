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
