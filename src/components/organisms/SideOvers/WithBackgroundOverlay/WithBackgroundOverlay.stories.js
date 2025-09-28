import Component from './WithBackgroundOverlay.vue';

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
    componentSubtitle: 'Display an empty panel with background overlay'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBackgroundOverlay = Template.bind({});
WithBackgroundOverlay.args = {
  label: 'Panel title',
  isOpen: true,
  onClose: () => console.log('clicked')
};
