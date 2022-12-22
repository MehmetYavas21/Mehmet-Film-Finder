
//all movies poster

console.log('all movies in array' , movies);

// All Movies Title
let allMoviesTitle = movies.map((title) => {
    return title.title;
});
// console.log('Titles : ' ,allMoviesTitle);
//All Movies poster
let posterAllMovies = movies.map((poster) => poster.poster);
// console.log('Posters : ' ,posterAllMovies);
// All Movies IMDB ID
let imdbAlMoviesID = movies.map((imdbID) => imdbID.imdbID);
//console.log('IMDB Ids : ' , imdbAlMoviesID);
// All movies years
let yearsAllMovies = movies.map((year) => year.year);
//console.log('Published on : ', yearsAllMovies);

// Adding all Movies to the DOM one by one via FOR loop
// to give each <li> element a poster/picture and a linkt to IMDB
// But the link is not working although it's true !!!
const addAllMoviesToDom= function(){
    for(let i=0 ; i < posterAllMovies.length; i++){
        let parentMoviesUl = document.querySelector('#best-movies-ID');
        let liForMovieList = document.createElement('li');
        liForMovieList.classList.add('all-movies-home');
        let linkToImdb =document.createElement('a');
        linkToImdb.href="https://www.imdb.com/title/"+imdbAlMoviesID[i]+"/";
        let imageForAllMovie = document.createElement('img');
        parentMoviesUl.appendChild(liForMovieList);
        liForMovieList.appendChild(linkToImdb);
        linkToImdb.appendChild(imageForAllMovie);        
        imageForAllMovie.src=posterAllMovies[i];
        //console.log('film poster ', i+1 , posterAllMovies[i]);
    };
};
addAllMoviesToDom();

// Latest Movies since 2014

let latestMovies2014 = movies.filter((item) => {
    return item.year >= 2014;
});
// console.log('latest movies since 2014: ' , latestMovies2014);
let latestMoviePoster2014 = latestMovies2014.map((post) => post.poster);
// console.log(latestMoviePoster2014);
const latestMoviesImdbId =latestMovies2014.map((pic) => pic.imdbID); // Latest movies filtered IMDB IDs to add them in href with for loop
// console.log('latest Movies IMDB IDs : ' , latestMoviesImdbId);

// Latest movies in for loop, to give each <li> element a poster/picture
const addLatestMoviesToDom = function() {
    for(let i=0 ; i < latestMoviePoster2014.length; i++){
        let newLiForLastMovies = document.createElement('li');
        let newMovieParent = document.querySelector('#best-movies-ID');
        let latestMoviesLink = document.createElement('a');
        newLiForLastMovies.classList.add('latest-movies-since-2014');
        let latestMoviesPoster = document.createElement('img');
        latestMoviesLink.href="https://www.imdb.com/title/"+latestMoviesImdbId[i]+"/";
        newMovieParent.appendChild(newLiForLastMovies);
        newLiForLastMovies.appendChild(latestMoviesLink);
        latestMoviesLink.appendChild(latestMoviesPoster);
        latestMoviesPoster.src=latestMoviePoster2014[i];
        // console.log(latestMoviePoster2014[i]);
    };
};

//Avengers Movies

let avengersMovie = movies.filter(movie => {
    let includeAvenger = movie.title.includes("Avenger"); 
    return includeAvenger;
}); 
// console.log('Avengers Movies: ' , avengersMovie);
const avengerMoviesPoster = avengersMovie.map((film) => film.poster);
// console.log(avengerMoviesPoster);
const avengersImdbId = avengersMovie.map((link) => link.imdbID); // it will be use in eventlistener to add link to the poster

// Avengers movies in for loop, to give each li element a poster
const addAvengersMoviesToDom = function() {
    for(let i=0 ; i < avengersMovie.length; i++){
        let newLiForAvengersMovie = document.createElement('li');
        let avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
        newLiForAvengersMovie.classList.add('avenger-movies')
        let avengersMoviePosterImg = document.createElement('img');
        let avengersLink = document.createElement('a');
        avengersLink.href="https://www.imdb.com/title/"+avengersImdbId[i]+"/";
        avengersMovieParent.appendChild(newLiForAvengersMovie);
        newLiForAvengersMovie.appendChild(avengersLink);
        avengersLink.appendChild(avengersMoviePosterImg);
        avengersMoviePosterImg.src=avengerMoviesPoster[i];
        // console.log('Avengers Movie poster ', i, avengerMoviesPoster[i]);
    };
};
// addAvengersMoviesToDom();

