import Component from './WithExpandableProductFilterPanel.vue';

export default {
  title: 'Components/Organisms/Ecommerce/Category Filters',
  component: Component,
  argTypes: {
    sortOptions: {
      type: Array
    },
    filters: {
      type: Array
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithExpandableProductFilterPanel = Template.bind({});
WithExpandableProductFilterPanel.args = {
  filters: {
    price: [
      {value: '0', label: '$0 - $25', checked: false},
      {value: '25', label: '$25 - $50', checked: false},
      {value: '50', label: '$50 - $75', checked: false},
      {value: '75', label: '$75+', checked: false},
    ],
    color: [
      {value: 'white', label: 'White', checked: false},
      {value: 'beige', label: 'Beige', checked: false},
      {value: 'blue', label: 'Blue', checked: true},
      {value: 'brown', label: 'Brown', checked: false},
      {value: 'green', label: 'Green', checked: false},
      {value: 'purple', label: 'Purple', checked: false},
    ],
    size: [
      {value: 'xs', label: 'XS', checked: false},
      {value: 's', label: 'S', checked: true},
      {value: 'm', label: 'M', checked: false},
      {value: 'l', label: 'L', checked: false},
      {value: 'xl', label: 'XL', checked: false},
      {value: '2xl', label: '2XL', checked: false},
    ],
    category: [
      {value: 'all-new-arrivals', label: 'All New Arrivals', checked: false},
      {value: 'tees', label: 'Tees', checked: false},
      {value: 'objects', label: 'Objects', checked: false},
      {value: 'sweatshirts', label: 'Sweatshirts', checked: false},
      {value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false},
    ],
  },
  sortOptions: [
    {name: 'Most Popular', href: '#', current: true},
    {name: 'Best Rating', href: '#', current: false},
    {name: 'Newest', href: '#', current: false},
  ],
};
