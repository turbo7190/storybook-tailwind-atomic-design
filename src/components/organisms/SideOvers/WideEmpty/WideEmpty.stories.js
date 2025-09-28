import Component from './WideEmpty.vue';

export default {
  title: 'Components/Organisms/Side Overs',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'title'
    }
  },
  parameters: {
    componentSubtitle: 'Display an wide empty panel'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WideEmpty = Template.bind({});
WideEmpty.args = {
  title: 'Panel title'
};
