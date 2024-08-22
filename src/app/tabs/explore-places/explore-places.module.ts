import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePlacesPageRoutingModule } from './explore-places-routing.module';

import { ExplorePlacesPage } from './explore-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePlacesPageRoutingModule
  ],
  declarations: [ExplorePlacesPage]
})
export class ExplorePlacesPageModule {}
