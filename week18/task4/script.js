// let allNotes = [];
let noteSpace = document.querySelector('#note'),
    button = document.querySelector('button'),
    textarea = document.querySelector('#noteText');


document.addEventListener('DOMContentLoaded', () => {
    const allNotes = getData();
    
    allNotes.map(allNote => {
        const box = document.createElement('div');
        box.innerHTML = allNote;
        
        noteSpace.append(box);
    });
});

button.addEventListener('click', postComment);

function postComment() {
    const value = textarea.value;
    
    setData(value);

}

function getData() {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

function setData(value) {
    const allNotes = getData();
    allNotes.push(value);

    localStorage.setItem('notes', JSON.stringify(allNotes));
}

// function sendNote(note) {
//     document.querySelector('#note').innerHTML += `<div>${note}</div>`;
// }

// function checkNote() {
//     let note = document.querySelector('#noteText').value;
//     allNotes.push(note);

//     localStorage.setItem('notes', JSON.stringify(allNotes));
//     sendNote(note);
//     document.querySelector('#noteText').value = "";
// }

// localStorage.setItem('notes', JSON.stringify(allNotes));


// const allNotes = ['hello', 'привет'];





