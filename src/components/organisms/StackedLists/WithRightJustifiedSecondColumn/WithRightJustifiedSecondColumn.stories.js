import Component from './WithRightJustifiedSecondColumn.vue';

export default {
  title: 'Components/Organisms/Stacked Lists',
  component: Component,
  argTypes: {
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithRightJustifiedSecondColumn = Template.bind({});
WithRightJustifiedSecondColumn.args = {
  positions: [
    {
      id: 1,
      title: 'Back End Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 2,
      title: 'Front End Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 3,
      title: 'User Interface Designer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Design',
      closeDate: '2020-01-14',
      closeDateFull: 'January 14, 2020',
    },
  ]
};
