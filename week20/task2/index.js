document.addEventListener('DOMContentLoaded', function (event) {
    getGalaxy()
});

function getGalaxy() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=yxqfykpPSTHGvG9JTYWE0yY8qHL9wgTHyxDDm94m')
        .then(response => response.json())
        .then(user => {
            console.log(user);
            document.querySelector('h2').innerText = user.title;
            document.querySelector('#pic').src = user.url;
            document.querySelector('.description').innerText = user.explanation;
        })
        .catch(error => console.log(error));

}