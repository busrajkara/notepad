document.addEventListener("DOMContentLoaded", function () {
    const noteInput = document.getElementById("noteInput");
    const authorInput = document.getElementById("authorInput");
    const categoryInput = document.getElementById("categoryInput");
    const addNoteButton = document.getElementById("addNoteButton");
    const noteList = document.getElementById("noteList");
    const searchInput = document.getElementById("searchInput");

    addNoteButton.addEventListener("click", function () {
        const noteText = noteInput.value.trim();
        const authorText = authorInput.value.trim();
        const categoryText = categoryInput.value.trim();
        const date = new Date().toLocaleString();

        if (noteText && authorText && categoryText) {
            addNote(noteText, authorText, categoryText, date);
            noteInput.value = "";
            authorInput.value = "";
            categoryInput.value = "";
        } else {
            alert("Notu, yazar adını ve kategoriyi girmelisiniz!");
        }
    });

    function addNote(noteText, authorText, categoryText, date) {
        const noteItem = document.createElement("div");
        noteItem.classList.add("col-md-4");
        noteItem.innerHTML = `
            <div class="note-box">
                <strong>${categoryText}</strong> - ${noteText} <small>${date}</small>
                <p>Yazar: ${authorText}</p>
                <button class="delete-button" onclick="deleteNote(this)">🗑️</button>
            </div>
        `;
        noteList.appendChild(noteItem);
        saveNotes();
    }

    window.deleteNote = function (button) {
        const noteBox = button.parentElement;
        noteList.removeChild(noteBox.parentElement);
        saveNotes();
    };

    function saveNotes() {
        const notes = [];
        noteList.querySelectorAll(".note-box").forEach(noteBox => {
            const noteHTML = noteBox.parentElement.outerHTML;
            notes.push(noteHTML);
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(noteHTML => {
            const noteItem = document.createElement("div");
            noteItem.classList.add("col-md-4");
            noteItem.outerHTML = noteHTML;
            noteList.appendChild(noteItem);
        });
    }

    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        const notes = document.querySelectorAll(".note-box");

        notes.forEach(note => {
            const category = note.querySelector("strong").textContent.toLowerCase();
            note.parentElement.style.display = category.includes(filter) ? "block" : "none";
        });
    });

    loadNotes();
});

document.addEventListener("DOMContentLoaded", function () {
    const noteInput = document.getElementById("noteInput");
    const authorInput = document.getElementById("authorInput");
    const categoryInput = document.getElementById("categoryInput");
    const addNoteButton = document.getElementById("addNoteButton");
    const noteList = document.getElementById("noteList");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    addNoteButton.addEventListener("click", function () {
        const noteText = noteInput.value.trim();
        const authorText = authorInput.value.trim();
        const categoryText = categoryInput.value.trim();
        const date = new Date().toLocaleString();

        if (noteText && authorText && categoryText) {
            addNote(noteText, authorText, categoryText, date);
            noteInput.value = "";
            authorInput.value = "";
            categoryInput.value = "";
        } else {
            alert("Notu, yazar adını ve kategoriyi girmelisiniz!");
        }
    });

    function addNote(noteText, authorText, categoryText, date) {
        const noteItem = document.createElement("div");
        noteItem.classList.add("col-md-4");
        noteItem.innerHTML = `
            <div class="note-box">
                <strong>${categoryText}</strong> - ${noteText} <small>${date}</small>
                <p>Yazar: ${authorText}</p>
                <button class="delete-button" onclick="deleteNote(this)">🗑️</button>
            </div>
        `;
        noteList.appendChild(noteItem);
        saveNotes();
    }

    window.deleteNote = function (button) {
        const noteBox = button.parentElement;
        noteList.removeChild(noteBox.parentElement);
        saveNotes();
    };

    function saveNotes() {
        const notes = [];
        noteList.querySelectorAll(".note-box").forEach(noteBox => {
            const noteHTML = noteBox.parentElement.outerHTML;
            notes.push(noteHTML);
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(noteHTML => {
            const noteItem = document.createElement("div");
            noteItem.classList.add("col-md-4");
            noteItem.outerHTML = noteHTML;
            noteList.appendChild(noteItem);
        });
    }

    searchButton.addEventListener("click", function () {
        const filter = searchInput.value.toLowerCase();
        const notes = document.querySelectorAll(".note-box");

        notes.forEach(note => {
            const category = note.querySelector("strong").textContent.toLowerCase();
            note.parentElement.style.display = category.includes(filter) ? "block" : "none";
        });
    });

    loadNotes();
});
