import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
@Component({
  selector: 'app-widget-latest-posts',
  templateUrl: './widget-latest-posts.component.html',
  styleUrls: ['./widget-latest-posts.component.css']
})
export class WidgetLatestPostsComponent implements OnInit {

  //@Input('post')
  //Post!:BlogPost[];
  Post!:Array<BlogPost>;

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getPosts(1,null,null).subscribe(
      data => {//console.log(data);
        this.Post = data.slice(0,3); //console.log(this.Post);
      },
      err => console.log("Error in Latest Posts" + err)
    );
  }

}
