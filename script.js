// DOM grabbing
const fetchBtn = document.querySelector("#fetchBtn");
const fetchMultipleBtn = document.querySelector("#fetchMultipleBtn");
const searchInput = document.querySelector("#searchInput");
const themeToggle = document.querySelector("#themeToggle");
// userContainer will hold my users card
const userContainer = document.querySelector("#userContainer");
const loader = document.querySelector("#loader");

// make data storage
let users = [];

// addEventListener to the bottom and toggle

// i use arrow function because we need parentheses on fetch function but i don't want it to run immediately 
// (i want it to run after got trigger by event)
// also we can use arrow function without {} if it only has 1 statement
fetchBtn.addEventListener("click", () => fetchUsers(1));
fetchMultipleBtn.addEventListener("click", () => fetchUsers(5));
// i doesn't use () at the end of the functions because i want it to work after (got trigger by event) not immediately
searchInput.addEventListener("input", filterUsers);
themeToggle.addEventListener("change", toggleTheme);

function fetchUsers(count) {
    // reset the data storage
    users = [];
    // clear userContainer div
    userContainer.innerHTML = "";
    // show loader div
    // it is already div (but in the future code i will hide it by display = none;)
    // (so this make it visible again)
    loader.style.display = "block";
    // this is Axios syntax
    axios
    // i think the ${count} is like goe for which people (like people number 5 or others numbers)
    // sending request to the api
        .get(`https://randomuser.me/api/?results=${count}`)
        // response is axios returned promise from api
        // handle success
        .then((response) => {
            loader.style.display = "none";
            // it just accesses the property results of response.data, but you’re not storing it or using it anywhere.
            // results is the name of the object
            users = response.data.results;
            // look at the semi-colon i use it only after .then() not .get()
            //because .then() and .get() is being used together so only need 1 semi-colon after .then()
            renderUsers(users);
        })
        // handle error
        .catch((error) => {
            loader.style.display = "none";
            // for user to see error
            userContainer.innerHTML = "<p>Error fetching data</p>"
            // this will log as red text for developer
            console.error(error);
        });
    }

// making renderUsers funtion
function renderUsers(list) {
    userContainer.innerHTML = "";
    // first parameter is current value that it at
    list.forEach((user) => {
        let card = document.createElement("div");
        card.className = "user-card";
        // add the picture inside card(div)
        // medium is picture size
        // dob = date of birth
        card.innerHTML = `<img src ="${user.picture.medium}" alt="user-picture" />
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.dob.age}</p>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        <p>${user.location.city} ${user.location.country}</p>`;
        // add card into usercontainer(div)
        userContainer.appendChild(card);
    });
}

function filterUsers() {
    let term = searchInput.value.toLowerCase();
    // u is a current element
    // .filter() --> go through array and return what condition is true
    // this filtered is array because we use (users)
    let filtered = users.filter((u) => {
        let fullName = `${u.name.first} ${u.name.last}`.toLowerCase();
        // .includes() --> check if given value exist if yes return TRUE 
        return fullName.includes(term);
    });
    // use filtered array on renderUsers function
    renderUsers(filtered);
} 

function toggleTheme() {
    // classList is property it has built-in (.add, .remove, .toggle, .contain)(use to add class to the element, safer than using className)
    // .checked if it checked it return true if not false
    // .toggle if true add class --> dark, if false remove the class
    document.body.classList.toggle("dark", themeToggle.checked);
    console.log("This is toggleTheme being called");
}