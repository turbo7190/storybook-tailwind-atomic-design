import Component from './ProgressAlert.vue';

export default {
  title: 'Components/Organisms/Modals',
  component: Component,
  argTypes: {
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ProgressAlert = Template.bind({});
ProgressAlert.args = {
  
};
