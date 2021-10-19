'use strict'
console.log('Testing')

var url = 'https://almondine-abiding-title.glitch.me/movies';

function showMovies() {
    fetch(url).then(response => {
        response.json().then(moviesArray => {
            console.log(moviesArray);
            moviesArray.forEach(movieData => {
                console.log(movieData.title);
                var titleMovie = movieData.title
                $('#demo').append(
                    "<div id='" + movieData.id + "'>" +
                    "<div class='movieTitle'>" + "Movie title: " + titleMovie + "</div>" +
                    "<img src='" + movieData.poster + "'>" +
                    "<p class='movieRating'>" + "Movie Rating is: " + movieData.rating + "</p>" +
                    "<p class='movieGenre'>" + "Movie Genre is: " + movieData.genre + "</p>" +
                    "<p class='movieActor'>" + "Movie Actors are: " + movieData.actors + "</p>" +
                    "<p class='moviePlot'>" + "Movie Plot is: " + movieData.plot + "</p>" +
                    "<button class='movieEdit' type='button'>" + "Start Edits" + "</button>" +
                    "<button class='movieDelete' type='submit'>" + "Delete Movie" + "</button>" +
                    "</div>"
                )
            })
        })
    })
}

showMovies()


//Show and hide loader until page loads

$(window).on('load', function () {
    $('.loader').fadeOut(2000);
    $('.content').fadeIn(3000);
})


//FUNCTION FOR ADDING MOVIE

document.querySelector('form.anotherInput').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(userInput.value);

    let userAddMovieTitle = document.getElementsByClassName('title')[0].value;
    let userAddMovieRating = document.getElementsByClassName('rating')[0].value;
    let userAddMovieGenre = document.getElementsByClassName('genre')[0].value;
    let userAddMovieActor = document.getElementsByClassName('actors')[0].value;
    let userAddMoviePlot = document.getElementsByClassName('plot')[0].value;

    console.log(userAddMovieTitle)
    console.log(userAddMovieRating)
    console.log(userAddMovieGenre)
    console.log(userAddMovieActor)
    console.log(userAddMoviePlot)

    const newMovie = {
        title: userAddMovieTitle,
        rating: userAddMovieRating,
        genre: userAddMovieGenre,
        actors: userAddMovieActor,
        plot: userAddMoviePlot
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
        .then(response => {
            return response.json()
        }).then(function (data) {
        console.log(data);
        $('#demo').append(showMovies).html('')
    })
        .catch(error => console.error(error)); /* handle errors */
});

// let options = {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// }
// fetch(`${url}/${id}`, options)
//     .then((response) => response.json())
//     .then(() => {
//         $('#demo').append(showMovies).html('')
//     })
// console.log(options)
// })
// };
// fetch(`${url}/${id}`, options)
//     .then((response) => response.json())
//     .then(() => {
//         $('#demo').append(showMovies).html('')
//     })
// })
// })


$(document).on('click', '.movieEdit', function (e) {

    let id = $(this).parent().attr("id")
    console.log(id);
    fetch(url + '/' + id).then((response) => response.json())
        .then((movie) => {
            console.log(movie);
            $('#title').val(movie.title);
            $('#rating').val(movie.rating);
            $('#genre').val(movie.genre);
            $('#actors').val(movie.actors);
            $('#plot').val(movie.plot);


        })
    $('#edit').click(e => {
        e.preventDefault()
        let editor = {
            title: $('#title').val(),
            rating: $('#rating').val(),
            genre: $('#genre').val(),
            actors: $('#actors').val(),
            plot: $('#plot').val(),
        }
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editor), //Convert the JS object into a JSON string before sending it up to the server.
        };
        fetch(`${url}/${id}`, options)
            .then((response) => response.json())
            .then(() => {
                $('#demo').append(showMovies).html('')
            })
    })
})


//DELETE MOVIES WITH BUTTON


$(document).on('click', '.movieDelete', function (e) {
    e.preventDefault();

    let id = $(this).parent().attr("id")
    console.log(id);
    fetch(url + '/' + id).then((response) => response.json())
        .then((movie) => {
            console.log(movie);
        })

    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch(`${url}/${id}`, options)
        .then((response) => response.json())
        .then(() => {
            $('#demo').append(showMovies).html('')
        })
    console.log(options)
})




