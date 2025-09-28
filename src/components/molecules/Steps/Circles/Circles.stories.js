import Component from './Circles.vue';

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

export const Circles = Template.bind({});
Circles.args = {
  items: [
    { id: 1,name: "Step 1",  status: "current" },
    { id: 2,name: "Step 2",  status: "pending" },
    { id: 3,name: "Step 3",  status: "pending" },
    { id: 4,name: "Step 4",  status: "pending" },
  ]
};
export const CirclesWitDependancy = Template.bind({});
CirclesWitDependancy.args = {
  items: [
    { id: 1,name: "Step 1",  status: "current" },
    { id: 2,name: "Step 2",  status: "pending" },
    { id: 3,name: "Step 3",  status: "pending" },
    { id: 4,name: "Step 4",  status: "pending" },
  ],
  dependancy: true
};
