import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginObservable: any;
  userName: any;

  constructor(private loginService: LoginService) {
    this.loginObservable = this.loginService.onChange.subscribe((value) => {
      this.userName = value;
    });
  }

  ngOnInit() {
    this.getUsername();
  }

  logOut(): void {
    localStorage.removeItem('pseudo');
    localStorage.removeItem('connexion');
    window.location.reload();
  }

  getUsername(): void {
    this.userName = localStorage.getItem('pseudo');    
  }

}
