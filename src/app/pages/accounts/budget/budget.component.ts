import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-budget',
  templateUrl: './budget.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `]
})
export class BudgetComponent {
  
  settings = {
  add: {
    addButtonContent: '<i class="nb-plus"></i>',
    createButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  },
  edit: {
    editButtonContent: '<i class="nb-edit"></i>',
    saveButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  },
  delete: {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  },
  columns: {
    id: {
      title: 'ID',
      type: 'number',
    },
    firstName: {
      title: 'Item ',
      type: 'string',
    },
    email: {
      title: 'Description',
      type: 'string',
    },
    lastName: {
      title: 'Amount',
      type: 'string',
    },
    username: {
      title: 'Source',
      type: 'string',
    }
  },
};

source: LocalDataSource = new LocalDataSource();

constructor(private service: SmartTableService) {
  const data = this.service.getData();
  this.source.load(data);
}

onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
}
}

