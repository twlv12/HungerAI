const form = document.querySelector('form');

// Check if username is already stored in local storage
const username = localStorage.getItem('username');
if (username) {
    window.location.href = 'game.html';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value;

    // Store the username in local storage
    localStorage.setItem('username', username);

    // Redirect to the main game page
    window.location.href = 'game.html';
});