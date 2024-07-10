/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  customer =   {username: '', genre:'', phone:''};
  constructor(private customerService: CustomerService,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() { 
     this.getAllCustomer();
  }

  save(form){
    this.customer.username = form.value.username;
    this.customer.genre = form.value.genre;
    this.customer.phone = form.value.phone;
    console.log(this.customer);
    this.customerService.store(this.customer)
    .subscribe((resul: any) => {
         console.log(resul);
         this.getAllCustomer();
         this.presentToast(resul.success);
        if(resul.code == 200){
          form.reset();
          this.router.navigateByUrl('/list-customer')

        }
    },
    err => {
        console.log(err);
    }
   )
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  getAllCustomer(){
    this.customerService.getAll()
    .subscribe(data => {
        console.log(data);  
    },err => {
          console.log(err);   
    })
  }
}
