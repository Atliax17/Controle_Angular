import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  newUser: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  addUser() {
      this.users.push({
        pseudo: this.newUser,
        connexion: true
      })
      this.saveUsers();
      this.router.navigateByUrl('login');
    }
}
