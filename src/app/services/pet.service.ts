import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adoption } from '../model/adoption.model';
import { AdoptionList } from '../model/adoptions-list.model';
import { PetList } from '../model/pet-list.model';
import { Pet } from '../model/pet.model';

const baseUrl="http://localhost:3000/api/pets";
const adoptionsUrl ="http://localhost:3000/api/adoptions"

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http : HttpClient) { }


  getPets(params : any):Observable<PetList>{
    let queryParams = {}
    if(params){
      queryParams = {
        params : new HttpParams()
        .set("filter",params.filter && JSON.stringify(params.filter) || "")
        .set("sort", params.sort || "")
      }
    }
    return this.http.get(baseUrl,queryParams).pipe(map(data=>{
      return new PetList(data);
    }))
    
  }

  getPet(id:number):Observable<Pet>{
    return this.http.get(baseUrl+"/"+id).pipe(map(data=>{
      return new Pet(data);
    }))
  }
  addAdoption(adoption:Adoption):Observable<Adoption>{
    return this.http.post(adoptionsUrl,adoption).pipe(map(data=>{
      return new Adoption(data);
    }))
  }
  getAdoptions():Observable<AdoptionList>{
    return this.http.get(adoptionsUrl).pipe(map(data=>{
      return new AdoptionList(data);
    }))
  }

  removeAdoption(id:number):Observable<Adoption>{
    return this.http.delete(adoptionsUrl+'/'+id).pipe(map(data=>{
      return new Adoption(data);
    }))
  }
  reset(){
    
  }

}
