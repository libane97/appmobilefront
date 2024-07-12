import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { InfiniteScrollCustomEvent, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list-ordre',
  templateUrl: './list-ordre.page.html',
  styleUrls: ['./list-ordre.page.scss'],
})
export class ListOrdrePage implements OnInit {

  ordre: any;
  customers: any;
  objet= {datedebut:"",datefin:"",cus_id:""}
  paie = {months:"",ref:0,cus_id:"",m_restant:0,m_total:0,m_paie:0}
  TotalCommande = 0;
  checksearch: boolean;
  dateordre: any;
  restante:any = 0
  montantrestant:any = 0;
  constructor(private customerService: CustomerService, private toastController: ToastController) { }

  ngOnInit() {
     this.getAllordre();
     this.getAllCustomer()
  }



  getAllordre(){
     this.customerService.getAllOrdre()
     .subscribe((data: any) => {
        console.log(data);
        this.ordre = data;
        this.checksearch = false;
     },err => {
        console.log(err);
        
     })
  }

  getAllCustomer(){
     this.customerService.getAll()
     .subscribe((data:any) => {
        this.customers = data
     }, err =>
        {
            console.log(err);
            
        }
    )
  }



  search(form){
      this.dateordre = form.value.datedebut
      this.objet.cus_id = form.value.cus_id
      this.objet.datedebut = form.value.datedebut
      this.objet.datefin = form.value.datefin
      console.log(this.objet);
      this.checksearch = true;
     if (this.objet.datedebut != "" && this.objet.datefin != "") {
        this.customerService.searchOrderByUser(this.objet)
        .subscribe(data => {
            this.ordre = data
        }, err => {
            console.log(err);
            
        })   
     } 
      else {
          this.alertdanger('Les champ est vider')
     }
  }



  MontantTotalByCommande() {
    return (this.TotalCommande = this.ordre.reduce((a, c) => {
      return a + c.qty * c.price;
    }, 0));
  }


  calculer(form)
  {
    let payee = this.MontantTotalByCommande() - form.value.montantres
    this.montantrestant = payee
    return this.montantrestant
  }

  savepaie(form){

    if (form.value.montantres != "" || form.value.montantres >= 0) { 
        let payee = this.MontantTotalByCommande() - this.montantrestant
        console.log(this.montantrestant);
        let restant = this.montantrestant
        
        this.paie.cus_id = this.objet.cus_id
        this.paie.m_restant = restant
        this.paie.m_paie = payee
        this.paie.m_total = this.MontantTotalByCommande()
        this.paie.months = this.objet.datedebut  
        this.paie.ref = Math.floor(Math.random() * 10)
        console.log(this.paie);
        this.customerService.paieordre(this.paie)
        .subscribe((paie: any) => {
          console.log(paie);
          console.log(paie.paie.id);
          let pai_id = paie.paie.id

        this.ordre.forEach(element => {
            this.customerService.checkoutpaie(element.id,pai_id)
            .subscribe(data => {
                console.log(data);
                this.alertSuccess('La validation à ete effectuer avec success');
                this.getAllordre()
            }, err=> {
                console.log(err);
                
            })
        });
              
        }, err => {
              console.log(err);
              
        })
      
     } else {
       this.alertdanger("Montant restant ne peut etre pas vider et ni negative");
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

  onIonInfinite(ev) {
    this.getAllordre();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
