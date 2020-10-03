// HttpClient do zapytań html, a w app module importujemy cały HttpClientModule
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  // Jeśli observe: response
  // to getPosts: <HttpResponse<Response>>
  // a get<Response>()
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts' /* {
      responseType: 'text' - zamienia json na string,
      observe: response - zwraca całą odpowiedź serwera, nie tylko body
    }*/,
    );
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
  }
  getPostByUser(userId: number): Observable<Array<Post>> {
    const parm = new HttpParams().set('userId', userId.toString());
    return this.http.get<Array<Post>>(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        params: parm,
      },
    );
  }
  addPost(post: Post): Observable<Post> {
    // post dodaje nowy post
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }
  updatePost(post: Post): Observable<Post> {
    // put zmienia cały post
    return this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post,
    );
  }
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
  }
  changePost(post: Post): Observable<Post> {
    // patch uaktualnia tylko wybrane właściwości obiektu
    // a nie cały obiekt, tak jak put
    return this.http.patch<Post>(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post,
    );
  }
}
