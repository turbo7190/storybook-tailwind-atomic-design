import Component from './BulletsAndText.vue';

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

export const BulletsAndText = Template.bind({});
BulletsAndText.args = {
  items: [
    { id: 1,name: "Create account",  status: "complete" },
    { id: 2,name: "Profile information",  status: "current" },
    { id: 3,name: "Theme",  status: "pending" },
    { id: 4,name: "Preview",  status: "pending" },
  ]
};
export const BulletsAndTextWithDependancy = Template.bind({});
BulletsAndTextWithDependancy.args = {
  items: [
    { id: 1,name: "Create account",  status: "current" },
    { id: 2,name: "Profile information",  status: "pending" },
    { id: 3,name: "Theme",  status: "pending" },
    { id: 4,name: "Preview",  status: "pending" },
  ],
  dependancy: true
};
