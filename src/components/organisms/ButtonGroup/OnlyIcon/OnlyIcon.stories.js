import Component from './OnlyIcon.vue';

export default {
  title: 'Components/Organisms/ButtonGroup',
  component: Component,
  argTypes: {
      size: {
          control: { type: 'select' },
          options: ['5', '6', '8', '9'],
          description: 'assign size to icon'
      },
      color: {
          control: {type: 'select'},
          options: ['gray-500', 'red-500', 'green-500', 'white'],
          description: 'assign color to icon'
      },
      variant: {
          control: {type: 'select'},
          options: ['primary', 'secondary', 'success', 'danger', 'themed']
      },
      hoverTextColor: {
          control: {type: 'select'},
          options: ['gray-700', 'red-700', 'green-700', 'white'],
          description: 'assign hover color'
      },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    type: "button",
    items: ["ChevronLeftIcon", "ChevronRightIcon"],
    variant: "primary",
    size: 6,
    color: "white",
    hoverTextColor: "white"
};
