import Component from './CenteredWithSingleAction.vue';
import * as heroIcons from '@heroicons/vue/24/outline'

export default {
  title: 'Components/Organisms/Modals',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'modal title'
    },
    description: {
      type: 'string',
      description: 'modal description'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    },
    icon: {
      control: {type: 'select'},
      options: Object.keys(heroIcons),
      description: 'modal icon'
    }
  },
  parameters: {
    componentSubtitle: 'Display a centered modal with single action'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CenteredWithSingleAction = Template.bind({});
CenteredWithSingleAction.args = {
  title: 'Payment successful',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
  btnText: 'Go back to dashboard',
  onClick: () => console.log('clicked'),
  icon: 'CheckIcon'
};
