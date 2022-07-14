import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookPostService } from '../service/book-post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  users:any=[];
   
  constructor(private bookPostService:BookPostService) { }

  ngOnInit(): void {
    this.bookPostService.getUsers().subscribe(data => {
      console.log(data)
      this.users=data;
    })
  }
}
