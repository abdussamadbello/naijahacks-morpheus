import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ThemeModule } from '../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [CommonModule,Ng2SmartTableModule,ThemeModule,AccountRoutingModule],
  declarations: [AccountsComponent, BudgetComponent, ExpenseComponent, IncomeComponent, AnalyticsComponent],
  providers: [
    SmartTableService,
  ],
})
export class AccountsModule { }
