export interface Note {
  id: string;
  noteTitle: string;
  noteContent: string;
  createdAt: Date;
  updatedAt?: Date;
}
