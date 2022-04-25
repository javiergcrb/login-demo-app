import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private login:boolean;
  private usr:User;

  constructor(private router: Router) {
    this.login = false;
    this.usr = new User();
   }

  getLogin(){
    return this.login;
  }

  getUser(){
    return this.usr;
  }

  do_login(user:User){
    this.login = true;
    this.usr = user;
  }

  do_logout(){
    this.login = false;
    this.usr = new User();
    this.router.navigate(['login']);
  }
}
