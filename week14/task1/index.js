function getMessage() {

    let userName = document.getElementById('name').value;
    let greeting = "Привет," + userName + "!";
    document.getElementById('greeting').innerHTML = greeting;
}