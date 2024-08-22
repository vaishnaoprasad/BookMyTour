import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferPlacesPageRoutingModule } from './offer-places-routing.module';

import { OfferPlacesPage } from './offer-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferPlacesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OfferPlacesPage]
})
export class OfferPlacesPageModule {}