//X-Men Movies

let xMenMovie = movies.filter(movie => {
    let includeXMen = movie.title.includes("X-Men"); 
    return includeXMen;
}); 
// console.log('X-Men Movies: ' , xMenMovie);
const xMenAllMoviePoster = xMenMovie.map((film) => film.poster);
// console.log('X-Men Movies poster ' , xMenAllMoviePoster);
const xMenImdb = xMenMovie.map((link) => link.imdbID); 

// X-Men movies in for loop, to give each li element a poster
const addXMenMoviesToDom = function() {
    for(let i=0 ; i < xMenMovie.length ; i++){
        let newLiForXMenMovie = document.createElement('li');
        let xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
        newLiForXMenMovie.classList.add('xMen-movies');
        let xMenMoviePoster = document.createElement('img');
        let xMenLinkImg = document.createElement('a');
        xMenLinkImg.href="https://www.imdb.com/title/"+xMenImdb[i]+"/";
        xMenMovieParent.appendChild(newLiForXMenMovie);
        newLiForXMenMovie.appendChild(xMenLinkImg);
        xMenLinkImg.appendChild(xMenMoviePoster);
        xMenMoviePoster.src = xMenAllMoviePoster[i];
        // console.log('X-Men Movie poster ', i , xMenAllMoviePoster[i]);
    };
};
// addXMenMoviesToDom();

// Princess Movies

const princessMovie = movies.filter(movie => {
    let includePrincess = movie.title.includes("Princess"); 
    return includePrincess;
}); 
// console.log('Princess Movies: ' , princessMovie);
const princessMoviesAllPoster = princessMovie.map((movie) => movie.poster);
// console.log('Princess movies posters ' , princessMoviesAllPoster);
const princessLinkImdb = princessMovie.map((link) => link.imdbID);

// Princess movies in for loop, to give each li element a poster
const addPrincessMoviesToDom = function() {
    for(let i=0 ; i < princessMovie.length ; i++){
        let newLiForPrincessMovie = document.createElement('li');
        let princessMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
        newLiForPrincessMovie.classList.add('princess-movies');
        let princessMoviePoster = document.createElement('img');
        let princessLinkImg = document.createElement('a')
        princessLinkImg.href="https://www.imdb.com/title/"+princessLinkImdb[i]+"/";
        princessMovieParent.appendChild(newLiForPrincessMovie);
        newLiForPrincessMovie.appendChild(princessLinkImg);
        princessLinkImg.appendChild(princessMoviePoster)
        princessMoviePoster.src = princessMoviesAllPoster[i];
        // console.log('Princess Movie poster ', i , princessMoviesAllPoster[i]);
    };
};
// addPrincessMoviesToDom();


//Batman Movies

const batmanMovie = movies.filter(movie => {
    let includeBatman = movie.title.includes("Batman"); 
    return includeBatman;
}); 
// console.log('Batman Movies: ', batmanMovie);
const batmanMoviesAllPoster = batmanMovie.map((movie) => movie.poster);
// console.log('All Batman movies poster :' , batmanMoviesAllPoster);
const batmanImdbLinks = batmanMovie.map((link) => link.imdbID);

// Batman movies in for loop, to give each li element a poster
const addBatmanMoviesToDom = function() {
    for(let i=0 ; i < batmanMovie.length ; i++){
        let newLiForBatmanMovie = document.createElement('li');
        let batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
        newLiForBatmanMovie.classList.add('batman-movies');
        let batmanMoviePoster = document.createElement('img');
        let batmanLinkImg = document.createElement('a');
        batmanLinkImg.href="https://www.imdb.com/title/"+batmanImdbLinks[i]+"/";
        batmanMovieParent.appendChild(newLiForBatmanMovie);
        newLiForBatmanMovie.appendChild(batmanLinkImg);
        batmanLinkImg.appendChild(batmanMoviePoster);
        batmanMoviePoster.src = batmanMoviesAllPoster[i];
        // console.log('Batman Movie poster ', i , batmanMoviesAllPoster[i]);
    };
};
// addBatmanMoviesToDom();

