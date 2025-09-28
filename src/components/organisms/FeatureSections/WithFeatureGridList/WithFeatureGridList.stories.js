import Component from './WithFeatureGridList.vue';

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
    items: {
      type: 'array',
      description: 'section feature items'
    }
  },
  parameters: {
    componentSubtitle: 'Display a section with feature grid list'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithFeatureGridList = Template.bind({});
WithFeatureGridList.args = {
  title: 'All-in-one platform',
  description: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.',
  items: [
    {
      name: 'Invite team members',
      description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      name: 'Notifications',
      description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    },
    {
      name: 'List view',
      description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
    },
    {
      name: 'Boards',
      description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
    },
    {
      name: 'Keyboard shortcuts',
      description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
    },
    {
      name: 'Reporting',
      description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
    },
    {
      name: 'Calendars',
      description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
    },
    {
      name: 'Mobile app',
      description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
    },
  ]
};
