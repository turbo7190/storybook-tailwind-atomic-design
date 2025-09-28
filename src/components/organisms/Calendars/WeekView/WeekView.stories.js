import Component from './WeekView.vue';

export default {
  title: 'Components/Organisms/Calendars',
  component: Component,
  argTypes: {
    options: {
      type: 'array',
      description: 'dropdown options'
    }
  },
  parameters: {
    componentSubtitle: 'Display a week view'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WeekView = Template.bind({});
WeekView.args = {
  options: [
    'Day view',
    'Week view',
    'Month view',
    'Year view'
  ],
};
