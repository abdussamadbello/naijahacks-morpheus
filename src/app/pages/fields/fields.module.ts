import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewfieldsComponent } from './viewfields/viewfields.component';
import { CreatefieldsComponent } from './createfields/createfields.component';
import { ManagefieldsComponent } from './managefields/managefields.component';
import { EditfieldsComponent } from './editfields/editfields.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EdittodolisttableComponent } from './createfields/editTodolistTable.component';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule } from '@angular/forms';
import { NbStepperModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FieldsRoutingModule } from './fields-routing.module';
import { FieldsComponent } from './fields.component';
import { TodolistComponent } from './managefields/todolist.component';
import { ButtoncomponentComponent } from './managefields/buttoncomponent.component';


@NgModule({
  imports: [
    CommonModule, ThemeModule, NgxEchartsModule, Ng2SmartTableModule, FormsModule, NbStepperModule,RouterModule,FieldsRoutingModule

  ],
  declarations: [ViewfieldsComponent,TodolistComponent,ButtoncomponentComponent, CreatefieldsComponent, ManagefieldsComponent, EditfieldsComponent, EdittodolisttableComponent,FieldsComponent, TodolistComponent, ButtoncomponentComponent],
  providers: [
    SmartTableService,
  ],
  entryComponents: [
    ButtoncomponentComponent
]
})
export class FieldsModule { }
