import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from 'src/app/models/note.models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Array<Note> = [];

  notes$!: Observable<Array<Note>>;

  constructor(private noteService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.notes$ = this.noteService.getAllNotes$();
  }

  goToCreateNote() {
    this.router.navigate(['/create']);
  }
}
