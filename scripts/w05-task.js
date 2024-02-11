/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
const templesElement = dcoument.querySelector("#temples");
const templesList = [];
let data = null;


/* async displayTemples Function */
async function displayTemples() {
    const displayTemples = (temples) => {
        temples.forEach((temple) => {
            const articleElement = document.createElement("article");
            
            const h3Element = document.createElement("h3");
            h3Element.textContent = temple.templeName;
            
            const imgElement = document.createElement("img");
            imgElement.src = temple.imageUrl;
            imgElement.alt = temple.location;

            articleElement.appendChild(h3Element);
            articleElement.appendChild(imgElement);

            templesElement.appendChild(article);
            console.log(temple);
        });
    };
    displayTemples(templesList);
    const templesList = document.getElementById("temples");
}


/* async getTemples Function using fetch()*/

async function getTemples() {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templesList(data);
    }
}


/* reset Function */
function reset() {
    
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples)
    }
}

getTemples();

/* Event Listener */
