import Component from './SinglePriceWithFeatureList.vue';

export default {
  title: 'Components/Organisms/Pricing Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    subtitle: {
      type: 'string',
      description: 'section subtitle'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    featureInfo: {
      type: 'object',
      description: 'feature list info'
    },
    btnText: {
      type: 'string',
      description: 'button text'
    }
  },
  parameters: {
    componentSubtitle: 'Display a single price with feature list'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SinglePriceWithFeatureList = Template.bind({});
SinglePriceWithFeatureList.args = {
  title: 'Everything you need for',
  subtitle: '$99 a month',
  description: 'Includes every feature we offer plus unlimited projects and unlimited users.',
  btnText: 'Get started today',
  featureInfo: {
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
  }
};
