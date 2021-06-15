// API = 'a00fd6422dae2d0e4d539abe16f17483'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a00fd6422dae2d0e4d539abe16f17483&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=a00fd6422dae2d0e4d539abe16f17483&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)



async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    // console.log(data.results)
    showMovies(data.results)

}

function showMovies(movies) {
    //reset the main area , prevent search result to stack
    main.innerHTML = ''

    movies.forEach( movie => {
        // console.log(movie)
        const { title, poster_path, vote_average, overview } = movie
        // console.log(title + " \n " + overview + "\n")
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if( searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }

})