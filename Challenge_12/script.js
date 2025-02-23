const quoteBox = document.querySelector('.quote-box');

const fetchQuote = async () => {
    const API_KEY = "API_KEY";
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        quoteBox.innerHTML = data[0].quote;
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
        quoteBox.innerHTML = "Impossible de charger la citation.";
    }
}

document.addEventListener('DOMContentLoaded', fetchQuote);
