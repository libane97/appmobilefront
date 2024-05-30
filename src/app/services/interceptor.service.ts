import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private injector: Injector, private route: Router) { }
  intercept(requete:any, next:any)
   {
      const token = localStorage.getItem("token");
       console.log(token);
       if (token !=  null)
        {
             requete = requete.clone(
              {
                 setHeaders:{Authorization:`Bearer ${token}`}
              }
           );
        }
        return next.handle(requete).pipe(
           tap(()=>{

           },
           (err)=>{
              if (err instanceof HttpErrorResponse) {
                 if (err.status === 401) {
                    this.route.navigate(['login']);
                 }else if(err.status === 403){
                    this.route.navigate(['accessdenied']);
                 }else if(err.status === 500){
                  this.route.navigate(['errorpage']);
               }
              }
           }
           )
        );

   }
}
