#  Notes Manager

##  Project Overview

Notes Manager is a JavaScript web application that allows users to create, view, edit, and delete personal notes.

This project focuses on completing **CRUD operations** by adding the ability to update existing data. Users can add notes, make changes to existing notes, remove notes, and keep their data saved even after refreshing the browser using Local Storage.

This project was built as **Day 28** of my **30 Days JavaScript Bootcamp**.

---

##  Features

*  Add new notes
*  Display saved notes
*  Edit existing notes
*  Delete notes
*  Save notes using Local Storage
*  Keep notes after refreshing the page
*  Automatically add note creation date
*  Update the interface dynamically

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
* Objects
* Functions
* DOM Manipulation
* Event Handling
* CRUD operations
* Array methods
* Object property updates
* Local Storage
* `localStorage.setItem()`
* `localStorage.getItem()`
* `JSON.stringify()`
* `JSON.parse()`
* Loops
* Template literals

---

##  Project Structure

```text
Day-28-Notes-Manager/

│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

#  How The Application Works

## Adding Notes

1. User enters a note title and content.
2. The information is stored inside a notes array.
3. A note object is created:

```javascript
{
    title: "",
    content: "",
    dateAdded: ""
}
```

4. The note is added to the page.
5. The notes array is saved in Local Storage.

---

## Displaying Notes

The application loops through the notes array and creates HTML elements dynamically using JavaScript.

Each note displays:

* Title
* Content
* Date added
* Edit button
* Delete button

---

#  Updating Notes (CRUD - Update)

This project introduced the **Update** operation.

When the user clicks Edit:

1. The selected note index is passed to the function.
2. The note object is accessed using:

```javascript
notes[i]
```

3. The existing properties are changed:

```javascript
notes[i].title = newTitle;
notes[i].content = newContent;
```

4. The updated data is saved again in Local Storage.
5. The page refreshes the displayed notes.

---

#  Deleting Notes

When the user clicks Delete:

The selected note is removed using:

```javascript
notes.splice(i, 1)
```

The updated array is saved again.

---

##  Local Storage

Local Storage allows the browser to remember information even after refreshing the page.

Before saving:

```javascript
[
 {
  title:"",
  content:""
 }
]
```

The array is converted into text using:

```javascript
JSON.stringify()
```

When retrieving the data, it is converted back into JavaScript using:

```javascript
JSON.parse()
```

---

##  Challenges Faced

While building this project, I learned:

* How CRUD operations work together.
* How to update objects inside an array.
* How to target a specific item using its index.
* How to remove items from arrays.
* How to keep application data using Local Storage.
* How functions communicate through parameters.

---

##  What I Learned

This project helped me understand how real applications manage data.

I learned that most applications follow CRUD:

### Create

Adding new information.

### Read

Displaying information.

### Update

Changing existing information.

### Delete

Removing information.

These concepts are used in:

* Notes applications
* Social media platforms
* Shopping websites
* Management dashboards

---

##  Future Improvements

Possible improvements:

* Replace prompt editing with an edit form
* Add note categories
* Add search functionality
* Add note colors
* Add timestamps
* Add a dark mode
* Add pin/favorite notes
* Add sorting options

---

##  Learning Outcome

After completing this project, I can:

* Build applications using CRUD operations
* Manipulate arrays of objects
* Update existing data
* Store and retrieve information from Local Storage
* Create dynamic user interfaces using JavaScript

---

##  Author

**Aishat Bakare**

30 Days JavaScript Bootcamp

Day 28 – Notes Manager
