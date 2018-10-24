import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/farmdashboard',
    home: true,
  },
  {
    title: 'Fields',
    icon: 'nb-compose',
    link: '/pages/fields',
    children: [
      {
        title: 'View Fields',
        link: '/pages/fields/viewfields',
      },
      {
        title: 'Create Field',
        link: '/pages/fields/createfields',
      },
    ]
  },
  {
    title: 'Accounts',
    icon: 'nb-bar-chart',
    link: '/pages/iot-dashboard',
    children: [
      {
        title: 'Analytics',
        link: '/pages/farmdashboard',
      },
      {
        title: 'Budget',
        link: '/pages/accounts/budget',
      },
      {
        title: 'Income',
        link: '/pages/accounts/income',
      },
      {
        title: 'Expense',
        link: '/pages/accounts/expense',
      }
    ]
  },
  {
    title: 'Climate',
    icon: 'nb-partlysunny',
    link: '/pages/climate',
   
  },
  {
    title: 'Settings',
    icon: 'nb-gear',
    link: '/pages/dashboard',
   
  }
  
];
