
# Random User Generator — JavaScript + Axios Project

This project fetches random users from the **RandomUser API** and displays them as cards on the page.
You can filter users, switch themes, count genders, and calculate the average age using buttons and input fields.

---

## Features

### Fetch Random Users

* Fetch **1 user**
* Fetch **multiple users** (5 users by default)
* Loader animation while fetching

1. **Use the buttons** to fetch data:
   - 'Fetch 1 Random User' for a single profile.
   - 'Fetch 5 Random Users' for multiple profiles.
2. **Type in the search field** to filter on-the-fly by name.
3. **Toggle the theme switch** to see light/dark mode changes.
### Live Search

* Search users by **first name + last name**
* Case-insensitive search using `.includes()`

### Theme Toggle

* Light / Dark mode
* Uses `classList.toggle("dark", checkbox.checked)`

### Gender Count

* Counts male / female users from the loaded list

### Average Age

* Calculates average user age
* Uses `.reduce()` for summation
* Rounded with `.toFixed(1)`

### Error Handling

* Shows loader
* Shows error message in UI
* Logs error in console

---

## Technologies Used

* **HTML**
* **CSS**
* **Vanilla JavaScript**
* **Axios (HTTP requests)**

---

## Project Structure

```
/project
│
├── index.html      # UI structure
├── style.css       # Styling + dark mode
├── script.js       # All logic (fetching, filtering, events)
└── README.md       # Documentation
```

---

## Core JavaScript Concepts Used

### DOM Selection

```js
const fetchBtn = document.querySelector("#fetchBtn");
const userContainer = document.querySelector("#userContainer");
```

### Axios API Request

```js
axios.get(`https://randomuser.me/api/?results=${count}`)
```

### Rendering Users

```js
users.forEach(user => {
  // create cards dynamically
});
```

### Filtering

```js
fullName.includes(term);
```

### Reduce (Average Age)

```js
users.reduce((sum, user) => sum + user.dob.age, 0);
```

### Theme Toggle

```js
document.body.classList.toggle("dark", themeToggle.checked);
```

---

