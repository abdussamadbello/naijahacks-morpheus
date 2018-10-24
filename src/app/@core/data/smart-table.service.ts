import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    firstName: 'Land clearing',
    lastName: '1000',
    username: '2/09/2018',
    email: '2/09/2018',
    age: '28',
  }, {
    id: 2,
    firstName: 'Bed preparation',
    lastName: '1500',
    username: '2/09/2018',
    email: '2/09/2018',
    age: '45',
  }, {
    id: 3,
    firstName: 'sowing',
    lastName: '5000',
    username: '2/09/2018',
    email: '2/09/2018',
    age: '18',
  }, {
    id: 4,
    firstName: 'watering',
    lastName: '4000',
    username: '2/09/2018',
    email: '2/09/2018',
    age: '20',
  }];

  getData() {
    return this.data;
  }
}
