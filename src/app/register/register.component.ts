import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { GlobalService } from '../services/global/global.service';
import { User } from '../user';
import { UserCreationConfirmationComponent } from '../user-creation-confirmation/user-creation-confirmation.component';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user:User;
  public pass:string;
  passWarn:boolean = false;
  emailWarn:boolean = false;

  constructor(public router : Router, private route : ActivatedRoute,
    public global : GlobalService, public dialog: MatDialog, public firestore : FirestoreService) {
      this.user = new User();
      this.user.email = "";
      this.pass = "";
     }

  ngOnInit(): void {
  }

  hashIt(password:string){
    const hashDigest = SHA256(3 + password);
    return hashDigest.toString();
  }

  register(){
    let expresion = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    let usr = this.user.email.match(expresion);
    console.log(usr, this.user);
    if(usr == null || usr[0] != usr.input){
      this.passWarn = false;
      this.emailWarn = true;
    }
    else if(this.user.password != this.pass){
      this.emailWarn = false;
      this.passWarn = true;
    }
    else{
      this.user.password = this.hashIt(this.pass);
      this.firestore.create_user(this.user);
      let dialogRef = this.dialog.open(UserCreationConfirmationComponent);
      this.router.navigate(["login"]);
    }

  }
}
