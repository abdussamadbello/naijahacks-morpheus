import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { ThemeModule } from '../../@theme/theme.module';
import { FarmdashboardComponent } from './farmdashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RainPredictionComponent } from './weather/rainprediction.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MonthlyExpenseComponent } from './analytics/monthlyexpense.component';
import { MonthlyIncomeComponent } from './analytics/monthlyincome.component';
import { AccountmetricsComponent } from './analytics/accountmetrics/accountmetrics.component';
import { FieldmetricsComponent } from './analytics/fieldmetrics/fieldmetrics.component';
import { FieldpiechartsComponent } from './analytics/fieldmetrics/fieldpiecharts.components';


@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgxEchartsModule,
    
    
  ],
  declarations: [
    MonthlyIncomeComponent,
    MonthlyExpenseComponent,
    RainPredictionComponent,
    WeatherComponent,
    FarmdashboardComponent,
    AnalyticsComponent,
    TodolistComponent,
    ButtonsComponent,
    NotificationsComponent,
    AccountmetricsComponent,
    FieldmetricsComponent,
    FieldpiechartsComponent
  ]
})
export class FarmdashboardModule { }
