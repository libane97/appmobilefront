import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.page.html',
  styleUrls: ['./ordre.page.scss'],
})
export class OrdrePage implements OnInit {

  data = {datecom:"",qty:"",price:"",produit:"",cus_id:""};
  list:any
  date = new Date()
  listprod:any = []
  constructor(private customerService: CustomerService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
     this.getAllCustomer()
  }


  save(form){
     console.log(form);
     this.data.datecom = form.value.datecom
     this.data.qty = form.value.qty
     this.data.price = form.value.price
     this.data.produit = form.value.produit
     this.data.cus_id = form.value.cus_id
    //  this.listprod.push(this.data)
    //  console.log(this.listprod);
     this.customerService.storeOrdre(this.data)
     .subscribe((data: any) => {
          console.log(data);
          this.presentToast(data.success)
          form.reset()
          this.router.navigateByUrl('/list-ordre')
     },
     err => {
         console.log(err);
         
     }
   )
     
  }

  getAllCustomer()
  {
    this.customerService.getAll()
    .subscribe((data:any) => {
        this.list = data
    }, err => {
        console.log(err);
        
    })
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'success',
      duration: 2000,
    });
    toast.present();
  }

}
