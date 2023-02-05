import { Injectable } from '@angular/core';
import { Note } from '../models/note.models';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;
  private JsonNotesPath = 'assets/notes.json';

  constructor(private httpClient: HttpClient) {
    this.storage = localStorage;
    const notes = this.getNotes();
    if (notes.length === 0) {
      this.loadMockNotes();
    }
  }

  saveNotes(notes: Array<Note>) {
    this.storage.setItem('notes', JSON.stringify(notes));
  }

  getNotes(): Array<Note> {
    return JSON.parse(this.storage.getItem('notes') ?? '[]');
  }

  private loadMockNotes() {
    this.httpClient
      .get<Array<Note>>(this.JsonNotesPath)
      .pipe(filter((notes) => !!notes))
      // .subscribe((notes) => this.notes$.next(notes))
      .subscribe({
        next: (notes) => this.saveNotes(notes),
        error: (err) => console.error('Error retrieving notes: ', err.message),
      });
  }
}
