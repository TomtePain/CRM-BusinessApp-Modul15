import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate: string = new Date().toLocaleString('en-US');

  saveUser() {
    this.changeDateForm();
    console.log('das ist unser neuer user:', this.user)
  }

  changeDateForm() {
    this.user.birthDate = new Date(this.birthDate).toLocaleDateString('en-US');
  }

}
