const url = "https://jsonplaceholder.org/users";
const userlist = document.querySelector("ul");
let data = null;
async function getUsers(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    //console.log(data);
    displayUsers(data);
  }
}
function displayUsers(data) {
  const userlist = document.querySelector("ul");
  data.forEach(user => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.firstname} | ${user.lastname} | ${user.birthdate}`;
    userlist.appendChild(listeItem);
  });
}
function filterData() {
  let e = data.filter(user=>user.birthDate.includes("198"));
  displayUsers(e);
}

document.querySelector("button").addEventListener("click", filterData);
getUsers(url);