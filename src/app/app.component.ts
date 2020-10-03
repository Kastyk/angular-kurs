import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { retry } from 'rxjs/add/operator/retry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {}

  getPosts(): void {
    // retry(3) przy błędzie sprobuje subskrybować trzy razy
    // i dopiero za trzecim razem wyrzuci błąd
    this.httpService.getPosts().subscribe(
      (posts) => {
        console.log(posts);
      },
      // HttpErrorResponse daje dostęp do wszystkich właściwości błędu
      (error: HttpErrorResponse) => {
        console.log(error.status);
      },
    );
  }
  getPost(): void {
    this.httpService.getPost(1).subscribe((post) => {
      console.log(post);
    });
  }
  getPostByUser(): void {
    this.httpService.getPostByUser(1).subscribe((posts) => {
      console.log(posts);
    });
  }
  addPost(): void {
    const p: Post = {
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'Pierwszy post o angularze!',
    };
    this.httpService.addPost(p).subscribe((post) => {
      console.log(post);
    });
  }
  updatePost(): void {
    const p: Post = {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'nowy wpis',
    };
    this.httpService.updatePost(p).subscribe((post) => {
      console.log(post);
    });
  }
  deletePost(): void {
    this.httpService.deletePost(1).subscribe((post) => {
      console.log(post);
    });
  }
  changePost(): void {
    const p: Post = {
      id: 1,
      body: 'Zmieniam tylko wpis',
    };
    this.httpService.changePost(p).subscribe((post) => {
      console.log(post);
    });
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
