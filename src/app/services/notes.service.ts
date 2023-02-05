import { Injectable } from '@angular/core';
import { Note } from '../models/note.models';
import { BehaviorSubject, catchError, of, filter, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private JsonNotesPath = 'assets/notes.json';

  private notes: Array<Note> = [
    {
      id: '01',
      createdAt: new Date(),
      noteTitle: 'learn angular',
      noteContent: 'learn angular',
      updatedAt: new Date(),
    },
    {
      id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
      noteTitle: "First Note",
      noteContent: "This is the content of the first note.",
      createdAt: new Date()
    },
  ];

  private notes$ = new BehaviorSubject<Array<Note>>([]);

  constructor(private httpClient: HttpClient) {
    this.loadNotes();
  }

  createNote$(note: Note) {
    const currentNotes = this.notes$.getValue();
    currentNotes.push(note);
    this.notes$.next(currentNotes);
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
    return this.notes$.pipe(
      switchMap(notes => of(notes.find((note) => note.id === noteId)))
    )
  }

  getNoteById(noteId: string) {
    return this.notes.find((note) => note.id === noteId);
  }

  updateNote$(noteId: string, noteToUpdate: Note) {
    let currentNotes = this.notes$.getValue();
    currentNotes = currentNotes.map((note) =>
      note.id === noteId ? { ...note, ...noteToUpdate } : note
    )
    this.notes$.next(currentNotes)
  }

  updateNote(noteId: string, noteToUpdate: Note) {
    this.notes = this.notes.map((note) =>
      note.id === noteId ? { ...note, ...noteToUpdate } : note
    );
    return this.notes;
  }

  deleteNote$(noteId: string) {
    const newNotes = this.notes$.getValue().filter((note) => note.id !== noteId);
    this.notes$.next(newNotes);
  }

  deleteNote(noteId: string) {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    return this.notes;
  }

  private loadNotes() {
    this.httpClient.get<Array<Note>>(this.JsonNotesPath)
    .pipe(
      filter(notes => !!notes)
    )
    // .subscribe((notes) => this.notes$.next(notes))
    .subscribe({
      next: notes => this.notes$.next(notes),  
      error: err => console.error('Error retrieving notes: ', err.message)
    })
  }
}
