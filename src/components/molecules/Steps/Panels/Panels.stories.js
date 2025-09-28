import Component from './Panels.vue';

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

export const Panels = Template.bind({});
Panels.args = {
  items: [
    { id: "01", name: "Job details", status: "complete" },
    { id: "02", name: "Application form", status: "current" },
    { id: "03", name: "Preview", status: "pending" },
  ]
};
export const PanelsWithDependancy = Template.bind({});
PanelsWithDependancy.args = {
  items: [
    { id: "01", name: "Job details", status: "current" },
    { id: "02", name: "Application form", status: "pending" },
    { id: "03", name: "Preview", status: "pending" },
  ],
  dependancy: true
};
