import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';


export interface RestApi<T> {
  data: T,
  page?: number,
  per_page?: number,
  total?: number,
  total_pages?: number
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RestApi<User[]>>(`${this.baseUrl}`)
  }

  getById(id: number) {
    return this.http.get<RestApi<User>>(`${this.baseUrl}/${id}`)
  }

  create(user: User) {
    return this.http.post<User>(this.baseUrl, user)
  }

  update(user: User) {
    return this.http.patch<User>(this.baseUrl, user)
  }
}
