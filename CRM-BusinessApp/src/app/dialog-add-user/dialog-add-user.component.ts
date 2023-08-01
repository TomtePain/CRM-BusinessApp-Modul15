import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/models/user.class';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, updateDoc, addDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})


export class DialogAddUserComponent {

  firestore: Firestore = inject(Firestore);
  items$: Observable<any> | undefined;

  
  constructor() {
    const itemCollection = collection(this.firestore, 'users');
    this.items$ = collectionData(itemCollection);
  }

  user: User = new User();
  birthDate: string = new Date().toLocaleString('en-US');

  async saveUser() {
    this.changeDateForm();
    console.log('das ist unser neuer user:', this.user)

    const aCollection = collection(this.firestore, 'users');
    const usersDocRef = doc(aCollection);
    await setDoc(usersDocRef, this.user.toJSON());
  }

  changeDateForm() {
    this.user.birthDate = new Date(this.birthDate).toLocaleDateString('en-US');
  }

}
