import Component from './WithFeatureList.vue';

export default {
  title: 'Components/Organisms/Feature Sections',
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
    category: {
      type: 'string',
      description: 'section category'
    },
    items: {
      type: 'array',
      description: 'section feature items'
    }
  },
  parameters: {
    componentSubtitle: 'Display a section with feature list'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithFeatureList = Template.bind({});
WithFeatureList.args = {
  category: 'everything you need',
  title: 'All-in-one platform',
  description: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.',
  items: [
    {
      name: 'Invite team members',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.'},
    {
      name: 'Keyboard shortcuts',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.'},
    {name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.'},
    {name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.'},
    {name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.'},
    {name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.'},
  ]
};
