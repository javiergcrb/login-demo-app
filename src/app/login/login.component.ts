import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../services/global/global.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email:string;
  pass:string;

  constructor(public router : Router, private route : ActivatedRoute,
    public global : GlobalService) {
      this.email = "";
      this.pass = "";
    }


  ngOnInit(): void {
    //this.router.navigate(['profile'])
  }

  login(){

    console.log(this.email, this.pass);

    this.global.do_login(new User());
    this.router.navigate(['profile']);
  }
}
