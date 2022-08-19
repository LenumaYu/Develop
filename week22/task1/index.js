
function getPicture() {
    let gif = document.querySelector('#textSearch').value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Cq24f83LAAL0W3b3RDMYIph3UjQxWsfJ&q=${gif}&limit=25&offset=0&rating=g&lang=ru`)
        .then(response => response.json())
        .catch(error => {
            if (!Navigator.onLine) {
                alert("Отсутствует соединение с интернетом")
            }
            if(response == null) {
                alert ("fff")
            }
        })
        .then(user => {
            try {
                for (let i = 0; i < 5; i++) {
                    let gifContainer = document.createElement('img')
                    gifContainer.setAttribute('src', user.data[i].images.downsized.url);
                    document.querySelector('#result').append(gifContainer);
                }
            } catch (error) {
                console.log(error.message)
            }
        })
    .catch(error => console.log(error.message));

}

document.querySelector('#btn').addEventListener('click', getPicture)