import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { SimpleNoteComponent } from './simple-note/simple-note.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotesComponent,
    SimpleNoteComponent,
    CreateNoteComponent,
  ],
  exports: [NavbarComponent, FooterComponent, NotesComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ComponentsModule {}
