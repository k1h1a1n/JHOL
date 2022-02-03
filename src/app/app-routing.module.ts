import { NgModule } from '@angular/core';
import { Routes, RouterModule,  PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppStartComponent } from './app-start.component';
import { AppRoute404, AppRouteGuard } from './app-route.guard';

const routes: Routes = [
  { path: '', component: AppStartComponent},
  {
    path: 'home',
    canActivateChild: [AppRouteGuard],
    children: [
      {path: 'digital-handbook', loadChildren: () => import('./dih-module/dih-routing.module').then(m => m.DIHRoutingModule)},
    ]
  },
  {path:'',redirectTo:'AppStartComponent', pathMatch: 'full' },
  { path: '**', canActivate: [AppRouteGuard], component: AppRoute404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top',
        onSameUrlNavigation: 'reload',
        relativeLinkResolution: 'legacy',
        useHash:true ,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  providers:[
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
