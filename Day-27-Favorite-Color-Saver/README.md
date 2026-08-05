#  Favorite Color Saver

##  Project Overview

Favorite Color Saver is a JavaScript web application that allows users to save their favorite colors and keep them stored even after refreshing the browser.

Unlike previous projects where data disappeared after refreshing the page, this project introduces **Local Storage**, which allows the browser to remember and store information.

Users can enter colors, save them, and view their saved colors anytime they return to the application.

This project was built as **Day 27** of my **30 Days JavaScript Bootcamp**.

---

##  Features

*  Add favorite colors
*  Save colors using Browser Local Storage
*  Keep saved colors after refreshing the page
*  Display saved color names as text
*  Clear input fields after saving
* Update the page dynamically without refreshing

---

##  Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser Local Storage

---

##  JavaScript Concepts Practiced

During this project, I practiced:

* Arrays
* Functions
* DOM Manipulation
* Event Handling
* Local Storage
* `localStorage.setItem()`
* `localStorage.getItem()`
* `JSON.stringify()`
* `JSON.parse()`
* Creating HTML elements using JavaScript
* Updating the user interface dynamically
* Variable scope

---

##  Project Structure

```
Day-27-Favorite-Color-Saver/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

##  How The Application Works

### Saving Colors

1. The user enters a color name.
2. The value is stored inside an array.
3. The array is converted into a string using:

```javascript
JSON.stringify()
```

4. The converted data is saved in Local Storage.

---

### Retrieving Saved Colors

When the application loads:

1. JavaScript checks if there are saved colors.
2. Stored data is retrieved using:

```javascript
localStorage.getItem()
```

3. The stored string is converted back into an array using:

```javascript
JSON.parse()
```

4. The saved colors are displayed on the page.

---

##  Challenges Faced

During this project, I learned:

* Why normal JavaScript variables reset after refreshing a webpage.
* How Local Storage allows websites to remember user data.
* Why arrays need to be converted before storing them.
* The difference between stored text and JavaScript data types.
* How variable scope affects data access between functions.

---

##  What I Learned

This project helped me understand how websites store and remember information.

I learned that Local Storage can be used to save simple application data such as:

* User preferences
* Settings
* Lists
* Notes
* Small collections of data

I also learned how to connect stored data with the DOM to create interactive applications.

---

##  Future Improvements

Possible improvements for this project:

*  Add a delete color feature
*  Allow editing saved colors
*  Use a real color picker
*  Store color names with their HEX values
*  Add dark mode
*  Add animations
*  Improve mobile responsiveness

---

##  Learning Outcome

After completing this project, I can:

* Store data in the browser using Local Storage
* Retrieve stored data after refreshing
* Convert arrays into strings and back using JSON
* Create dynamic content using JavaScript
* Manage application data more effectively

---

##  Author

**Aishat Bakare**

30 Days JavaScript Bootcamp

Day 27 – Favorite Color Saver
