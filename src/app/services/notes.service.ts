import { Injectable } from '@angular/core';
import { Note } from '../models/note.models';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Array<Note> = [
    {
      id: '01',
      createdAt: new Date(),
      noteTitle: 'learn angular',
      noteContent: 'learn angular',
      updatedAt: new Date(),
    },
  ];

  constructor() {}

  createNote(note: Note) {
    this.notes.push(note);
  }

  getAllNotes() {
    return this.notes;
  }

  getNoteById(noteId: string) {
    return this.notes.find((note) => note.id === noteId);
  }

  updateNote(noteId: string, noteToUpdate: Note) {
    this.notes = this.notes.map((note) =>
      note.id === noteId ? { ...note, ...noteToUpdate } : note
    );
    return this.notes;
  }

  deleteNote(noteId: string) {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    return this.notes;
  }
}
