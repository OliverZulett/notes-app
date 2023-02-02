import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { SimpleNoteComponent } from './simple-note/simple-note.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotesComponent,
    SimpleNoteComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
