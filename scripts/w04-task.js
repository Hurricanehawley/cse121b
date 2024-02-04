/* WEEK/LESSON 4 - Programming Tasks */
/* Profile Object  */
/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Richard Hawley",
    photo: {
        src: "images/rsz_javascript_page_picture.jpg",
        alt: "My Black Leather Jacket"
    },
    favoriteFoods: [`Pizza`, `Tacos`, `Brownies`, `Shrimp`],
    hobbies: [`Dirbikes`, `Snowboarding`, `Mountain Bikes`],
    placesLived: [`Central Valley`, `Richfield`, `Syracuse`]
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = `My name is <em>${myProfile.name}</em>`;
/* Photo with attributes */
document.querySelector("#photo").innerHTML = `<img src="${myProfile.photo.src}" alt="${myProfile.photo.alt}"`

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#placesLived").appendChild(li);
});

