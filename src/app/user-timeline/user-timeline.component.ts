import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookPostService } from '../service/book-post.service';

@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.css']
})
export class UserTimelineComponent implements OnInit {

  userTimeLine:any;

  constructor(private postBookService:BookPostService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userTimeLine = this.route.paramMap.subscribe(params =>{
       let id =  params.get('id');
       this.postBookService.getUserTimeLine(id+'').subscribe(data => {
          console.log(data)
          this.userTimeLine=data;
        })
    });
  

    
  }

}
