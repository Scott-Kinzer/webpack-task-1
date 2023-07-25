export const getFormElements = () => {
    const noteName = document.getElementById('note-form-name');
    const noteContent = document.getElementById('note-form-content');
    const noteCategory = document.getElementById('note-form-category');

    return {
        noteName, noteContent, noteCategory
    }
}