import { Component, OnInit } from '@angular/core';
import { PetList } from 'src/app/model/pet-list.model';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/services/pet.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  public petList : PetList;
  public pets : Pet[];
  public count : number;

  public params = {
    filter :{
      sex: "",
      category: ""
    },
    sort : ""
  };

  constructor(private service : PetService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getPets(this.params).subscribe(data=>{
      this.petList = data;
      this.pets = data.results;
      this.count = data.count;
      console.log(this.params);
    })
  }
}
