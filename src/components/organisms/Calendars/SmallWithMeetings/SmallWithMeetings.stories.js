import Component from './SmallWithMeetings.vue';

export default {
  title: 'Components/Organisms/Calendars',
  component: Component,
  argTypes: {
    days: {
      type: 'array',
      description: 'month days'
    },
    meetings: {
      type: 'array',
      description: 'meetings'
    },
  },
  parameters: {
    componentSubtitle: 'Display a small calendar with meetings'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SmallWithMeetings = Template.bind({});
SmallWithMeetings.args = {
  days: [
    {date: '2021-12-27'},
    {date: '2021-12-28'},
    {date: '2021-12-29'},
    {date: '2021-12-30'},
    {date: '2021-12-31'},
    {date: '2022-01-01', isCurrentMonth: true},
    {date: '2022-01-02', isCurrentMonth: true},
    {date: '2022-01-03', isCurrentMonth: true},
    {date: '2022-01-04', isCurrentMonth: true},
    {date: '2022-01-05', isCurrentMonth: true},
    {date: '2022-01-06', isCurrentMonth: true},
    {date: '2022-01-07', isCurrentMonth: true},
    {date: '2022-01-08', isCurrentMonth: true},
    {date: '2022-01-09', isCurrentMonth: true},
    {date: '2022-01-10', isCurrentMonth: true},
    {date: '2022-01-11', isCurrentMonth: true},
    {date: '2022-01-12', isCurrentMonth: true, isToday: true},
    {date: '2022-01-13', isCurrentMonth: true},
    {date: '2022-01-14', isCurrentMonth: true},
    {date: '2022-01-15', isCurrentMonth: true},
    {date: '2022-01-16', isCurrentMonth: true},
    {date: '2022-01-17', isCurrentMonth: true},
    {date: '2022-01-18', isCurrentMonth: true},
    {date: '2022-01-19', isCurrentMonth: true},
    {date: '2022-01-20', isCurrentMonth: true},
    {date: '2022-01-21', isCurrentMonth: true},
    {date: '2022-01-22', isCurrentMonth: true, isSelected: true},
    {date: '2022-01-23', isCurrentMonth: true},
    {date: '2022-01-24', isCurrentMonth: true},
    {date: '2022-01-25', isCurrentMonth: true},
    {date: '2022-01-26', isCurrentMonth: true},
    {date: '2022-01-27', isCurrentMonth: true},
    {date: '2022-01-28', isCurrentMonth: true},
    {date: '2022-01-29', isCurrentMonth: true},
    {date: '2022-01-30', isCurrentMonth: true},
    {date: '2022-01-31', isCurrentMonth: true},
    {date: '2022-02-01'},
    {date: '2022-02-02'},
    {date: '2022-02-03'},
    {date: '2022-02-04'},
    {date: '2022-02-05'},
    {date: '2022-02-06'},
  ],
  meetings: [
    {
      id: 1,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Starbucks',
    },
    {
      id: 2,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Starbucks',
    },
    // More meetings...
  ]
};
