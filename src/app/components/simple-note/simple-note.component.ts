import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note.models';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-simple-note',
  templateUrl: './simple-note.component.html',
  styleUrls: ['./simple-note.component.scss'],
})
export class SimpleNoteComponent {
  @Input() note!: Note;

  constructor(private noteService: NotesService) {}

  removeNote(noteId: string) {
    this.noteService.deleteNote$(noteId);
  }
}
