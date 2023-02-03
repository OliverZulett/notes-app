import { Injectable } from '@angular/core';
import { Note } from '../models/note.models';
import { BehaviorSubject, of } from 'rxjs';

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

  private notes$ = new BehaviorSubject<Array<Note>>([]);

  constructor() {
    this.notes$.next(this.notes);
  }

  createNote$(note: Note) {
    this.notes.push(note);
    this.notes$.next(this.notes);
  }

  createNote(note: Note) {
    this.notes.push(note);
  }

  getAllNotes$() {
    return this.notes$;
  }

  getAllNotes() {
    return this.notes;
  }

  getNoteById$(noteId: string) {
    return of(this.notes.find((note) => note.id === noteId));
  }

  getNoteById(noteId: string) {
    return this.notes.find((note) => note.id === noteId);
  }

  updateNote$(noteId: string, noteToUpdate: Note) {
    this.notes = this.notes.map((note) =>
      note.id === noteId ? { ...note, ...noteToUpdate } : note
    );
    this.notes$.next(this.notes);
  }

  updateNote(noteId: string, noteToUpdate: Note) {
    this.notes = this.notes.map((note) =>
      note.id === noteId ? { ...note, ...noteToUpdate } : note
    );
    return this.notes;
  }

  deleteNote$(noteId: string) {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    this.notes$.next(this.notes);
  }

  deleteNote(noteId: string) {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    return this.notes;
  }
}
