//Задание 1

let array = ['js', 'css', 'html'];
console.log(array[0]);

//Задание 2
let array1 = [0, 1, false, 2, undefined, '', 3, null];
let filteredArray1 = array1.filter(el => el > 0);

alert(filteredArray1);

//Задание 3

let arrays = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];
for (let i = 0; i < arrays.length; i++) {

    if(arrays[i].length > 3) {
        console.log(i);
    }    
}

