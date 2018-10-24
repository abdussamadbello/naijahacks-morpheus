import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-createfields',
  templateUrl: './createfields.component.html',
  styleUrls: ['./createfields.component.scss']
})
export class CreatefieldsComponent implements OnInit{

firstForm: FormGroup;
secondForm: FormGroup;

constructor(private fb: FormBuilder) {
}

ngOnInit() {
  this.firstForm = this.fb.group({
    firstCtrl: ['', Validators.required],
  });

  this.secondForm = this.fb.group({
    secondCtrl: [''],
  });

 
}

onFirstSubmit() {
  this.firstForm.markAsDirty();
}

onSecondSubmit() {
  this.secondForm.markAsDirty();
}



}