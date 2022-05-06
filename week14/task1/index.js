function getSum() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a + b;
    document.getElementById('result').innerHTML = result;
}

function getSubstraction() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a - b;
    document.getElementById('result').innerHTML = result;
}

function getDivision() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a / b;
    document.getElementById('result').innerHTML = result;
}

function getMultiplication() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a * b;
    document.getElementById('result').innerHTML = result;
}