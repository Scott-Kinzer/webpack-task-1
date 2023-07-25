import { getFormElements } from "./helpers/getFormElements.js";

export const createNoteBtn = (e, clearActiveEditNoteId) => {
    const noteForm = document.querySelector('.note-form');

    noteForm.classList.toggle("hide") ? e.target.textContent = 
    'Create note' : e.target.textContent = 'Hide form';

    const {noteName, noteContent, noteCategory} = getFormElements();

    noteName.value = "";
    noteContent.value = "";
    noteCategory.value = "task";
    clearActiveEditNoteId();
}
