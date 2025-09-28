import Component from './WithComparisonTable.vue';

export default {
  title: 'Components/Organisms/Pricing Sections',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'membership list'
    },
    sections: {
      type: 'array',
      description: 'table list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a pricing section with comparison table'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithComparisonTable = Template.bind({});
WithComparisonTable.args = {
  items: [
    {name: 'Basic', href: '#', priceMonthly: 9, description: 'Quis suspendisse ut fermentum neque vivamus non tellus.'},
    {
      name: 'Essential',
      href: '#',
      priceMonthly: 29,
      description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    },
    {
      name: 'Premium',
      href: '#',
      priceMonthly: 59,
      description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    },
  ],
  sections: [
    {
      name: 'Features',
      features: [
        {name: 'Molestie lobortis massa.', tiers: {Basic: true, Essential: true, Premium: true}},
        {name: 'Urna purus felis.', tiers: {Basic: true, Essential: true, Premium: true}},
        {name: 'Tellus pulvinar sit dictum.', tiers: {Essential: true, Premium: true}},
        {name: 'Convallis.', tiers: {Essential: 'Up to 20 users', Premium: 'Up to 50 users'}},
      ],
    },
    {
      name: 'Reporting',
      features: [
        {name: 'Adipiscing.', tiers: {Basic: true, Essential: true, Premium: true}},
        {name: 'Eget risus integer.', tiers: {Essential: true, Premium: true}},
        {name: 'Gravida leo urna velit.', tiers: {Premium: true}},
        {name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: {Premium: true}},
      ],
    },
    {
      name: 'Support',
      features: [
        {name: 'Sit dignissim.', tiers: {Basic: true, Essential: true, Premium: true}},
        {name: 'Congue at nibh et.', tiers: {Essential: true, Premium: true}},
        {name: 'Volutpat feugiat mattis.', tiers: {Essential: true, Premium: true}},
        {name: 'Tristique pellentesque ornare diam sapien.', tiers: {Premium: true}},
      ],
    },
  ]
};
