import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public router : Router, private route : ActivatedRoute,
    public global : GlobalService) { }

  ngOnInit(): void {
  }

  save(){
    this.router.navigate(['main']);
  }

}
