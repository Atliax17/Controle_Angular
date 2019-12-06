import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories
    )   
  }

  changeCategory(cat: Category): void {
    this.chatService.changeCategory(cat).subscribe();
  }

}
