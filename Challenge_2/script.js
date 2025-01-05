// Sélecteurs DOM - regroupés en haut pour une meilleure maintenabilité
const dropdownTrigger = document.querySelector('.dropdown__trigger');
const dropdownTriggerIcon = document.querySelector('.dropdown__trigger-icon');
const dropdownTriggerText = document.querySelector('.dropdown__trigger-text');
const dropdownContent = document.querySelector('.dropdown__content');

let allMovies = [];

function initializeEventListeners() {
    dropdownTriggerIcon.addEventListener('click', toggleDropdown);
    document.addEventListener('click', handleOutsideClick);
}

function toggleDropdown() {
    dropdownTrigger.classList.toggle('active');
    dropdownTriggerText.classList.toggle('active');
}

function handleOutsideClick(event) {
    if (!dropdownTrigger.contains(event.target)) {
        dropdownTrigger.classList.remove('active');
        dropdownTriggerText.classList.remove('active');
    }
}

async function loadMovies() {
    try {
        const response = await fetch("top-100-christmas-movies.json");
        allMovies = await response.json();
        displayMovies(allMovies);
        initializeSearchInput();
    } catch (error) {
        console.error('Erreur lors du chargement des films:', error);
    }
}

function initializeSearchInput() {
    const searchInput = document.querySelector('.dropdown__input');
    searchInput.addEventListener('input', handleSearch);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();

    if (!searchTerm) {
        displayMovies(allMovies);
        return;
    }

    const filteredMovies = allMovies.filter(movie =>
        movie.Title.toLowerCase().includes(searchTerm)
    );

    displayMovies(filteredMovies);
}

function createMovieElement(movie) {
    const itemDiv = document.createElement("div");
    itemDiv.className = 'dropdown__content-item';

    itemDiv.innerHTML = `
        <div class="dropdown__content-item-img">
            <img src="${movie.Image}" alt="${movie['Image Alt'] || 'Movie poster'}" />
        </div>
        <div class="dropdown__content-item-text">
            <h3 class="dropdown__content-item-title">${movie.Title}</h3>
            <span class="dropdown__content-item-year">${movie.Year}</span>
        </div>
    `;

    itemDiv.addEventListener('click', () => handleMovieSelection(movie));

    return itemDiv;
}

function handleMovieSelection(movie) {
    dropdownTriggerText.innerHTML = `
        <div class="dropdown__content-item">
            <div class="dropdown__content-item-img">
                <img src="${movie.Image}" alt="${movie['Image Alt'] || 'Movie poster'}" />
            </div>
            <div class="dropdown__content-item-text">
                <h3 class="dropdown__content-item-title">${movie.Title}</h3>
                <span class="dropdown__content-item-year">${movie.Year}</span>
            </div>
        </div>
        <input type="text" class="dropdown__input" />
    `;

    dropdownTrigger.classList.remove('active');
    dropdownTriggerText.classList.remove('active');

    initializeSearchInput();
    displayMovies(allMovies);
}

function displayMovies(movies) {
    const fragment = document.createDocumentFragment();
    dropdownContent.innerHTML = '';

    movies.forEach(movie => {
        fragment.appendChild(createMovieElement(movie));
    });

    dropdownContent.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    initializeEventListeners();
});