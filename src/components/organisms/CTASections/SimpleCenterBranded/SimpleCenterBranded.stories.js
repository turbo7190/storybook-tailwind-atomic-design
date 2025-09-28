import Component from './SimpleCenterBranded.vue';

export default {
  title: 'Components/Organisms/CTA Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a center brand panel'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleCenterBranded = Template.bind({});
SimpleCenterBranded.args = {
  title: 'Boost your productivity.\nStart using Workflow today.',
  description: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.',
  btnText: 'Sign up for free',
  onClick: () => console.log('clicked'),
};
