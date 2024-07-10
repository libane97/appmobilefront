import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.page.html',
  styleUrls: ['./list-customer.page.scss'],
})
export class ListCustomerPage implements OnInit {
  data: any;

  constructor(private customerService: CustomerService, private router: Router) {
    
   }

  ngOnInit() {
    this.getAllCustomer()
 }

  
 getAllCustomer()
 {
   this.customerService.getAll()
   .subscribe((data:any) => {
       this.data = data
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
}
