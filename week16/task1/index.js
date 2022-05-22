
function sumInput() {
    let sum = 0;
    let numbers = [];

    for (; ;) {
        let value = prompt("Введите число");
        if (value === null) {
            break;
        }

        if (value === '') {
            break;
        }

        if (!isNaN(value)) {
            sum += +value;
            numbers.push(value);
            continue;
        }
        break;        
    }

    alert(sum);
    alert(numbers.sort());
}

document.getElementById('btnClick').addEventListener('click', sumInput);

