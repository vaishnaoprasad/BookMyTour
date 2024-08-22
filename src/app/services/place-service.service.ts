import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private _places = new BehaviorSubject([]);

  constructor() { }

  get places(){
    return this._places.asObservable();
  }

  addPlace(place: any){
    return this._places.next(this._places.value.concat(place));
  }

}
