import { Component, OnInit } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user!: User;
  userId!: string;
  loading: boolean = false;  
  birthDate: string = new Date().toLocaleString('en-US');

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) { }
  
  ngOnInit(): void {
    
  }

  saveEditUser() {
    this.loading = true;
    const aCollection = doc(this.firestore, 'users', this.userId);
    updateDoc(aCollection, this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

  

}
