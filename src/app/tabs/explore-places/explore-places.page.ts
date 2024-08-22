import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place-service.service';

@Component({
  selector: 'app-explore-places',
  templateUrl: './explore-places.page.html',
  styleUrls: ['./explore-places.page.scss'],
})
export class ExplorePlacesPage implements OnInit {

  places: any = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.placeService.places.subscribe(data =>{
      console.log('Places at Explore Places : ', data);
      this.places = data;
    });
  }



}
