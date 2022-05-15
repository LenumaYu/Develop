function changeTheme() {

    switch(document.getElementById('theme').value) {

        case "dark": document.body.style.backgroundColor = "grey"; break;
        case "white": document.body.style.background = "white"; break;
        case "blue": document.body.style.background = "blue"; break;
        default: document.body.style.background = "";
    }
}