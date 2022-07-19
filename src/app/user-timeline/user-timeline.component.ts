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
  loading:boolean=false;
  isError:boolean=false;
  constructor(private postBookService:BookPostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading=true;
    this.isError=false;
    this.userTimeLine = this.route.paramMap.subscribe(params =>{
       let id =  params.get('id');
       this.postBookService.getUserTimeLine(id+'').subscribe(data => {
          this.loading=false;
          console.log(data)
          this.userTimeLine=data;
        }, error => {
          this.loading=false;
          this.isError=true;
          console.log(error);
        })
    });
  

    
  }

}
