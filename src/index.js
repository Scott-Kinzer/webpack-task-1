import { notesData, noteCategory} from './data.js';
import { formatDate } from './helpers/formatDate.js';
import { v4 as uuidv4 } from 'uuid';
import { extractDates } from './helpers/extractDate.js';
import { showSummaryNotes } from './showSummaryNotes.js';
import { getFormElements } from './helpers/getFormElements.js';
import { createNoteBtn } from './handlers.js';
import "./style.scss";
import trashImage from './images/icons/trash.svg';
import editImage from './images/icons/edit.svg';
import archiveImage from './images/icons/archive.svg';

const buttonNoteCreateEl = document.querySelector('.button-note-create');
const headerArchiveIcon = document.querySelector('.archive-icon');

let notesCopy = notesData;
let isArchiveView = false;
let activeEditNoteId = "";

const clearActiveEditNoteId = () => {
    activeEditNoteId = "";
}

headerArchiveIcon.addEventListener('click', () => {
    isArchiveView = !isArchiveView;

    headerArchiveIcon.classList.toggle('isActive');
    showNotes();
})

buttonNoteCreateEl.addEventListener('click', (e) => createNoteBtn(e, clearActiveEditNoteId));

const formEl = document.querySelector('.note-form');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const {noteName, noteContent, noteCategory} = getFormElements();

    if (!noteName.value || !noteCategory.value || !noteCategory.value) return;

    const newNote = {
        name: noteName.value,
        content: noteContent.value,
        category: noteCategory.value,
        created: new Date(),
        isArchive: false,
        id: uuidv4()
    }

    if (activeEditNoteId) {
        notesCopy = notesCopy.map((noteItemObject) => {
            if (activeEditNoteId === noteItemObject.id) {
                return {
                    ...noteItemObject,
                    ...newNote
                }
            }

            return noteItemObject;
        });
    } else {
        notesCopy.push(newNote);
    }

    showNotes();

    noteName.value = "";
    noteContent.value = "";
    noteCategory.value = "task";
    activeEditNoteId = "";

    const noteForm = document.querySelector('.note-form');

    noteForm.classList.toggle("hide") ? buttonNoteCreateEl.textContent = 
    'Create note' : buttonNoteCreateEl.textContent = 'Hide form';
});


const showNotes = () => {
    const notesClass = document.querySelector('.notes');

    notesClass.innerHTML = "";

    showSummaryNotes(notesCopy);

    const innerNotesCopy = notesCopy.filter((item) => {
        if (isArchiveView) {
            return item.isArchive;
        } else {
            return !item.isArchive;
        }
    })

    innerNotesCopy.forEach((noteItem) => {
        const {name, created, content, category, id} = noteItem;

        const noteItemEl = document.createElement('div');
        noteItemEl.className = "note-item";


        // Note Name
        const noteName = document.createElement('div');
        noteName.className = "note-name";

        const noteImg = document.createElement('img');
        noteImg.src = noteCategory[category].imagePath;

        const noteNameText = document.createElement('p');
        noteNameText.textContent = name;

        noteName.appendChild(noteImg);
        noteName.appendChild(noteNameText);

        noteItemEl.appendChild(noteName);


        // Note Created
        const noteCreatedEl = document.createElement('div');
        noteCreatedEl.className = "note-created";

        const noteCreatedText = document.createElement('p');
        noteCreatedText.textContent = formatDate(created);

        noteCreatedEl.appendChild(noteCreatedText);
        noteItemEl.appendChild(noteCreatedEl);

        // Note Category
        const noteCategoryEl = document.createElement('div');
        noteCategoryEl.className = "note-category";

        const noteCategoryText = document.createElement('p');
        noteCategoryText.textContent = noteCategory[category].name;

        noteCategoryEl.appendChild(noteCategoryText);
        noteItemEl.appendChild(noteCategoryEl);


        // Note Content
        const noteContentEl = document.createElement('div');
        noteContentEl.className = "note-content";

        const noteContentText = document.createElement('p');
        noteContentText.textContent = content;

        noteContentEl.appendChild(noteContentText);
    
        noteItemEl.appendChild(noteContentEl);
        

        // Note Content
        const noteDateEl = document.createElement('div');
        noteDateEl.className = "note-date";

        const noteDateText = document.createElement('p');
        noteDateText.textContent = extractDates(content);

        noteDateEl.appendChild(noteDateText);
    
        noteItemEl.appendChild(noteDateEl);


        // Note Icons
        const noteIconsEl = document.createElement('div');
        noteIconsEl.className = "note-icons";

        const noteImgEdit = document.createElement('img');
        noteImgEdit.src = editImage;

        const noteImgArchive = document.createElement('img');
        noteImgArchive.src = archiveImage;

        const noteImgTrash = document.createElement('img');
        noteImgTrash.src = trashImage;

        noteImgEdit.addEventListener('click', () => {
            const noteForm = document.querySelector('.note-form');

            if (noteForm.classList.contains("hide")) {
                noteForm.classList.toggle("hide");
                buttonNoteCreateEl.textContent = 'Hide form';
            }
            
            const {noteName, noteContent, noteCategory} = getFormElements();

            activeEditNoteId = id;

            noteName.value = name;
            noteContent.value = content;
            noteCategory.value = category;
        });

        noteImgTrash.addEventListener('click', () => {
            const noteForm = document.querySelector('.note-form');

            notesCopy = notesCopy.filter((noteItemInner) => (
                 noteItemInner.id !== id
            ));

            if (!noteForm.classList.contains("hide")) {
                noteForm.classList.toggle("hide");
                buttonNoteCreateEl.textContent = 'Create note';
            }

            showNotes();
        });

        noteImgArchive.addEventListener('click', () => {
            notesCopy = notesCopy.map((noteItemInner) => {
                if (noteItemInner.id === id)  {
                    return {...noteItemInner, isArchive: !noteItemInner.isArchive}
                }

                return noteItemInner;
            });

            showNotes();
        });

        if (!isArchiveView) {
            noteIconsEl.appendChild(noteImgEdit);
        }

        noteIconsEl.appendChild(noteImgArchive);

        if (!isArchiveView) {
            noteIconsEl.appendChild(noteImgTrash);
        }

        noteItemEl.appendChild(noteIconsEl);
        notesClass.appendChild(noteItemEl);

    })
};

showNotes();
