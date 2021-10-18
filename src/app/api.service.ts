import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.github.com/users/';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // get all Repo by User
  public getUserRepo(Username: any): Observable<any> {
    return this.http.get(API_URL + Username + '/repos').pipe(map((res) => res));
  }
}
