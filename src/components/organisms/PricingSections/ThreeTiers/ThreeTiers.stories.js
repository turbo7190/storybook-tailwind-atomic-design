import Component from './ThreeTiers.vue';

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
    items: {
      type: 'array',
      description: 'membership list'
    },
  },
  parameters: {
    componentSubtitle: 'Display three tiers pricing section'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ThreeTiers = Template.bind({});
ThreeTiers.args = {
  title: 'Pricing plans for teams of all sizes',
  description: 'Choose an affordable plan that\'s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.',
  items: [
    {
      title: 'Freelancer',
      price: 24,
      frequency: '/month',
      description: 'The essentials to provide your best work for clients.',
      features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Startup',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ]
};
