import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, docData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userID: any = '';
  user: User = new User;

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userID = paramMap.get('id');
      console.log('Got ID', this.userID);
      this.getUser();
    })
  }


  getUser() {
    const aCollection = collection(this.firestore, 'users');
    const usersDocRef = doc(aCollection, this.userID);
    docData(usersDocRef).subscribe((user: any) => {
      this.user = new User(user);
      console.log('this is the useruser:', this.user)
    })
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userID;
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userID;
  }
}
