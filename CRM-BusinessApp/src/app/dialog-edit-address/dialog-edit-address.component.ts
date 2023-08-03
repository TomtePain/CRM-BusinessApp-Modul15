import { Component, OnInit } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user!: User;
  userId!: string;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }

  ngOnInit(): void {

  }

  saveEditUserAddress() {
    this.loading = true;
    const aCollection = doc(this.firestore, 'users', this.userId);
    updateDoc(aCollection, this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });

  }

}
