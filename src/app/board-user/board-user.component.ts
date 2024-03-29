import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
content:any;
  constructor(private UserService:UserService) { }
  ngOnInit(): void {
    this.UserService.getModeratorBoard().subscribe(
      data =>{
        this.content=data;
      },
      err =>{
      this.content=JSON.parse(err.error).message;
      }

    );
  }

}
