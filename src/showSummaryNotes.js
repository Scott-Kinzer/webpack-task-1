import { filterNotes } from "./helpers/filterNotes.js";
import { noteCategory } from "./data.js";

export const showSummaryNotes = (notes) => {
    const categoryNotes = filterNotes(notes);

    const summaryInner = document.querySelector('.summary-inner');
    summaryInner.innerHTML = "";


    for (let note in categoryNotes) {
        const summaryItemEl = document.createElement('div');
        summaryItemEl.className = "summary-note-item";

        const caregoryItemEl = document.createElement('div');
        caregoryItemEl.className = "summary-note-item-category";

        const summaryImg = document.createElement('img');
        summaryImg.src = noteCategory[note].imagePath;

        const summaryImgText = document.createElement('p');
        summaryImgText.textContent = noteCategory[note].name;

        caregoryItemEl.appendChild(summaryImg);
        caregoryItemEl.appendChild(summaryImgText);

        summaryItemEl.appendChild(caregoryItemEl);


        // Active
        const summaryNoteActiveEl = document.createElement('div');
        summaryNoteActiveEl.className = "note-active";

        const summaryNoteActiveElText = document.createElement('p');
        summaryNoteActiveElText.textContent = categoryNotes[note].active ? categoryNotes[note].active : 0;

        summaryNoteActiveEl.appendChild(summaryNoteActiveElText);

        summaryItemEl.appendChild(summaryNoteActiveEl);


        // Archive 
        const summaryNoteArchiveEl = document.createElement('div');
        summaryNoteArchiveEl.className = "note-archive";

        const summaryNoteArchiveElText = document.createElement('p');
        summaryNoteArchiveElText.textContent = categoryNotes[note].archive ? categoryNotes[note].archive : 0;

        summaryNoteArchiveEl.appendChild(summaryNoteArchiveElText);
        summaryItemEl.appendChild(summaryNoteArchiveEl);


        summaryInner.appendChild(summaryItemEl);
    }
}