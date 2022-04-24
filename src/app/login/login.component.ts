import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router : Router, private route : ActivatedRoute,
    public global : GlobalService) { }

  ngOnInit(): void {
    //this.router.navigate(['profile'])
  }

  login(){
    this.global.login = true;
    this.router.navigate(['main']);
  }
}
