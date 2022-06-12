function formatName() {
    let userName = document.querySelector('#userName');
    let changedName = userName.value.trim()
    arr = changedName.split(" ").map(word => {
        let newUserName = "";
        newUserName = word[0].toUpperCase() + word.toLowerCase().slice(1);
        return newUserName;
    });

    document.querySelector('#firstName').value = arr[0];
    document.querySelector('#secondName').value = arr[1];
    document.querySelector('#surName').value = arr[2];
    
}


document.querySelector('button').addEventListener('click', formatName);
