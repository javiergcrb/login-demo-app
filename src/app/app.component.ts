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
  title = 'login-demo-app';

  constructor(private router: Router, private route: ActivatedRoute,
    public global: GlobalService, public firestore: FirestoreService){
  }

  ngOnInit(){
    this.router.navigate(['']);
    if(!this.global.login){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['profile']);
    }
  }
}
