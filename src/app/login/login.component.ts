import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { GlobalService } from '../services/global/global.service';
import { User } from '../user';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email:string;
  pass:string;
  loginWarn:boolean = false;
  emailWarn:boolean = false;

  constructor(public router : Router, private route : ActivatedRoute,
    public global : GlobalService, public firestore: FirestoreService) {
      this.email = "";
      this.pass = "";
    }


  ngOnInit(): void {
    //this.router.navigate(['profile'])
  }

  hashIt(password:string){
    const hashDigest = SHA256(3 + password);
    return hashDigest.toString();
  }

  login(){

    console.log(this.email, this.pass);
    
    let user = new User();
    user.email = this.email;
    user.password = this.hashIt(this.pass);

    let expresion = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    let usr = user.email.match(expresion);
    if(usr != null && usr[0] == usr.input){
        this.firestore.login(user.email, user.password).subscribe(data =>{
          if(data.length <= 0){
            this.emailWarn = false;
            this.loginWarn = true;
          }
          else{
            this.global.do_login(data[0]);
            this.router.navigate(['profile']);
          }
          
        });
    }
    else{
      this.loginWarn = false;
      this.emailWarn = true;
    }
  }
}
