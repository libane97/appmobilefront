import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, ) {

  }

  login(user){
    return this.http.post(this.apiUrl + 'user/login',user);
  }


  saveUserdata(user){
      localStorage.setItem('token',user.token);
  }


}
