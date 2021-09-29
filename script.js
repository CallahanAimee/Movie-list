const addMovieBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelModalBtn = document.querySelector('.btn--passive');
const confirmAddMovie = document.querySelector('.btn--success');
const movieList = document.getElementById('movie-list');
const entryText = document.getElementById('entry-text');

addMovieBtn.addEventListener('click', showMovieModal);

function showMovieModal() {
    addMovieModal.classList.add('visible');
    backdrop.classList.add('visible');
}

function hideMovieModal() {
    addMovieModal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

backdrop.addEventListener('click', hideMovieModal);
cancelModalBtn.addEventListener('click', hideMovieModal);

confirmAddMovie.addEventListener('click', addMovieToDatabase)

function addMovieToDatabase() {
  
    let movieTitle = document.getElementById('title').value;
    let imgUrl = document.getElementById('image-url').value;
    let movieRating = document.getElementById('rating').value;

    if (checkIfEmptyInput(movieTitle) || checkIfEmptyInput(imgUrl) || checkIfEmptyInput(movieRating)) {
        alert('One of the inputs is empty');
    } else {
        entryText.style.display = 'none';

        movieList.innerHTML += 
        `
        <li class="movie-element">
            <div class="movie-element__image">
                <img src="${imgUrl}" alt="${movieTitle}">
            </div>
            <div class="movie-element__info">
                <h2>${movieTitle}</h2>
                <p>${movieRating}/5 stars</p>
                <button>Delete</button>
            </div>
        </li>
        `;

        let allButtons = document.querySelectorAll('.movie-element__info button');

        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener('click', deleteMovie)
        }

        hideMovieModal();

        document.getElementById('title').value = '';
        document.getElementById('image-url').value = '';
        document.getElementById('rating').value = '';
    }
}

function checkIfEmptyInput(input) {
    if (input === '') {
        return true;
    } else {
        return false;
    }
}

function deleteMovie(movie) {
    movie.target.parentElement.parentElement.remove();
    
    if (movieList.children.length == 0) {
        entryText.style.display = 'block';
    }
}
