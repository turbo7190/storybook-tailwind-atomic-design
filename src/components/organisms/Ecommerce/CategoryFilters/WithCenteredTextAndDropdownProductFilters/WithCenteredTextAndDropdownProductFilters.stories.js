import Component from './WithCenteredTextAndDropdownProductFilters.vue';

export default {
  title: 'Components/Organisms/Ecommerce/Category Filters',
  component: Component,
  argTypes: {
    filters: {
      type: Array
    },
    sortOptions: {
      type: Array
    }
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithCenteredTextAndDropdownProductFilters = Template.bind({});
WithCenteredTextAndDropdownProductFilters.args = {
  sortOptions: [
    {name: 'Most Popular', href: '#'},
    {name: 'Best Rating', href: '#'},
    {name: 'Newest', href: '#'},
  ],
  filters: [
    {
      id: 'category',
      name: 'Category',
      options: [
        {value: 'tees', label: 'Tees'},
        {value: 'crewnecks', label: 'Crewnecks'},
        {value: 'hats', label: 'Hats'},
      ],
    },
    {
      id: 'brand',
      name: 'Brand',
      options: [
        {value: 'clothing-company', label: 'Clothing Company'},
        {value: 'fashion-inc', label: 'Fashion Inc.'},
        {value: 'shoes-n-more', label: "Shoes 'n More"},
      ],
    },
    {
      id: 'color',
      name: 'Color',
      options: [
        {value: 'white', label: 'White'},
        {value: 'black', label: 'Black'},
        {value: 'grey', label: 'Grey'},
      ],
    },
    {
      id: 'sizes',
      name: 'Sizes',
      options: [
        {value: 's', label: 'S'},
        {value: 'm', label: 'M'},
        {value: 'l', label: 'L'},
      ],
    },
  ]
};
