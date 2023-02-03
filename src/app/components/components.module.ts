import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { SimpleNoteComponent } from './simple-note/simple-note.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateNoteComponent } from './update-note/update-note.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotesComponent,
    SimpleNoteComponent,
    CreateNoteComponent,
    UpdateNoteComponent,
  ],
  exports: [NavbarComponent, FooterComponent, NotesComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class ComponentsModule {}
