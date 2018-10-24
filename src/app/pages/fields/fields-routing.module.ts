import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldsComponent } from './fields.component';
import { ManagefieldsComponent } from './managefields/managefields.component';
import { CreatefieldsComponent } from './createfields/createfields.component';
import { ViewfieldsComponent } from './viewfields/viewfields.component';

const routes: Routes = [{
  path: '',
  component: FieldsComponent,
  children: [{
    path: 'fields',
    redirectTo: 'Viewfields',
    pathMatch: 'full',
  }, {
    path: 'viewfields',
    component: ViewfieldsComponent,
  }, {
    path: 'createfields',
    component: CreatefieldsComponent,
  }, {
    path: 'managefields',
    component: ManagefieldsComponent,
  }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldsRoutingModule { }
