// tslint:disable:no-any
import { IAppDefinition } from '@uifabric/example-app-base';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - React',

  testPages: [],
  examplePages: [
    {
      links: [
        {
          component: require<any>('../components/pages/CalendarPage').CalendarPage,
          key: 'Calendar',
          name: 'Calendar',
          url: '#/examples/calendar'
        },
        {
          component: require<any>('../components/pages/DatePickerPage').DatePickerPage,
          key: 'DatePicker',
          name: 'DatePicker',
          url: '#/examples/datepicker'
        }
      ]
    }
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/'
    },
    {
      name: 'Fabric',
      url: 'http://dev.office.com/fabric'
    },
    {
      name: 'Github',
      url: 'http://www.github.com/officedev'
    }
  ]
};
