'use strict'
console.log('Testing')
// fetch('https://almondine-abiding-title.glitch.me/movies')

var url = 'https://almondine-abiding-title.glitch.me/movies';

fetch(url).then(response =>{
    response.json().then(moviesArray =>{
        console.log(moviesArray);
        moviesArray.forEach( movieData =>{
            console.log(movieData.title);
            var titleMovie = movieData.title
            $('#demo').append(
                "<div>" + "Movie title: " + titleMovie + "</div>",
                "<img src='" + movieData.poster + "'>",
                "<p>" + "Movie Rating is: " + movieData.rating +"</p>",
                "<p>" + "Movie Genre is: " + movieData.genre + "</p>"
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


// var userInput = document.getElementById('inputTitle');

document.querySelector('form.anotherInput').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(userInput.value);

    let userAddMovieTitle = document.getElementsByClassName('title')[0].value;
    let userAddMovieRating = document.getElementsByClassName('rating')[0].value;
    let userAddMovieGenre = document.getElementsByClassName('genre')[0].value;
    console.log(userAddMovieTitle)
    console.log(userAddMovieRating)
    console.log(userAddMovieGenre)

    const newMovie = {
        title: userAddMovieTitle,
        rating: userAddMovieRating,
        genre: userAddMovieGenre,
        // comments: "THIS PLACE SUCKS"
    };
    console.log(newMovie);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(url, options)
        .then( response => {
            return response.json()
        } ).then(function (data){
        console.log(data);
    })
        .catch( error => console.error(error) ); /* handle errors */
});



//TODO SEARCH FILM

