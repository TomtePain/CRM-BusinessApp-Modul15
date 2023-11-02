import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collectionData, collection, doc, updateDoc, addDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  users$: Observable<any>;
  user: User = new User();
  allUsers: Array <any> = [];
 

  constructor(public dialog: MatDialog, private firestore: Firestore) { 
    const userCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(userCollection, {idField: 'id'});
  }


  ngOnInit(): void {
    

    this.users$.subscribe((changes: any) => {
      this.allUsers = changes;
      console.log('this are all users in Array:', this.allUsers)
    })

    
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

}
