import Component from './WithInlineActionsAndExpandableSidebarFilters.vue';

export default {
  title: 'Components/Organisms/Ecommerce/Category Filters',
  component: Component,
  argTypes: {
    sortOptions: {
      type: Array
    },
    subCategories: {
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

export const WithInlineActionsAndExpandableSidebarFilters = Template.bind({});
WithInlineActionsAndExpandableSidebarFilters.args = {
  sortOptions: [
    {name: 'Most Popular', href: '#', current: true},
    {name: 'Best Rating', href: '#', current: false},
    {name: 'Newest', href: '#', current: false},
    {name: 'Price: Low to High', href: '#', current: false},
    {name: 'Price: High to Low', href: '#', current: false},
  ],
  subCategories: [
    {name: 'Totes', href: '#'},
    {name: 'Backpacks', href: '#'},
    {name: 'Travel Bags', href: '#'},
    {name: 'Hip Bags', href: '#'},
    {name: 'Laptop Sleeves', href: '#'},
  ],
  filters: [
    {
      id: 'color',
      name: 'Color',
      options: [
        {value: 'white', label: 'White', checked: false},
        {value: 'beige', label: 'Beige', checked: false},
        {value: 'blue', label: 'Blue', checked: true},
        {value: 'brown', label: 'Brown', checked: false},
        {value: 'green', label: 'Green', checked: false},
        {value: 'purple', label: 'Purple', checked: false},
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        {value: 'new-arrivals', label: 'New Arrivals', checked: false},
        {value: 'sale', label: 'Sale', checked: false},
        {value: 'travel', label: 'Travel', checked: true},
        {value: 'organization', label: 'Organization', checked: false},
        {value: 'accessories', label: 'Accessories', checked: false},
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        {value: '2l', label: '2L', checked: false},
        {value: '6l', label: '6L', checked: false},
        {value: '12l', label: '12L', checked: false},
        {value: '18l', label: '18L', checked: false},
        {value: '20l', label: '20L', checked: false},
        {value: '40l', label: '40L', checked: true},
      ],
    },
  ]
};
