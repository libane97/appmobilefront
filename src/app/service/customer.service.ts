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

}
