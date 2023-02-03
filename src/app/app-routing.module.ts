import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesComponent },
  { path: 'create', component: CreateNoteComponent },
  { path: 'update/:id', component: UpdateNoteComponent },
  { path: '**', component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
