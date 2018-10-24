import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {FarmdashboardComponent} from './farmdashboard/farmdashboard.component';
import { PagesComponent } from './pages.component';
import { ClimateComponent } from './climate/climate.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'farmdashboard',
    component: FarmdashboardComponent,
  },
  {
    path: 'fields',
    loadChildren: './fields/fields.module#FieldsModule',
  },
  {
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule',
  },
   {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'farmdashboard',
    pathMatch: 'full',
  },{
    path: 'climate',
    component: ClimateComponent,
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
