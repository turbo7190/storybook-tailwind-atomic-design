import Component from './HeaderCentered.vue';

export default {
  title: 'Components/Organisms/Banners',
  component: Component,
  argTypes: {
    content: {
      type: 'string',
      description: 'banner content'
    },
    linkText: {
      type: 'string',
      description: 'banner button text'
    },
    onClick: {
      action: 'clicked',
      description: 'banner button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a banner at bottom'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const HeaderCentered = Template.bind({});
HeaderCentered.args = {
  content: 'Big news! We\'re excited to announce a brand new product.',
  linkText: 'Learn more &rarr;',
  onClick: () => console.log("clicked"),
};
