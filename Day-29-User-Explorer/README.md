# Day 29 — API User Explorer

## Overview

API User Explorer is a small frontend application that demonstrates how to fetch, process, and display user data from an external REST API. The app includes a live search feature that filters users as you type.

## Key Concepts

- Fetching data from an external API using the Fetch API with async/await
- Handling asynchronous operations and errors with try/catch
- Parsing JSON responses and working with JavaScript objects and arrays
- Dynamic DOM rendering and template literals
- Client-side searching and filtering using Array.prototype.filter

## API

This project uses JSONPlaceholder (https://jsonplaceholder.typicode.com/users), a free fake REST API for development and testing.

Note: The original plan was to use the REST Countries API, but the chosen endpoint had been deprecated, so the project was adapted to use JSONPlaceholder while preserving the same learning objectives.

## Features

- Fetches and displays user data from the API
- Loading indicator while data is being retrieved
- Responsive user cards generated dynamically from API data
- Instant search that filters results as you type
- Message displayed when no results match the query

## Technologies & Techniques

- HTML, CSS, JavaScript
- Fetch API, async/await, try/catch
- DOM manipulation and template literals
- Array methods (filter, map)

## How it works (summary)

- The app requests user data from https://jsonplaceholder.typicode.com/users
- The response is converted to JSON and stored in a local array
- The array is rendered into user cards using template literals
- The search input filters the array in real time and updates the displayed cards

Example snippets:

Fetch request:

```javascript
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await res.json();
```

Search filter example:

```javascript
const results = users.filter(user =>
	user.name.toLowerCase().includes(query.toLowerCase())
);
```

## Project structure

Day-29-API-User-Explorer/
├── index.html
├── style.css
└── script.js

## Future improvements

- Add profile images and richer user details
- Support pagination for large datasets
- Implement more advanced search (by username, email, company)
- Improve UI/UX and accessibility

## Conclusion

This exercise reinforced working with external APIs, handling asynchronous JavaScript patterns, and dynamically rendering and filtering data on the client side. The skills applied here are directly transferable to real-world frontend projects.

Ready for Day 30: combine these concepts into a final project.