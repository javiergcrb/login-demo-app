import { Injectable } from '@angular/core';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public login:boolean;
  public usr:User;

  constructor() {
    this.login = false;
    this.usr = new User();
    this.usr.id = '';
    this.usr.firstName = '';
    this.usr.email = '';
    this.usr.country = '';
   }
}
