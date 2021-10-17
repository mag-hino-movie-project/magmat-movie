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
        titles.forEach( titleObj =>{
            console.log(titleObj.title);
            var titleMovie = titleObj.title
            $('#demo').append(titleMovie)
        })
    })
})

//hello
// var nameString = users.map(function (user){
//     return user.name
// }).join(', ')
// console.log(nameString);

//Show and hide loader until page loads
$(window).on('load', function(){
    $('.loader').fadeOut(2000);
    $('.content').fadeIn(3000);
})
