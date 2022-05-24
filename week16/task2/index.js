function carCalc() {
    let sum = 0;
    let carBrands = document.querySelector('select').value;
    let fuel = document.querySelector('.fuel :checked').value;
    let carAccident = document.querySelector('.carAccident :checked').value;
    let year = document.getElementById('carYear').value;
    let mileage = document.getElementById('mileAge').value;
    let numMileage;
    let prices =[];

    

    if (mileage <= 50000) {
        numMileage = +100000;
    } else {
        numMileage = +0;
    }

    prices.push(carBrands, fuel, carAccident, year, numMileage);
    
    for(let i = 0; i < prices.length; i++) {
        sum += +prices[i];
    }

    document.getElementById('result').innerHTML = sum + " RUR";
}

document.querySelector('.btn').addEventListener('click', carCalc);