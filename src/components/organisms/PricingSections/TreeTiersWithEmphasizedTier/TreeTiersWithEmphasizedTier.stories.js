import Component from './TreeTiersWithEmphasizedTier.vue';

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
    category: {
      type: 'string',
      description: 'section category'
    },
    items: {
      type: 'array',
      description: 'membership list'
    },
  },
  parameters: {
    componentSubtitle: 'Display three tiers pricing section with emphasized tier'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TreeTiersWithEmphasizedTier = Template.bind({});
TreeTiersWithEmphasizedTier.args = {
  items: [
    {
      title: 'Hobby',
      price: 79,
      frequency: '/month',
      description: 'The essentials to provide your best work for clients.',
      features: ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae'],
      cta: 'Start your trial',
      mostPopular: false,
    },
    {
      title: 'Startup',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        'Quia rem est sed impedit magnam',
        'Dolorem vero ratione voluptates',
        'Qui sed ab doloribus voluptatem dolore',
        'Laborum commodi molestiae id et fugiat',
        'Nam ut ipsa nesciunt culpa modi dolor',
      ],
      cta: 'Start your trial',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae'],
      cta: 'Start your trial',
      mostPopular: false,
    },
  ],
  category: 'pricing',
  title: 'The right price for you, whoever you are',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.'
};
