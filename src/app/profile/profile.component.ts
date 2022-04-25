import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore/firestore.service';
import { GlobalService } from '../services/global/global.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:User;
  errorWarn:boolean = false;
  successWarn:boolean = false;

  constructor(public router : Router, private route : ActivatedRoute,
    public global : GlobalService, public firestore : FirestoreService) {
      this.user = global.getUser();
    }

  ngOnInit(): void {

  }

  save(){
    this.firestore.update_user(this.user);
    this.errorWarn = false;
    this.successWarn = true;
  }

}
