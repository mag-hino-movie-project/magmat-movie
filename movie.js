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

fetch('https://almondine-abiding-title.glitch.me/movies').then(response =>{
    response.json().then(titles =>{
        console.log(titles);
        titles.forEach( titleObj =>{
            console.log(titleObj.title);
            var titleMovie = titleObj.title
            $('#demo').append(
                "<div>" + "Movie title: " + titleMovie + "</div>",
                "<img src='" + titleObj.poster + "'>",
                "<p>" + "Movie Rating is: " + titleObj.rating +"</p>",
                "<p>" + "Movie Genre is: " + titleObj.genre + "</p>"
                )
        })
    })
})

//hello
// var nameString = users.map(function (user){
//     return user.name
// }).join(', ')
// console.log(nameString);

//Show and hide loader until page loads
$(window).on('load', function () {
    $('.loader').fadeOut(2000);
    $('.content').fadeIn(3000);
})


//TODO TRYING FUNCTIONS FOR ADDING MOVIE
var userInput = document.getElementById('inputTitle');

document.querySelector('form.anotherInput').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(userInput.value);
});



const newMovie = {
    inputTitle: '',
    // name: '',
    // rating: 5,
    // comments: "THIS PLACE SUCKS"
};
console.log(newMovie);

const url = movies;
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
};
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */


// function addMovie(e) {
//     e.preventDefault()
//     var text = "";
//     var input = document.querySelector("#inputTitle").value
//     var newMovie = {id:titleObj.length+1, name:input}
//     titles.push(newMovie)
//     tbody.innerHTML = renderMovies(movies)
// }
//
// function renderMovies(movies) {
//     var html = '';
//     for(var i = 0; i < movies.length; i++) {
//         html += titles(movies[i]);
//     }
//     return html;
// }
//
// var tbody = document.querySelector('#textArea');
// console.log(tbody);
// tbody.innerHTML = renderMovies(movies);

// function renderMovie(movie) {
//     // var html = '<div class="coffee">';
//     $('#demo').append(
//         "<div>" + "Movie title: " + titleMovie + "</div>",
//         "<img src='" + titleObj.poster + "'>",
//         "<p>" + "Movie Rating is: " + titleObj.rating +"</p>",
//         "<p>" + "Movie Genre is: " + titleObj.genre + "</p>"
//     )
// }



//TODO SEARCH FILM

