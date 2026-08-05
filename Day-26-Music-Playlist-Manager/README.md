# Music Playlist Manager

##  Project Overview

The **Music Playlist Manager** is a JavaScript web application that allows users to create and manage a personal playlist.

Users can add songs with their artists, search through the playlist in real time, and remove songs whenever they want. The project demonstrates how JavaScript can dynamically update a webpage without reloading it.

This project was built as **Day 26** of my **30 Days JavaScript Bootcamp**.

---

##  Features

*  Add new songs
*  Save the artist's name
*  Automatically record the date each song was added
*  Display all songs in a playlist
*  Search songs instantly as the user types
*  Remove songs from the playlist
*  Clear input fields after adding a song

---

##  Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

##  JavaScript Concepts Practiced

During this project, I practiced and strengthened my understanding of:

* Arrays
* Objects
* Functions
* DOM Manipulation
* Event Handling
* Array `push()`
* Array `splice()`
* `for` loops
* Template Literals
* String `includes()`
* String `toLowerCase()`
* Conditional Statements
* Dynamic Rendering

---

##  Project Structure

```
Day-26-Music-Playlist-Manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

##  How the Application Works

### Adding Songs

1. The user enters a song title.
2. The user enters the artist's name.
3. When the **Add Song** button is clicked:

   * The inputs are validated.
   * A new song object is created.
   * The song is stored inside the playlist array.
   * The input fields are cleared.
   * The playlist is updated automatically.

---

### Displaying Songs

Each song displays:

* Song Title
* Artist
* Status
* Date Added
* Remove Button

The playlist is generated dynamically using JavaScript.

---

### Searching Songs

The application includes a live search feature.

As the user types into the search box:

* JavaScript loops through every song.
* It checks if the title contains the search text.
* Matching songs are displayed immediately.
* Searching ignores uppercase and lowercase letters by using `toLowerCase()`.

---

### Removing Songs

Each song has a **Remove** button.

When clicked:

* The selected song is removed from the array using `splice()`.
* The playlist is updated immediately.

---

## Challenges Faced

While building this project, I learned:

* Why it is better to separate tasks into different functions.
* How to display data stored inside an array of objects.
* How JavaScript updates the webpage without refreshing it.
* How real-time search works using `includes()` and `toLowerCase()`.
* How to remove items from an array and immediately update the interface.

---

##  What I Learned

This project helped me understand how many modern web applications work behind the scenes.

I learned how to:

* Store multiple pieces of related information inside objects.
* Keep those objects inside an array.
* Dynamically generate HTML using JavaScript.
* Search through data efficiently.
* Build interactive user interfaces with DOM manipulation.
* Organize code by giving each function a single responsibility.

---

## Future Improvements

Some features I plan to add in the future include:

*  Favorite Songs
*  Edit Song Information
* Search by Artist
*  Music Categories
*  Sort Songs Alphabetically
*  Save Playlist with Local Storage
*  Audio Preview
*  Dark Mode

---

## Learning Outcome

After completing this project, I can confidently:

* Create and manage arrays of objects.
* Build reusable JavaScript functions.
* Manipulate the DOM dynamically.
* Search and filter data.
* Remove data from arrays.
* Update the user interface automatically after data changes.

---

##  Author

**Aishat Bakare**

30 Days JavaScript Bootcamp

Day 26 – Music Playlist Manager
