import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimateComponent } from './climate.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { WeatherComponent } from './weathercharts.component';

@NgModule({
  imports: [
    CommonModule,   ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [ClimateComponent,WeatherComponent]
})
export class ClimateModule { }
