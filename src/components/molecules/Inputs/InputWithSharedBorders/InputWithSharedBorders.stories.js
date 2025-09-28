import Component from './InputWithSharedBorders.vue';

export default {
  title: 'Components/Molecules/Inputs',
  component: Component,
  argTypes: {
    content: {
      type: 'string'
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

export const InputWithSharedBorders = Template.bind({});
InputWithSharedBorders.args = {
};
