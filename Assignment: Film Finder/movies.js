// Adding all Movies to the DOM one by one via FOR loop
const addMoviesToDom= function(movie){
    for(let i=0 ; i < movie.length; i++){
        let parentMoviesUl = document.querySelector('#best-movies-ID');
        let liForMovieList = document.createElement('li');
        liForMovieList.classList.add('all-movies-home');
        let linkToImdb =document.createElement('a');
        linkToImdb.href="https://www.imdb.com/title/"+movie[i].imdbID+"/";
        let imageForAllMovie = document.createElement('img');
        parentMoviesUl.appendChild(liForMovieList);
        liForMovieList.appendChild(linkToImdb);
        linkToImdb.appendChild(imageForAllMovie);        
        imageForAllMovie.src=movie[i].poster;
    };
};

 addMoviesToDom(movies);

const latestMovie= movies.filter(movie => movie.year >=2014);
const avengersMovies = movies.filter(movie =>movie.title.includes("Avenger"));
const xMenMovies = movies.filter(movie => movie.title.includes("X-Men")); 
const princessMovies= movies.filter((movie)=>movie.title.includes("Princess")); 
const batmanMovies= movies.filter(movie => movie.title.includes("Batman")); 

// Event listener for buttons

// All movies parent
let removeAllMoviesParent = document.getElementById('movies').getElementsByClassName('best-movies');

// correct the latest movies
submitButtonParent.addEventListener('submit' , function(){
    removeAllMoviesParent[0].innerHTML=[];
    addMoviesToDom(matchedMovie);
})


let showLatest = document.getElementById('latest-movie-btn');
showLatest.addEventListener('click' , function(){
    removeAllMoviesParent[0].innerHTML=[];
    addMoviesToDom(latestMovie);
});
let showAvengersMovie = document.getElementById('avengers-movie-btn');
showAvengersMovie.addEventListener('click' , function(){
    removeAllMoviesParent[0].innerHTML=[];
    addMoviesToDom(avengersMovies);
});
let showXmen = document.getElementById('x-men-movies-btn');
showXmen.addEventListener('click' , function(){
    removeAllMoviesParent[0].innerHTML=[];
    addMoviesToDom(xMenMovies);
});
let showPrincess = document.getElementById('princess-movies-btn');
showPrincess.addEventListener('click' , function(){
    removeAllMoviesParent[0].innerHTML=[];
    addMoviesToDom(princessMovies);
});
let showBatman = document.getElementById('batman-movies-btn');
showBatman.addEventListener('click' , function(){
    removeAllMoviesParent[0].innerHTML=[];
    addMoviesToDom(batmanMovies);
});

//refresh page
const headerParent = document.getElementById('my-head');
headerParent.style.cursor = 'pointer';
headerParent.addEventListener('click' , function(e){
    location.reload()
});



// SEARCH BUTTOn

function searchFunction(){

	let inputButtonParent = document.getElementById('search-button');
    let userEntry = inputButtonParent.value.toUpperCase();
    let submitButtonParent = document.getElementById('submit-button');
    let moviesParent = document.querySelector('#best-movies-ID');
    let matchedMovie= movies.find(movie => movie.title.toUpperCase.includes(userEntry));

    
    if(movieTitle.includes(userEntry)){
    	matchedMovies.push(movieTitle);
        addMoviesToDom(matchedMovies);

    }
    else{
moviesParent.innerHTML=' Please search again';
moviesParent.style.fontSize= '60px';
moviesParent.style.color= 'red';


    }
    // for(let i=0; i<movies.length; i++){
    //     let listedMovies =document.getElementById('movies').getElementsByTagName('ul')[0];
    //     textValue = listedMovies.textContent || listedMovies.innerText;
    //     if(textValue.toUpperCase().indexOf(userEntry) > -1) {
    //         return userEntry;
    //     }

    // }
    // if(movies.title.includes(userEntry)){
    //     moviesParent.push(userEntry);
    //     for(i=0; i<movies.length; i++){
    //         let searchedMovie = moviesParent[i];
    //         return searchedMovie;
    //     }
    // }
}


//searchFunction()

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
