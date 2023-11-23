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

// All movies parent
let removeAllMoviesParent = document.getElementById('movies').getElementsByClassName('best-movies');
// Event listener for buttons
const showLatest = document.getElementById('latest-movie-btn');
const showAvengersMovie = document.getElementById('avengers-movie-btn');
const showXmen = document.getElementById('x-men-movies-btn');
const showPrincess = document.getElementById('princess-movies-btn');
const showBatman = document.getElementById('batman-movies-btn');

const radioButtonsMoviesList= [latestMovie, avengersMovies, xMenMovies,  princessMovies , batmanMovies ]
const radioButtonsNodes = [showLatest, showAvengersMovie, showXmen, showPrincess, showBatman ]
const radioFunc = (node, movie) => {
	for(let i=0; i<node.length; i++){
    	node[i].addEventListener('click' , ()=>{
    		removeAllMoviesParent[0].innerHTML=[];
    		addMoviesToDom(movie[i]);
    		})
    	}
}
radioFunc(radioButtonsNodes, radioButtonsMoviesList );

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
    
    if(matchedMovie.title.includes(userEntry)){
        addMoviesToDom(matchedMovies);
    }
    else{
moviesParent.innerHTML=' Please search again';
moviesParent.style.fontSize= '60px';
moviesParent.style.color= 'red';
    }
    
}

