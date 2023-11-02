import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, updateDoc, addDoc, setDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})


export class DialogAddUserComponent {

  firestore: Firestore = inject(Firestore);


  user: User = new User();
  birthDate: string = new Date().toLocaleString('en-US');
  loading: boolean = false;

  
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {  }

  

  async saveUser() {
    this.loading = true;
    this.changeDateForm();

    const aCollection = collection(this.firestore, 'users');
    const usersDocRef = doc(aCollection);
    await setDoc(usersDocRef, this.user.toJSON());
    
    this.loading = false;
    this.dialogRef.close();
  }

  

  changeDateForm() {
    this.user.birthDate = new Date(this.birthDate).toLocaleDateString('en-US');
  }

}
