import Component from './Simple.vue';

export default {
  title: 'Components/Molecules/Steps',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'steps array'
    },
    dependancy: {
      type: 'boolean',
      description: 'when set to true allows to traverse steps only in sequence'
    },
    stepClicked: {
      action: 'step clicked'
    }
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  items: [
    { id: "Step 1", name: "Job details",status: "current" },
    { id: "Step 2", name: "Application form",status: "pending" },
    { id: "Step 3", name: "Preview",status: "pending" },
  ]
};
export const SimpleWithDependancy = Template.bind({});
SimpleWithDependancy.args = {
  items: [
    { id: "Step 1", name: "Job details",status: "current" },
    { id: "Step 2", name: "Application form",status: "pending" },
    { id: "Step 3", name: "Preview",status: "pending" },
  ],
  dependancy: true
};

