/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
const templesElement = document.querySelector("#temples");
const templesList = [];
let data = null;


/* async displayTemples Function */
function displayTemples(temples) {
    
        temples.forEach((temple) => {
            const articleElement = document.createElement("article");
            
            const h3Element = document.createElement("h3");
            h3Element.textContent = temple.templeName;
            
            const imgElement = document.createElement("img");
            imgElement.src = temple.imageUrl;
            imgElement.alt = temple.location;

            articleElement.appendChild(h3Element);
            articleElement.appendChild(imgElement);

            templesElement.appendChild(articleElement);
            console.log(temple);
        });
    };
    



/* async getTemples Function using fetch()*/

async function getTemples() {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        displayTemples(data);
    }
}


/* reset Function */
function reset() {
    var templesElement = document.getElementById("templesElement");
    if (templesElement) {
        while (templesElement.firstChild) {
            templesElement.removeChild(templesElement.firstChild);
        }
    } else {
        console.error("Element with ID 'templesElement' not found.");
    }  
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes('utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            let notutahTemples = temples.filter(temple => temple.location.toLowerCase().unincludes('utah'));
            displayTemples(notutahTemples);
            break;
    }
}

getTemples();

/* Event Listener */
