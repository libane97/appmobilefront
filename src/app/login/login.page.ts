/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user =  {login: '', password:''};
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {

  }

  login(form){
      this.user.login = form.value.name;
      this.user.password = form.value.password;
      this.authService.login(this.user)
      .subscribe((data: any) => {
          console.log(data);
          this.authService.saveUserdata(data);
          this.router.navigateByUrl('home');
      }, err => {
          console.log(err);
      });
  }
}
