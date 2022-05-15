function checkForm() {

    let firstName = document.getElementById('firstName');
    let secondName = document.getElementById('secondName');
    let password = document.getElementById('newPassword');
    let email = document.getElementById('inputEmail');
    let confirmPassword = document.getElementById('confirmPassword');
    document.getElementById('errorMessage').innerHTML = "";


    if (firstName.value == "") {
        document.getElementById('errorMessage').innerHTML += "Заполните Имя<br>";
    }

    if (secondName.value == "") {
        document.getElementById('errorMessage').innerHTML += "Заполните Фамилию<br>";
    }

    if (email.value == "") {
        document.getElementById('errorMessage').innerHTML += "Заполните e-mail<br>";
    }

    if (password.value == "") {
        document.getElementById('errorMessage').innerHTML += "Заполните пароль<br>";
    }


    if (password.value.length <= 5) {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий<br>";
    }

    if (password.value != confirmPassword.value) {
        document.getElementById('errorMessage').innerHTML += "Пароли не совпадают<br>";
    }

    

    if (email.value.indexOf('@') == -1) {
        document.getElementById('errorMessage').innerHTML += "Вы неверно заполнили e-mail<br>";
    }


    if (confirmPassword.value == "") {
        document.getElementById('errorMessage').innerHTML += "Подтвердите пароль<br>";
    }

    else {
        alert(`Добро пожаловать, ${firstName.value}!`)
    }
}