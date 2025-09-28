import Component from './Simple.vue';
import * as heroIcons from '@heroicons/vue/24/outline'

export default {
  title: 'Components/Organisms/Notifications',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'notification title'
    },
    description: {
      type: 'string',
      description: 'notification description'
    },
    icon: {
      control: {type: 'select'},
      options: Object.keys(heroIcons),
      description: 'notification icon name'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple notification'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  title: 'Successfully saved!',
  description: 'Anyone with a link can now view this file.',
  icon: 'CheckCircleIcon'
};
