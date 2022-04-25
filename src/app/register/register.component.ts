import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public router : Router, private route : ActivatedRoute,
    public global : GlobalService) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(["login"]);
  }
}
