'use strict'
console.log('Testing')
// fetch('https://almondine-abiding-title.glitch.me/movies')

var movies = fetch('https://almondine-abiding-title.glitch.me/movies');

fetch('https://almondine-abiding-title.glitch.me/movies')
    .then((response) => {
        console.log(response.json())
movies.then(function (result) {
    console.log(result);
    result.json().then((resultsObject) => console.log(resultsObject));
})
})


