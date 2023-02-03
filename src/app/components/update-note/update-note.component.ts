import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.models';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss'],
})
export class UpdateNoteComponent implements OnInit {
  note$!: Observable<Note | undefined>;

  private noteId!: string;

  constructor(
    private noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.note$ = this.route.paramMap.pipe(
      switchMap((params: any) => {
        this.noteId = params.get('id');
        return this.noteService.getNoteById$(this.noteId);
      })
    );
  }

  updateNote() {
    
  }

  cancelEdition() {}
}
