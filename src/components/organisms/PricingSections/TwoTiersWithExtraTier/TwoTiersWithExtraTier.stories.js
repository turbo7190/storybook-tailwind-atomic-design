import Component from './TwoTiersWithExtraTier.vue';

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
    extraItem: {
      type: 'object',
      description: 'extra membership object'
    }
  },
  parameters: {
    componentSubtitle: 'Display 2 tiers pricing section with extra tier'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TwoTiersWithExtraTier = Template.bind({});
TwoTiersWithExtraTier.args = {
  category: 'pricing',
  title: 'The right price for you, whoever you are',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.',
  extraItem: {
    name: 'Discounted',
    description: 'Get full access to all of standard license features for solo projects that make less than $20k gross revenue for $29',
    cta: 'Buy Discounted License'
  },
  items: [
    {
      name: 'Standard',
      href: '#',
      priceMonthly: 49,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Vel ipsa esse repudiandae excepturi',
        'Itaque cupiditate adipisci quibusdam',
      ],
    },
    {
      name: 'Enterprise',
      href: '#',
      priceMonthly: 79,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Vel ipsa esse repudiandae excepturi',
        'Itaque cupiditate adipisci quibusdam',
      ],
    },
  ]
};
