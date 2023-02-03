import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { v4 as uuid4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent {
  noteFormControl = new FormGroup({
    noteTitle: new FormControl(''),
    noteContent: new FormControl(''),
  });

  constructor(private noteService: NotesService, private router: Router) {}

  saveNote() {
    this.noteService.createNote({
      id: uuid4(),
      createdAt: new Date(),
      noteTitle: this.noteFormControl.value.noteTitle || '',
      noteContent: this.noteFormControl.value.noteContent || '',
    });
    this.noteFormControl.reset();
    this.router.navigate(['/notes']);
  }

  cancelEdition() {
    this.noteFormControl.reset();
    this.router.navigate(['/notes']);
  }
}
