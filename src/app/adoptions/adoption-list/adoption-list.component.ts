import { Component, OnInit } from '@angular/core';
import { Adoption } from 'src/app/model/adoption.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {

  public adoptions: Adoption[];

  constructor(private service : PetService) { }

  ngOnInit(): void {
    this.service.getAdoptions().subscribe(data=>{
      this.adoptions = data.results;
    })
  }
  removeAdoption(id:number){
    this.service.removeAdoption(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }
  resetList(){
    this.service.reset();
  }
  

}
