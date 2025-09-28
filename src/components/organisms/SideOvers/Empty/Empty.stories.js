import Component from './Empty.vue';

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
    componentSubtitle: 'Display an empty panel'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Empty = Template.bind({});
Empty.args = {
  title: 'Panel title'
};
