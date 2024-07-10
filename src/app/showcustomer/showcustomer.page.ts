import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {

  id:any;
  data: any;
  changepaiechamp: boolean = false;
  idp:any;
  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  
    this.getCustomerwithOrdre()
  }


  getCustomerwithOrdre()
  {
     this.customerService.customerwithordrewithpaie(this.id)
     .subscribe((data: any) => {
       console.log(data);
        this.data = data;
        
     }, err =>{
        console.log(err);
     })
  }

  changepaie(d){
    this.changepaiechamp = true;
    console.log(d.id);
    this.idp = d.id;
    
  }

  paierestant(form){
    let m_restant = form.value.changepaiename;
    if (m_restant > 0) {
          this.customerService.updatepaierestante(this.idp,m_restant)
          .subscribe((result:any) => {
                this.getCustomerwithOrdre();
                this.alertSuccess(result.success);
                this.router.navigateByUrl('list-customer');
          },
            err => {
                console.log(err);
            }
          )
    } else {
          this.alertdanger('le montant restant dois etre superieur a 0')
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
