import { Injectable } from '@angular/core';
import { Note } from '../models/note.models';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes$ = new BehaviorSubject<Array<Note>>([]);

  constructor(private localStorageService: LocalStorageService) {
    this.loadNotes();
  }

  createNote$(note: Note) {
    const currentNotes = this.notes$.getValue();
    currentNotes.push(note);
    this.localStorageService.saveNotes(currentNotes);
    this.notes$.next(currentNotes);
  }

  getAllNotes$() {
    return this.notes$;
  }

  getNoteById$(noteId: string) {
    return this.notes$.pipe(
      switchMap((notes) => of(notes.find((note) => note.id === noteId)))
    );
  }

  updateNote$(noteId: string, noteToUpdate: Note) {
    let currentNotes = this.notes$.getValue();
    currentNotes = currentNotes.map((note) =>
      note.id === noteId ? { ...note, ...noteToUpdate } : note
    );
    this.localStorageService.saveNotes(currentNotes);
    this.notes$.next(currentNotes);
  }

  deleteNote$(noteId: string) {
    const newNotes = this.notes$
      .getValue()
      .filter((note) => note.id !== noteId);
    this.localStorageService.saveNotes(newNotes);
    this.notes$.next(newNotes);
  }

  searchNotes$(noteTitle: string) {
    if (noteTitle.length === 0) {
      this.notes$.next(this.localStorageService.getNotes());
      return;
    }
    const notesFound = this.localStorageService
      .getNotes()
      .filter((note) => note.noteTitle.toLowerCase().includes(noteTitle));
    this.notes$.next(notesFound);
  }

  private loadNotes() {
    this.notes$.next(this.localStorageService.getNotes());
  }
}
