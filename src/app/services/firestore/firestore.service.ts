import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  fsUser: AngularFirestoreCollection<User>;

  constructor(private firestore:AngularFirestore) {
    this.fsUser=this.firestore.collection('users');
   }

  //login
  public login(email:string, pass:string):Observable<User[]>
  {
    return this.firestore.collection<User>('users',ref=>ref.where('email','==',email).where('password','==',pass)).valueChanges();
  }

  public update_user(user:User){
    return this.fsUser.doc(user.id).set(user);
  }

  public create_user(user:User){
    let to_store = user;
    to_store.id = this.firestore.createId();
    this.fsUser.doc(to_store.id).set({... to_store}).then(r =>{
       return to_store.id;
      });
  }

}