// Event listener for buttons

// All movies parent
let removeAllMoviesParent = document.getElementById('movies').getElementsByClassName('best-movies');

// Click the first radio button and filter the movies to Latest Movies
let clickLatestMovie = document.getElementById('latest-movie-btn') // have chnged querySelector to getElementById
clickLatestMovie.addEventListener('click' , function(){
    // console.log(removeAllMoviesParent);
    removeAllMoviesParent[0].innerHTML=[];
    addLatestMoviesToDom();
});

// Click the second radio button and filter the movies to Avengers Movies
let clickAvengersMovie = document.getElementById('avengers-movie-btn');
clickAvengersMovie.addEventListener('click' , function(){
    // console.log(removeAllMoviesParent);
    removeAllMoviesParent[0].innerHTML=[];
    addAvengersMoviesToDom();
});

// Click the third radio button and filter the movies to X-Men Movies
const clickXMenMovie = document.getElementById('x-men-movies-btn');
clickXMenMovie.addEventListener('click' , function(){
    // console.log(removeAllMoviesParent);
    removeAllMoviesParent[0].innerHTML=[];
    addXMenMoviesToDom();
});

// Click the fourt radio button and filter the movies to Princess Movies
const clickPrincessMovie = document.getElementById('princess-movies-btn');
clickPrincessMovie.addEventListener('change' , function(e){
    removeAllMoviesParent[0].innerHTML=[];
    addPrincessMoviesToDom();
});

// Click the fifth radio button and filter the movies to Batman Movies
let clickBatmanMovie = document.getElementById('batman-movies-btn');
clickBatmanMovie.addEventListener('click' , function(){
    //console.log(removeAllMoviesParent);
    removeAllMoviesParent[0].innerHTML=[];
    addBatmanMoviesToDom();
});

// When the user click the Website's header it will refresh the page
const headerParent = document.getElementById('my-head');
headerParent.style.cursor = 'pointer';
headerParent.addEventListener('click' , function(e){
    location.reload()
});

/*
// try switch

// TRY TO WRITE NEW CODES TO ADD EVENTLISTENER IN A MORE ELEGANCE WAY
// collecting all buttons
const clearUl = function(){
    let deleteUl =document.getElementById('movies').getElementsByTagName('ul');
    deleteUl.innerHTML=[];
};
const radiobuttons = document.getElementsByClassName('radio-button');

const choosenTitle = function(){
    for(button of radiobuttons){
        console.log(button)
    };
}

radiobuttons[1].addEventListener('click' ,function(){
        switch(choosenTitle){
            case 'latest-movie-btn':
                const latestMovies2014XXX = movies.filter((movie) => 
                movie.year >= 2014
                )
                clearUl();
                addAllMoviesToDom(latestMovies2014XXX);
                break;
            case 'avengers-movie-btn':
                const avengersMovieXXX=movies.filter((movie) => 
                    movie.title.includes("Avenger")
                    );
                    clearUl();
                    addAllMoviesToDom(avengersMovieXXX);
                    break;
            case 'x-men-movies-btn':
                const xMenMovieXXX=movies.filter((movie) => 
                    movie.title.includes("X-Men")
                    );
                    clearUl();
                    addAllMoviesToDom(xMenMovieXXX);
                    break;
            case 'princess-movies-btn':
                const princessMovieXXX=movies.filter((movie) => 
                    movie.title.includes("Princes")
                    );
                    clearUl();
                    addAllMoviesToDom(princessMovieXXX);
                    break;
            case 'batman-movies-btn':
                const batmanMovieXXX=movies.filter((movie) => 
                    movie.title.includes("Batman")
                    );
                    clearUl();
                    addAllMoviesToDom(batmanMovieXXX);
                    break;
        }
    });

*/
