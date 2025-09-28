import Component from './WithDropdownProductFilters.vue';

export default {
  title: 'Components/Organisms/Ecommerce/Category Filters',
  component: Component,
  argTypes: {
    filters: {
      type: Array
    },
    sortOptions: {
      type: Array
    },
    activeFilters: {
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

export const WithDropdownProductFilters = Template.bind({});
WithDropdownProductFilters.args = {
  sortOptions: [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
  ],
  filters: [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
        { value: 'tees', label: 'Tees', checked: false },
        { value: 'objects', label: 'Objects', checked: true },
      ],
    },
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
      ],
    },
    {
      id: 'sizes',
      name: 'Sizes',
      options: [
        { value: 's', label: 'S', checked: false },
        { value: 'm', label: 'M', checked: false },
        { value: 'l', label: 'L', checked: false },
      ],
    },
  ],
  activeFilters: [{ value: 'objects', label: 'Objects' }]
};
