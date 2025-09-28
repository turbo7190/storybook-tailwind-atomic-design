import Component from './MonthView.vue';

export default {
  title: 'Components/Organisms/Calendars',
  component: Component,
  argTypes: {
    days: {
      type: 'array',
      description: 'days'
    },
    options: {
      type: 'array',
      description: 'options'
    },
  },
  parameters: {
    componentSubtitle: 'Display a month view with events'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const MonthView = Template.bind({});
MonthView.args = {
  options: [
    'Day view',
    'Week view',
    'Month view',
    'Year view'
  ],
  days: [
    {date: '2021-12-27', events: []},
    {date: '2021-12-28', events: []},
    {date: '2021-12-29', events: []},
    {date: '2021-12-30', events: []},
    {date: '2021-12-31', events: []},
    {date: '2022-01-01', isCurrentMonth: true, events: []},
    {date: '2022-01-02', isCurrentMonth: true, events: []},
    {
      date: '2022-01-03',
      isCurrentMonth: true,
      events: [
        {id: 1, name: 'Design review', time: '10AM', datetime: '2022-01-03T10:00', href: '#'},
        {id: 2, name: 'Sales meeting', time: '2PM', datetime: '2022-01-03T14:00', href: '#'},
      ],
    },
    {date: '2022-01-04', isCurrentMonth: true, events: []},
    {date: '2022-01-05', isCurrentMonth: true, events: []},
    {date: '2022-01-06', isCurrentMonth: true, events: []},
    {
      date: '2022-01-07',
      isCurrentMonth: true,
      events: [{id: 3, name: 'Date night', time: '6PM', datetime: '2022-01-08T18:00', href: '#'}],
    },
    {date: '2022-01-08', isCurrentMonth: true, events: []},
    {date: '2022-01-09', isCurrentMonth: true, events: []},
    {date: '2022-01-10', isCurrentMonth: true, events: []},
    {date: '2022-01-11', isCurrentMonth: true, events: []},
    {
      date: '2022-01-12',
      isCurrentMonth: true,
      isToday: true,
      events: [{id: 6, name: "Sam's birthday party", time: '2PM', datetime: '2022-01-25T14:00', href: '#'}],
    },
    {date: '2022-01-13', isCurrentMonth: true, events: []},
    {date: '2022-01-14', isCurrentMonth: true, events: []},
    {date: '2022-01-15', isCurrentMonth: true, events: []},
    {date: '2022-01-16', isCurrentMonth: true, events: []},
    {date: '2022-01-17', isCurrentMonth: true, events: []},
    {date: '2022-01-18', isCurrentMonth: true, events: []},
    {date: '2022-01-19', isCurrentMonth: true, events: []},
    {date: '2022-01-20', isCurrentMonth: true, events: []},
    {date: '2022-01-21', isCurrentMonth: true, events: []},
    {
      date: '2022-01-22',
      isCurrentMonth: true,
      isSelected: true,
      events: [
        {id: 4, name: 'Maple syrup museum', time: '3PM', datetime: '2022-01-22T15:00', href: '#'},
        {id: 5, name: 'Hockey game', time: '7PM', datetime: '2022-01-22T19:00', href: '#'},
      ],
    },
    {date: '2022-01-23', isCurrentMonth: true, events: []},
    {date: '2022-01-24', isCurrentMonth: true, events: []},
    {date: '2022-01-25', isCurrentMonth: true, events: []},
    {date: '2022-01-26', isCurrentMonth: true, events: []},
    {date: '2022-01-27', isCurrentMonth: true, events: []},
    {date: '2022-01-28', isCurrentMonth: true, events: []},
    {date: '2022-01-29', isCurrentMonth: true, events: []},
    {date: '2022-01-30', isCurrentMonth: true, events: []},
    {date: '2022-01-31', isCurrentMonth: true, events: []},
    {date: '2022-02-01', events: []},
    {date: '2022-02-02', events: []},
    {
      date: '2022-02-03',
      events: [{id: 7, name: 'Cinema with friends', time: '9PM', datetime: '2022-02-04T21:00', href: '#'}],
    },
    {date: '2022-02-04', events: []},
    {date: '2022-02-05', events: []},
    {date: '2022-02-06', events: []},
  ]
};
