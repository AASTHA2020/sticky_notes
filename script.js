// Get the container where you want to display the greeting
const greetingContainer = document.getElementById("greeting-container");

// Create a new paragraph element for the greeting message
const greetingMessage = document.createElement("p");
greetingMessage.textContent = "Great job! Your note has been added. Keep up the good work!📝";
greetingMessage.className = "greeting"; // Optional: Add a class for styling

// Append the greeting message to the container
greetingContainer.appendChild(greetingMessage);

// Get the reference to the button for adding notes
const addBtn = document.getElementById("add-note-btn");

// Add event listener to the add note button
addBtn.addEventListener("click", () => {
    // Get references to input fields and notes container
    const input = document.getElementById("input");
    const color = document.getElementById("color");
    const noteContainer = document.getElementById("notes-container");

    // Create a new note element
    const note = document.createElement("div");
    note.className = "note"; // Set class name for styling
    noteContainer.appendChild(note); // Append the note to the notes container
    note.style.backgroundColor = color.value; // Set background color for the note

    // Create textarea for note content
    const noteText = document.createElement("textarea");
    noteText.rows = 12; // Set the number of rows
    noteText.value = input.value; // Set the value from input field
    note.appendChild(noteText); // Append the textarea to the note

    // Create delete icon for the note
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash"; // Set class name for styling
    note.appendChild(deleteIcon); // Append the delete icon to the note

    // Create edit icon for the note
    const editIcon = document.createElement("i");
    editIcon.innerHTML = '<i class="fa-solid fa-pen edit"></i>'; // Set inner HTML for the edit icon
    note.appendChild(editIcon); // Append the edit icon to the note


    
    
// Event listener for the edit icon
editIcon.addEventListener('click', () => {
    // Toggle edit mode
    noteText.disabled = !noteText.disabled;

    // Focus on the textarea if in edit mode
    if (!noteText.disabled) {
        noteText.focus();
    }
});

    // Event listener for the delete icon
    deleteIcon.addEventListener("click", () => {
        note.remove(); // Remove the note from the DOM
    });

    // Clear input field after adding note
    input.value = "";
});
