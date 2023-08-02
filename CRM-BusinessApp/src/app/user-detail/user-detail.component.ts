import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userID: any = '';
  user:User = new User;

  constructor(private route: ActivatedRoute, private firestore: Firestore) { }


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
}
