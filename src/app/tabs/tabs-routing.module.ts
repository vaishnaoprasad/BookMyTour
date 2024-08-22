import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'explore-places',
        loadChildren: () => import('./explore-places/explore-places.module').then(m => m.ExplorePlacesPageModule)
      },
      {
        path: 'offer-places',
        loadChildren: () => import('./offer-places/offer-places.module').then(m => m.OfferPlacesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explore-places',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
