const description = document.querySelectorAll(".card__description")
const buttonShow = document.querySelectorAll(".card__button");

for (let i = 0; i < buttonShow.length; i++) {
    if (description[i].className = "card__description") {
        buttonShow[i].onclick = hide;
        function hide() {
            description[i].className = "";
            buttonShow[i].innerText = "Ver menos";
        }
    } else {
        buttonShow[i].onclick = show;
        function show() {
            description[i].className = "card__description";
            buttonShow[i].innerHTML = "Ver más";
        }
    }
}
