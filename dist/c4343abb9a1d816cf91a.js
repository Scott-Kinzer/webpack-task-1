function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { notesData, noteCategory } from './data.js';
import { formatDate } from './helpers/formatDate.js';
import { v4 as uuidv4 } from 'uuid';
import { extractDates } from './helpers/extractDate.js';
import { showSummaryNotes } from './showSummaryNotes.js';
import { getFormElements } from './helpers/getFormElements.js';
import { createNoteBtn } from './handlers.js';
import "./style.scss";
var buttonNoteCreateEl = document.querySelector('.button-note-create');
var headerArchiveIcon = document.querySelector('.archive-icon');
var notesCopy = notesData;
var isArchiveView = false;
var activeEditNoteId = "";
var clearActiveEditNoteId = function clearActiveEditNoteId() {
  activeEditNoteId = "";
};
headerArchiveIcon.addEventListener('click', function () {
  isArchiveView = !isArchiveView;
  headerArchiveIcon.classList.toggle('isActive');
  showNotes();
});
buttonNoteCreateEl.addEventListener('click', function (e) {
  return createNoteBtn(e, clearActiveEditNoteId);
});
var formEl = document.querySelector('.note-form');
formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  var _getFormElements = getFormElements(),
    noteName = _getFormElements.noteName,
    noteContent = _getFormElements.noteContent,
    noteCategory = _getFormElements.noteCategory;
  if (!noteName.value || !noteCategory.value || !noteCategory.value) return;
  var newNote = {
    name: noteName.value,
    content: noteContent.value,
    category: noteCategory.value,
    created: new Date(),
    isArchive: false,
    id: uuidv4()
  };
  if (activeEditNoteId) {
    notesCopy = notesCopy.map(function (noteItemObject) {
      if (activeEditNoteId === noteItemObject.id) {
        return _objectSpread(_objectSpread({}, noteItemObject), newNote);
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
  var noteForm = document.querySelector('.note-form');
  noteForm.classList.toggle("hide") ? buttonNoteCreateEl.textContent = 'Create note' : buttonNoteCreateEl.textContent = 'Hide form';
});
var showNotes = function showNotes() {
  var notesClass = document.querySelector('.notes');
  notesClass.innerHTML = "";
  showSummaryNotes(notesCopy);
  var innerNotesCopy = notesCopy.filter(function (item) {
    if (isArchiveView) {
      return item.isArchive;
    } else {
      return !item.isArchive;
    }
  });
  innerNotesCopy.forEach(function (noteItem) {
    var name = noteItem.name,
      created = noteItem.created,
      content = noteItem.content,
      category = noteItem.category,
      id = noteItem.id;
    var noteItemEl = document.createElement('div');
    noteItemEl.className = "note-item";

    // Note Name
    var noteName = document.createElement('div');
    noteName.className = "note-name";
    var noteImg = document.createElement('img');
    noteImg.src = noteCategory[category].imagePath;
    var noteNameText = document.createElement('p');
    noteNameText.textContent = name;
    noteName.appendChild(noteImg);
    noteName.appendChild(noteNameText);
    noteItemEl.appendChild(noteName);

    // Note Created
    var noteCreatedEl = document.createElement('div');
    noteCreatedEl.className = "note-created";
    var noteCreatedText = document.createElement('p');
    noteCreatedText.textContent = formatDate(created);
    noteCreatedEl.appendChild(noteCreatedText);
    noteItemEl.appendChild(noteCreatedEl);

    // Note Category
    var noteCategoryEl = document.createElement('div');
    noteCategoryEl.className = "note-category";
    var noteCategoryText = document.createElement('p');
    noteCategoryText.textContent = noteCategory[category].name;
    noteCategoryEl.appendChild(noteCategoryText);
    noteItemEl.appendChild(noteCategoryEl);

    // Note Content
    var noteContentEl = document.createElement('div');
    noteContentEl.className = "note-content";
    var noteContentText = document.createElement('p');
    noteContentText.textContent = content;
    noteContentEl.appendChild(noteContentText);
    noteItemEl.appendChild(noteContentEl);

    // Note Content
    var noteDateEl = document.createElement('div');
    noteDateEl.className = "note-date";
    var noteDateText = document.createElement('p');
    noteDateText.textContent = extractDates(content);
    noteDateEl.appendChild(noteDateText);
    noteItemEl.appendChild(noteDateEl);

    // Note Icons
    var noteIconsEl = document.createElement('div');
    noteIconsEl.className = "note-icons";
    var noteImgEdit = document.createElement('img');
    noteImgEdit.src = "./images/icons/edit.svg";
    var noteImgArchive = document.createElement('img');
    noteImgArchive.src = "./images/icons/archive.svg";
    var noteImgTrash = document.createElement('img');
    noteImgTrash.src = "./images/icons/trash.svg";
    noteImgEdit.addEventListener('click', function () {
      var noteForm = document.querySelector('.note-form');
      if (noteForm.classList.contains("hide")) {
        noteForm.classList.toggle("hide");
        buttonNoteCreateEl.textContent = 'Hide form';
      }
      var _getFormElements2 = getFormElements(),
        noteName = _getFormElements2.noteName,
        noteContent = _getFormElements2.noteContent,
        noteCategory = _getFormElements2.noteCategory;
      activeEditNoteId = id;
      noteName.value = name;
      noteContent.value = content;
      noteCategory.value = category;
    });
    noteImgTrash.addEventListener('click', function () {
      var noteForm = document.querySelector('.note-form');
      notesCopy = notesCopy.filter(function (noteItemInner) {
        return noteItemInner.id !== id;
      });
      if (!noteForm.classList.contains("hide")) {
        noteForm.classList.toggle("hide");
        buttonNoteCreateEl.textContent = 'Create note';
      }
      showNotes();
    });
    noteImgArchive.addEventListener('click', function () {
      notesCopy = notesCopy.map(function (noteItemInner) {
        if (noteItemInner.id === id) {
          return _objectSpread(_objectSpread({}, noteItemInner), {}, {
            isArchive: !noteItemInner.isArchive
          });
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
  });
};
showNotes();