import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarifService } from 'app/service/tarif.service';
import { Tarif } from 'app/tarif';

@Component({
  selector: 'app-update-tarif',
  templateUrl: './update-tarif.component.html',
  styleUrls: ['./update-tarif.component.css']
})
export class UpdateTarifComponent implements OnInit {

  id: number;
  tarif: Tarif = new Tarif();
  constructor(private tarifService: TarifService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tarifService.getTarifById(this.id).subscribe(data => {
      this.tarif = data;
    }, error => console.log(error));
  }


onSubmit() {
  
  this.tarifService.updateTarif(this.id, this.tarif).subscribe( data =>{
   this.goToTarifList();
  },
  error => console.log(error));
}
goToTarifList(){
    this.router.navigate(['/examples/landing']);

  }

}