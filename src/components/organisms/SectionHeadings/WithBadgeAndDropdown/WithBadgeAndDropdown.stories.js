import Component from './WithBadgeAndDropdown.vue';

export default {
  title: 'Components/Organisms/Section Headings',
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
    badgeText: {
      type: 'string',
      description: 'badge text'
    },
    options: {
      type: 'array',
      description: 'dropdown options list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a section with badge and dropdown'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBadgeAndDropdown = Template.bind({});
WithBadgeAndDropdown.args = {
  title: 'Full-Stack developer',
  description: 'Checkout and Payments Team',
  badgeText: 'Open',
  options: [
    {
      name: 'Account Settings'
    },
    {
      name: 'Support'
    },
    {
      name: 'License'
    }
  ],
};
