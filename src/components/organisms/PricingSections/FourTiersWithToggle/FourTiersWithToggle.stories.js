import Component from './FourTiersWithToggle.vue';

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
    tiers: {
      type: 'array',
      description: 'tiers list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a four tiers pricing section with toggle'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const FourTiersWithToggle = Template.bind({});
FourTiersWithToggle.args = {
  title: 'Pricing Plans',
  description: 'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
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
  tiers: [
    {
      name: 'Hobby',
      href: '#',
      priceMonthly: 12,
      description: 'All the basics for starting a new business',
      includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
    },
    {
      name: 'Freelancer',
      href: '#',
      priceMonthly: 24,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'Potenti felis, in cras at at ligula nunc. ',
        'Orci neque eget pellentesque.',
        'Donec mauris sit in eu tincidunt etiam.',
      ],
    },
    {
      name: 'Startup',
      href: '#',
      priceMonthly: 32,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'Potenti felis, in cras at at ligula nunc. ',
        'Orci neque eget pellentesque.',
        'Donec mauris sit in eu tincidunt etiam.',
        'Faucibus volutpat magna.',
      ],
    },
    {
      name: 'Enterprise',
      href: '#',
      priceMonthly: 48,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'Potenti felis, in cras at at ligula nunc. ',
        'Orci neque eget pellentesque.',
        'Donec mauris sit in eu tincidunt etiam.',
        'Faucibus volutpat magna.',
        'Id sed tellus in varius quisque.',
        'Risus egestas faucibus.',
        'Risus cursus ullamcorper.',
      ],
    },
  ]
};
