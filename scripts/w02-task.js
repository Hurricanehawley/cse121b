/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Richard Hawley';
// Code to obtain the current year:
const currentYear = new Date().getFullYear();
//The variable that will hold the file path location and file name of the image in images folder.
let profilePicture = 'images/rsz_javascript_page_picture.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
/* Step 4 - Adding Content */
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'This is ${fullName}. He is a BYU-Idaho Pathway Worldwide Student.');




/* Step 5 - Array */
let favoritefoods = ['Tacos', 'Jalepeno Burgers', 'Shrimp', 'Scones', 'Mutton', 'Cobbler'];

foodElement.innerHTML = favoritefoods;
let newfood = 'elk jerkey';
favoritefoods.push(newfood);
foodElement.innerHTML += `<br>${favoritefoods}`;
favoritefoods.shift();
foodElement.innerHTML += `<br>${favoritefoods}`;
favoritefoods.splice(5, 1);
foodElement.innerHTML += `<br>${favoritefoods}`;

// document.getElementById('food').innerHTML = favoritefoods;





