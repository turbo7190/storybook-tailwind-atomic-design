import Component from './PanelsWithBorder.vue';

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

export const PanelsWithBorder = Template.bind({});
PanelsWithBorder.args = {
  items: [
    {
      id: "01",
      name: "Job Details",
      description: "Vitae sed mi luctus laoreet.",
      status: "complete",
    },
    {
      id: "02",
      name: "Application form",
      description: "Cursus semper viverra.",
      status: "current",
    },
    {
      id: "03",
      name: "Preview",
      description: "Penatibus eu quis ante.",
      status: "pending",
    },
  ]
};
export const PanelsWithBorderWithDependancy = Template.bind({});
PanelsWithBorderWithDependancy.args = {
  items: [
    {
      id: "01",
      name: "Job Details",
      description: "Vitae sed mi luctus laoreet.",
      status: "current",
    },
    {
      id: "02",
      name: "Application form",
      description: "Cursus semper viverra.",
      status: "pending",
    },
    {
      id: "03",
      name: "Preview",
      description: "Penatibus eu quis ante.",
      status: "pending",
    },
  ],
  dependancy: true
};
