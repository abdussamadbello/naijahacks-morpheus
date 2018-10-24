import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [{
  path: '',
  component: IncomeComponent,
  children: [{
    path: 'account',
    redirectTo: 'expense',
    pathMatch: 'full',
  },  {
    path: 'expense',
    component: ExpenseComponent,
  }, {
    path: 'budget',
    component: BudgetComponent,
  },
  {
    path: 'income',
    component: IncomeComponent,
  }
  ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule { }
