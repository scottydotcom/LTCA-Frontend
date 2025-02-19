"use strict";
//users
fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
    //display friendly error messageDiv.innerText = "User friendly error message"
  });

//async  - notation that the function is going to: use await inside of it (i.e. call a function that returns a promise)
//await
async function loadUsers() {
  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
    //display friendly error messageDiv.innerText = "User friendly error message"
  }
}

// loadUsers();