import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { Message } from 'src/app/shared/models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories')
  }

  changeCategory(category: Category): Observable<Category> {
    return this.http.get<Category>(`'http://localhost:3000/categories'?categoryId=${category.id}`)
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>('http://localhost:3000/messages', message)
  }
}