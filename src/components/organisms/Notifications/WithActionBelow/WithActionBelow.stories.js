import Component from './WithActionBelow.vue';
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
    },
    yesBtnText: {
      type: 'string',
      description: 'yes button text'
    },
    noBtnText: {
      type: 'string',
      description: 'no button text'
    },
    onYesClick: {
      action: 'clicked',
      description: 'yes button action'
    },
    onNoClick: {
      action: 'clicked',
      description: 'no button action'
    },
  },
  parameters: {
    componentSubtitle: 'Display a notification with action below'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithActionBelow = Template.bind({});
WithActionBelow.args = {
  title: 'Discussion moved',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  yesBtnText: 'Undo',
  noBtnText: 'Dismiss',
  onYesClick: () => console.log('clicked'),
  onNoClick: () => console.log('clicked'),
  icon: 'InboxIcon'
};
