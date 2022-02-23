import { Component, OnInit } from '@angular/core';
import { TarifService } from 'app/service/tarif.service';
import { Router, RouterModule } from '@angular/router';

import * as Rellax from 'rellax';
import { Tarif } from 'app/tarif';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  tarifs: Tarif[];


  constructor(private tarifService: TarifService,
    private router: Router) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.getTarifs();

  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  private getTarifs(){
    this.tarifService.getTarifsList().subscribe(data => {
      console.log(data);
      this.tarifs = data;
    },
    error => console.log(error));
  }
updateTarif(id: number){
  this.router.navigate(['/update-tarif', id]);

}
deleteTarif(id: number){
  this.tarifService.deleteTarif(id).subscribe( data => {
    this.goToTarifList();
  },
  error => console.log(error));
}
goToTarifList(){
    this.router.navigate(['/examples/landing']);

  }
}
