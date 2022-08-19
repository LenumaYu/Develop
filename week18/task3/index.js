// let comments = [];
// let userNames = [];
// document.querySelector('textarea').value = "";

// function generateMessages() {
//     let optionString = "";
//     for (let comment of comments) {
//         optionString += `<div class="generated">${comment}</div>`;
//     }

//     for (let userName of userNames) {
//         optionString += `<div class="generated">${userName}</div>`;
//     }

//     document.querySelector('#messages').innerHTML = optionString;
// }

// function checkSpam() {
//     let commentText = document.querySelector('textarea').value;
//     let nameText = document.querySelector('#userName').value;
//     comments.push(commentText);
//     userNames.push(nameText);
//     generateMessages();
//     document.querySelector('textarea').value = "";

// }

// document.querySelector('#send').addEventListener('click', checkSpam);


document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    let userComment = localStorage.getItem('userComment')
    if (name != null) {
        document.querySelector('#userName').value = name;
    }

    if (userComment != null) {
        document.querySelector('#commentText').value = userComment;
    }

})

function sendMessage(userName, comment) {
    document.querySelector('#messages').innerHTML += `<span>${userName}:</span></span><span>${comment}</span><br>`;
    return JSON.parse(localStorage.getItem('comment')) || [];

}

function checkMessage() {
    let comments = [];
    let userName = document.querySelector('#userName').value;
    let comment = document.querySelector('#commentText').value;

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', userName);
    }
    localStorage.setItem('comment', JSON.stringify(comments.push(comment)));

    // let optionString = "";
    // for (let comment of comments) {
    //     optionString += `<div class="generated">${comment}</div>`;
    // }

    // if (localStorage.getItem('userComment') == null) {
    //     localStorage.setItem('userComment', comment);
    // }

    sendMessage(userName, comment);
    document.querySelector('textarea').value = "";

}



document.querySelector('#send').addEventListener('click', checkMessage);