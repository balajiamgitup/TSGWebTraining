// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');
let db;
const openRequest = window.indexedDB.open('notes_db', 1);
// error handler signifies that the database didn't open successfully
openRequest.addEventListener('error', () => console.error('Database failed to open'));

// success handler signifies that the database opened successfully
openRequest.addEventListener('success', () => {
  console.log('Database opened successfully');

  // Store the opened database object in the db variable. This is used a lot below
  db = openRequest.result;

  // Run the displayData() function to display the notes already in the IDB
  displayData();
});
// Set up the database tables if this has not already been done
openRequest.addEventListener('upgradeneeded', (e) => {

    // Grab a reference to the opened database
    db = e.target.result;
  
    // Create an objectStore to store our notes in (basically like a single table)
    // including a auto-incrementing key
    const objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });
  
    // Define what data items the objectStore will contain
    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });
  
    console.log('Database setup complete');
  });