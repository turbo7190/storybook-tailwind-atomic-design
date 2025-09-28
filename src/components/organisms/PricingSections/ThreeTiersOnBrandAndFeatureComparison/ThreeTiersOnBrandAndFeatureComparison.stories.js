import Component from './ThreeTiersOnBrandAndFeatureComparison.vue';

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
    tabs: {
      type: 'array',
      description: 'tabs list'
    },
    plans: {
      type: 'array',
      description: 'plans list'
    },
    features: {
      type: 'array',
      description: 'features list'
    },
    perks: {
      type: 'array',
      description: 'perks list'
    }
  },
  parameters: {
    componentSubtitle: 'Display three tiers pricing section on brand and feature comparison'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ThreeTiersOnBrandAndFeatureComparison = Template.bind({});
ThreeTiersOnBrandAndFeatureComparison.args = {
  title: 'Simple pricing, no commitment.',
  description: 'Everything you need, nothing you don\'t. Pick a plan that best suits your business',
  tabs: [
    {
      label: 'Monthly billing',
      action: () => console.log('clicked')
    },
    {
      label: 'Yearly billing',
      action: () => console.log('clicked')
    }
  ],
  plans: [
    {
      title: 'Starter',
      featured: false,
      description: 'All your essential business finances, taken care of.',
      priceMonthly: 5,
      priceYearly: 56,
      mainFeatures: [
        {id: 1, value: 'Basic invoicing'},
        {id: 2, value: 'Easy to use accounting'},
        {id: 3, value: 'Mutli-accounts'},
      ],
    },
    {
      title: 'Scale',
      featured: true,
      description: 'The best financial services for your thriving business.',
      priceMonthly: 19,
      priceYearly: 220,
      mainFeatures: [
        {id: 1, value: 'Advanced invoicing'},
        {id: 2, value: 'Easy to use accounting'},
        {id: 3, value: 'Mutli-accounts'},
        {id: 4, value: 'Tax planning toolkit'},
        {id: 5, value: 'VAT & VATMOSS filing'},
        {id: 6, value: 'Free bank transfers'},
      ],
    },
    {
      title: 'Growth',
      featured: false,
      description: 'Convenient features to take your business to the next level.',
      priceMonthly: 12,
      priceYearly: 140,
      mainFeatures: [
        {id: 1, value: 'Basic invoicing'},
        {id: 2, value: 'Easy to use accounting'},
        {id: 3, value: 'Mutli-accounts'},
        {id: 4, value: 'Tax planning toolkit'},
      ],
    },
  ],
  features: [
    {
      title: 'Tax Savings',
      tiers: [
        {title: 'starter', value: true},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Easy to use accounting',
      tiers: [
        {title: 'starter', value: true},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Multi-accounts',
      tiers: [
        {title: 'starter', value: '3 accounts'},
        {title: 'popular', featured: true, value: 'Unlimited accounts'},
        {title: 'intermediate', value: '7 accounts'},
      ],
    },
    {
      title: 'Invoicing',
      tiers: [
        {title: 'starter', value: '3 invoices'},
        {title: 'popular', featured: true, value: 'Unlimited invoices'},
        {title: 'intermediate', value: '10 invoices'},
      ],
    },
    {
      title: 'Exclusive offers',
      tiers: [
        {title: 'starter', value: false},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: '6 months free advisor',
      tiers: [
        {title: 'starter', value: false},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Mobile and web access',
      tiers: [
        {title: 'starter', value: false},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: false},
      ],
    },
  ],
  perks: [
    {
      title: '24/7 customer support',
      tiers: [
        {title: 'starter', value: true},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Instant notifications',
      tiers: [
        {title: 'starter', value: true},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Budgeting tools',
      tiers: [
        {title: 'starter', value: true},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Digital receipts',
      tiers: [
        {title: 'starter', value: true},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Pots to separate money',
      tiers: [
        {title: 'starter', value: false},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: true},
      ],
    },
    {
      title: 'Free bank transfers',
      tiers: [
        {title: 'starter', value: false},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: false},
      ],
    },
    {
      title: 'Business debit card',
      tiers: [
        {title: 'starter', value: false},
        {title: 'popular', featured: true, value: true},
        {title: 'intermediate', value: false},
      ],
    },
  ]
};
