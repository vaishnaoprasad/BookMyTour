import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { PlaceService } from 'src/app/services/place-service.service';

@Component({
  selector: 'app-offer-places',
  templateUrl: './offer-places.page.html',
  styleUrls: ['./offer-places.page.scss'],
})
export class OfferPlacesPage implements OnInit {

  placeOfferForm!: FormGroup;
  fromDatePicker: boolean = false;
  tillDatePicker: boolean = false;
  fromDate: string = '';
  tillDate: string = '';

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeOfferForm = new FormGroup({
      place: new FormControl(''),
      place_description: new FormControl(''),
      available_from: new FormControl(''),
      available_till: new FormControl(''),
      cost: new FormControl(''),
    });
  }

  onSelectDateFrom(event: any){
    this.placeOfferForm.controls['available_from'].setValue(event.detail.value);
    this.fromDate = event.detail.value; 
  }

  onSelectDateTill(event: any){
    this.placeOfferForm.controls['available_till'].setValue(event.detail.value);
    this.tillDate = event.detail.value;
  }

  onSubmitPlaceOfferForm(formdata: any){
    console.log('FormData :', formdata.value);
    this.placeService.addPlace(formdata.value);
  }

  toggleFromDatePicker(){
    this.fromDatePicker = !this.fromDatePicker;
  }

  toggleTillDatePicker(){
    this.tillDatePicker = !this.tillDatePicker;
  }

}
