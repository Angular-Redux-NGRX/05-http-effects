import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(`${this.url}/users?page=2`)
      .pipe(map((res: any) => res.data));
  }

  getUserById(id: string) {
    return this.http
      .get(`${this.url}/users/${ id }`)
      .pipe(map((res: any) => res.data));
  }
}
