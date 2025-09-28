import Component from './WithTabs.vue';

export default {
  title: 'Components/Organisms/Section Headings',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'header title'
    },
    tabs: {
      type: 'array',
      description: 'header tabs list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a section header with tabs'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithTabs = Template.bind({});
WithTabs.args = {
  tabs: [
    {name: 'Applied', href: '#', current: false},
    {name: 'Phone Screening', href: '#', current: false},
    {name: 'Interview', href: '#', current: true},
    {name: 'Offer', href: '#', current: false},
    {name: 'Hired', href: '#', current: false},
  ],
  title: 'Candidates'
};
