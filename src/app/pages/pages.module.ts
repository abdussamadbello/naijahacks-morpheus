import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { FarmdashboardModule } from './farmdashboard/farmdashboard.module';
import { FieldsModule } from './fields/fields.module';
import { AccountsModule } from './accounts/accounts.module';
import { ClimateModule } from './climate/climate.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    FarmdashboardModule,
    FieldsModule,
    AccountsModule, 
    ClimateModule   

  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
