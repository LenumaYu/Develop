let comments = [];
document.querySelector('textarea').value = "";

function generateMessages() {
    let optionString = "";
    for (let comment of comments) {
        optionString += `<div class="generated">${comment}</div>`;
    }
    document.querySelector('#messages').innerHTML = optionString;
}

function checkSpam() {
    let commentText = document.querySelector('textarea').value;
    let first = commentText.replace(/viagra/ig, "***");
    let second = first.replace(/XXX/ig, "***");
    comments.push(second);
    generateMessages();
    document.querySelector('textarea').value = "";

}

document.querySelector('#send').addEventListener('click', checkSpam);
