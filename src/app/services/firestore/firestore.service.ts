import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private fsUsuario:AngularFirestoreCollection<Usuario>;

  constructor(private firestore: AngularFirestore, public global: GlobalService) {
    this.fsUsuario=this.firestore.collection('users');
   }

  //login
  public login(usuario:string):Observable<Usuario[]>
  {
    return this.firestore.collection<Usuario>('users',ref=>ref.where('nombre','==',usuario)).valueChanges();
  }

  public create_user(){
    this.global.usr.id = this.firestore.createId();
    this.fsUsuario.doc(this.global.usr.id).set({... this.global.usr}).then(r =>{
       return this.global.usr.id;
      });
  }

}
