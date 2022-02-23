import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarifService } from 'app/service/tarif.service';
import { Tarif } from 'app/tarif';

@Component({
  selector: 'app-create-tarif',
  templateUrl: './create-tarif.component.html',
  styleUrls: ['./create-tarif.component.css']
})
export class CreateTarifComponent implements OnInit {
  submitted = false;
  tarif: Tarif = new Tarif();
  constructor(private tarifService: TarifService,
    private router: Router) {
     }

  ngOnInit(): void {
  }
  newTarif(): void {
    this.submitted = false;
    this.tarif = new Tarif();
  }
  saveTarif(){
    this.tarifService.createTarif(this.tarif).subscribe( data =>{
      console.log(data);
      this.goToTarifList();
    
  
    },
    error => console.log(error));
  }
  goToTarifList(){
    this.router.navigate(['/examples/landing']);


  }
 onSubmit() {
   this.submitted = true;
   this.saveTarif();
 }
   
   
}
