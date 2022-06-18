class Calculator {
    static getSum(a, b) {
        return a + b;
    }

    static getSubstraction(a, b) {
        return a - b;
    }

    static getMultiplication(a, b) {
        return a * b;
    }

    static getDivision(a, b) {
        if (b == 0) {
            return "На ноль делить нельзя!";
        } else {
            return a / b;
        }
    }
}

function showResult() {
    let a = Number(document.querySelector('#firstNumber').value);
    let b = Number(document.querySelector('#secondNumber').value);
    document.querySelector('#result').innerHTML = Calculator.getSum(a, b);
    document.querySelector('#result').innerHTML = Calculator.getSubstraction(a, b);
    document.querySelector('#result').innerHTML = Calculator.getMultiplication(a, b);
    document.querySelector('#result').innerHTML = Calculator.getDivision(a, b);


}

document.querySelector('#plus').addEventListener('click', showResult);
document.querySelector('#minus').addEventListener('click', showResult);
document.querySelector('#multy').addEventListener('click', showResult);
document.querySelector('#divide').addEventListener('click', showResult);