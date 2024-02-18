document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote-text');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const jokeContainer = document.getElementById("dad-joke-container");
    const jokeText = document.getElementById("joke-text");
    const newJokeBtn = document.getElementById("new-joke-btn");

    // Fetch a random quote from an external API
    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            return data.content;
        } catch (error) {
            console.error('Error fetching quote:', error);
            return 'An error occurred while fetching the quote.';
        }
    };
    const fetchDadJoke = async () => {
        try {
            const response = await fetch('https://restcountries.com/');
            const data = await response.json();
            return data.content;
        } catch (error) {
            console.error('Error fetching joke:', error);
            return 'An error occurred while fetching this joke.';
        }
    };

    // Display the quote in the DOM
    const displayQuote = async () => {
        const quote = await fetchRandomQuote();
        quoteText.textContent = quote;
    };
    const displayJoke = async () => {
        const joke = await fetchDadJoke();
        jokeText.textContent = joke;
    };

    // Event listener for the "Get New Quote" button
    newQuoteBtn.addEventListener('click', displayQuote);
    //Event Listener for The Fantastic Joke Button
    newJokeBtn.addEventListener('click', displayJoke);

    // Initial quote display
    displayQuote();
    //Initial Joke Display
    displayJoke();
});
