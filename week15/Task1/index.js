function getSum() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a + b;
    getResult(result);

}

function getSubstraction() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a - b;
    getResult(result);
}


function getDivision() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a / b;
    if (b == 0) {
        getResult("На ноль делить нельзя!");
    } else {
        getResult(result);
    }

}

function getMultiplication() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a * b;
    getResult(result);
}


function getResult(result) {
    document.getElementById('result').innerHTML = result;
}