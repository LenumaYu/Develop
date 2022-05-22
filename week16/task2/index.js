function carCalc() {
    let sum = 0;
    let carBrands = document.querySelector('select').value;
    let fuel = document.querySelector('.fuel :checked').value;
    let carAccident = document.querySelector('.carAccident :checked').value;
    let year = document.getElementById('carYear').value;
    let mileage = document.getElementById('mileAge').value;
    let numMileage;

    if (mileage <= 50000) {
        numMileage = +100000;
    } else {
        numMileage = +0;
    }

    sum = +carBrands + +fuel + +carAccident + +year + +numMileage;
    document.getElementById('result').innerHTML = sum + " RUR";
}

document.querySelector('.btn').addEventListener('click', carCalc);