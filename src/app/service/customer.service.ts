import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  store(customer: any)
  {
      return this.http.post(this.apiUrl + 'customer/create', customer);
  }

  storeOrdre(ordre)
  {
    return this.http.post(this.apiUrl + 'ordre/store-ordre', ordre);
  }

  getAll()
  {
     return this.http.get(this.apiUrl + 'customer/list');
  }


  getAllOrdre()
  {
   return this.http.get(this.apiUrl + 'ordre/list');
  }


 searchOrderByUser(searchobjet)
 {
  return this.http.post(this.apiUrl + 'ordre/search-ordre', searchobjet);
 }


 storepaie(paie)
 {
   return this.http.post(this.apiUrl + 'paie/store-paie',paie);
 }


 checkoutpaie(id,pai_id)
 {
  return this.http.get(this.apiUrl + 'paie/'+id+'/'+pai_id+'/checkout-paie');
 }


 showCustomersByid(id)
 {
   return this.http.get(this.apiUrl + 'customer/' + id + '/show');
 }

 paieordre(paie){
   return this.http.post(this.apiUrl + 'paie/paie-ordre',paie);
 }


 customerwithordrewithpaie(id){
  return this.http.get(this.apiUrl + 'paie/' + id + '/customer-paie');
 }

 updatepaierestante(idp,ch){
   return this.http.get(this.apiUrl + 'paie/paie-restant/' + idp + '/' + ch);
 }

}
