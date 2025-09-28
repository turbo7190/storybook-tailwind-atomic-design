import Component from './SinglePriceWithDetails.vue';

export default {
  title: 'Components/Organisms/Pricing Sections',
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
    info: {
      type: 'object',
      description: 'section pricing object'
    }
  },
  parameters: {
    componentSubtitle: 'Display a single price with detail'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SinglePriceWithDetails = Template.bind({});
SinglePriceWithDetails.args = {
  title: 'Simple no-tricks pricing',
  description: 'If you\'re not satisfied, contact us within the first 14 days and we\'ll send you a full refund',
  info: {
    label: 'Lifetime Membership',
    description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.',
    includedFeatures: [
      'Private forum access',
      'Member resources',
      'Entry to annual conference',
      'Official member t-shirt',
    ],
    price: 349,
    size: 20
  },
};
