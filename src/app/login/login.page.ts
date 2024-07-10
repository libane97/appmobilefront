/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user =  {login: '', password:''};
  loading: boolean;  
  constructor(private authService: AuthService, private router: Router,private toastController: ToastController) { }


  ngOnInit(): void {

  }

  login(form){
      this.user.login = form.value.name;
      this.user.password = form.value.password;
      this.loading = true;  
      this.authService.login(this.user)
      .subscribe((data: any) => {
          console.log(data);
          this.authService.saveUserdata(data);
          this.router.navigateByUrl('home');
          form.reset();
          this.loading = false;
      },err=> {
         
          if(err.status == 401)
            {
              console.log(err);
              this.loading = false;
              form.reset();
              this.presentToast(err.error.error)
            }
      });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
