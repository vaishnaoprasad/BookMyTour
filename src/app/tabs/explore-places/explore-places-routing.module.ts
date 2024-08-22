import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorePlacesPage } from './explore-places.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorePlacesPageRoutingModule {}
