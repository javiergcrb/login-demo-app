import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from './services/global/global.service';
import { FirestoreService } from './services/firestore/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Red Bull Ring';

  constructor(public router: Router, private route: ActivatedRoute,
    public global: GlobalService, public firestore: FirestoreService){
  }

  ngOnInit(){
    if(!this.global.getLogin()){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['main']);
    }
  }

  logout(){
    this.global.do_logout();
  }
}
