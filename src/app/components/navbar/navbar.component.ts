import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private noteService: NotesService) {}

  searchNote(event: any) {
    this.noteService.searchNotes$(event.target.value);
  }
}
