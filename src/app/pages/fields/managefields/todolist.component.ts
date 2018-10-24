import { Component, OnInit} from '@angular/core';
import { ButtoncomponentComponent } from './buttoncomponent.component';

@Component({
  selector: 'ngx-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements  OnInit {
  settings = {
    rowClassFunction: (row) => {{
      if(row.data.name=="Planting")
      return 'done';
    }
      return ''
  },
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
      },
      name: {
        title: 'Task descrption',
      },
      username: {
        title: ' Start Date',
      },
      text : {
        title: ' End Date',
      },
      
      button: {
        title: 'Status',
        type: 'custom',
        renderComponent: ButtoncomponentComponent,
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Planting',
      username: '2/9/2018',
      email: '2/9/2018',
      button: 'Button #1',
    },
    {
      id: 2,
      name: 'Harversting',
      username: '2/9/2018',
      email: '2/9/2018',
      button: 'Button #2',
    },
    {
      id: 1,
      name: 'weeding',
      username: '2/9/2018',
      email: '2/9/2018',
      button: 'Button #1',
    },
    {
      id: 2,
      name: 'harrowing',
      username: '2/9/2018',
      email: '2/9/2018',
      button: 'Button #2',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
