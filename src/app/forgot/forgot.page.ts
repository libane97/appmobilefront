import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  user = {old_password:'',new_password:'',confirmed_password:''};
  constructor(private router: Router, private toastController: ToastController,private customerService: CustomerService) { }

  ngOnInit() {
  }


  updatepassword(form){
    this.user.old_password = form.value.old_password;
    this.user.new_password = form.value.new_password;
    this.user.confirmed_password = form.value.confirmed_password;
    if (this.user.new_password == form.value.confirmed_password) {
        this.customerService.updatePassword(this.user)
        .subscribe((user:any) => {
              this.alertSuccess(user.message);
              form.reset();
        }, err=>{
           this.alertdanger(err.message);
           form.reset();
           this.router.navigateByUrl('/login');
        });
    } else {
          this.alertdanger('Le mot de passe ne sont pas parait')
          form.reset();
    }
  }

  async alertdanger(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 3000,
    });
    toast.present();
  }


  async alertSuccess(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'success',
      duration: 3000,
    });
    toast.present();
  }

}
