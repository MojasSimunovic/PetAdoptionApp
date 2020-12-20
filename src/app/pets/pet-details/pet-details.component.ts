import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adoption } from 'src/app/model/adoption.model';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  public id:number;
  public pet : Pet;
  public adoptionForm: FormGroup;
  public newAdoption : Adoption;

  constructor(private service : PetService,private route : ActivatedRoute,
    private fb : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.refresh();
    this.createForm();
  }
  refresh(){
    this.service.getPet(this.id).subscribe(data=>{
      this.pet = data;
      console.log(this.pet);
    })
  }
  createForm(){
    this.adoptionForm = this.fb.group( {
      'name' :["", Validators.required],
      'contact' : ["", Validators.required]
    })
  }
  onSubmit(){
    this.newAdoption = this.adoptionForm.value;
    this.newAdoption._id = this.pet._id+1;
    this.newAdoption.petId = this.pet._id;
    this.newAdoption.petName = this.pet.name;
    this.service.addAdoption(this.newAdoption).subscribe(el=>{
      console.log(el);
      this.router.navigate(['/adoptions']);
    })

  }

}
