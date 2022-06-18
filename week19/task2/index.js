class Cat {
    constructor(petName, ownerName, ownerContacts, breed, food, sex, age) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.ownerContacts = ownerContacts;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.age = age;
    }

}

let cat = new Cat();

function showInfo() {
    cat.petName = document.querySelector('#petName').value;
    cat.ownerName = document.querySelector('#ownerName').value;
    cat.ownerContacts = document.querySelector('#ownerContacts').value;
    cat.breed = document.querySelector('select :checked').text;
    cat.sex = document.querySelector('input.catGender:checked').parentElement.textContent;
    cat.age = document.querySelector('#catAge').value;
    cat.food = document.querySelector('input.catFood:checked').parentElement.textContent;
    console.log(cat);
}

document.querySelector('button').addEventListener('click', showInfo);