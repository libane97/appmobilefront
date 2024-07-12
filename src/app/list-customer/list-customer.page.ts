import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { InfiniteScrollCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.page.html',
  styleUrls: ['./list-customer.page.scss'],
})
export class ListCustomerPage implements OnInit {
  data: any;
  phone:any;
  loading:boolean;
  constructor(private customerService: CustomerService, private router: Router) {
    
   }

  ngOnInit() {
    this.getAllCustomer()
 }

  
 getAllCustomer()
 {
   this.loading = true;
   this.customerService.getAll()
   .subscribe((data:any) => {
       this.data = data
       this.loading = false;
   }, err => {
       console.log(err);
       
   })
 }

 show(d){
      this.customerService.showCustomersByid(d)
      .subscribe((data:any) => {
            this.router.navigate(['showcustomer',d]);
      }, err => {
          console.log(err);
          
      })
 }


 onIonInfinite(ev) {
  this.getAllCustomer();
  setTimeout(() => {
    (ev as InfiniteScrollCustomEvent).target.complete();
  }, 500);
}
 search(form){
    this.phone = form.value.phone;
    this.customerService.searchCustomer(this.phone)
    .subscribe(rest => {
         this.data = rest;
         this.phone = "";
    }, 
    err => {
        console.log(err);
        this.getAllCustomer();
    }
  )
 }


}
