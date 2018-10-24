import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  template: `
    <button  (click)="onClick()" type="button" class="btn btn-success btn-icon">
            <i class="nb-checkmark"></i>
          </button>
  `,
})

export class ButtoncomponentComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}
