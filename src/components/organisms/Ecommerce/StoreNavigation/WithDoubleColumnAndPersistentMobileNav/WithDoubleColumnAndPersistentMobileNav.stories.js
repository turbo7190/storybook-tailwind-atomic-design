import Component from './WithDoubleColumnAndPersistentMobileNav.vue';

export default {
  title: 'Components/Organisms/Ecommerce/Store Navigation',
  component: Component,
  argTypes: {
    content: {
      type: 'string'
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

export const WithDoubleColumnAndPersistentMobileNav = Template.bind({});
WithDoubleColumnAndPersistentMobileNav.args = {
  items: {
    categories: [
      {
        name: 'Women',
        clothing: [
          [
            {name: 'Tops', href: '#'},
            {name: 'Dresses', href: '#'},
            {name: 'Pants', href: '#'},
            {name: 'Denim', href: '#'},
            {name: 'Sweaters', href: '#'},
            {name: 'T-Shirts', href: '#'},
          ],
          [
            {name: 'Jackets', href: '#'},
            {name: 'Activewear', href: '#'},
            {name: 'Shorts', href: '#'},
            {name: 'Swimwear', href: '#'},
            {name: 'Browse All', href: '#'},
          ],
        ],
        accessories: [
          {name: 'Shoes', href: '#'},
          {name: 'Jewelry', href: '#'},
          {name: 'Handbags', href: '#'},
          {name: 'Socks', href: '#'},
          {name: 'Hats', href: '#'},
          {name: 'Browse All', href: '#'},
        ],
        categories: [
          {name: 'New Arrivals', href: '#'},
          {name: 'Sale', href: '#'},
          {name: 'Basic Tees', href: '#'},
          {name: 'Artwork Tees', href: '#'},
        ],
      },
      {
        name: 'Men',
        clothing: [
          [
            {name: 'Dress Shirts', href: '#'},
            {name: 'Pants', href: '#'},
            {name: 'Jackets', href: '#'},
            {name: 'T-Shirts', href: '#'},
            {name: 'Jeans', href: '#'},
            {name: 'Hoodies', href: '#'},
          ],
          [
            {name: 'Vests', href: '#'},
            {name: 'Kilts', href: '#'},
            {name: 'Outdoors', href: '#'},
            {name: 'Capes', href: '#'},
            {name: 'Browse All', href: '#'},
          ],
        ],
        accessories: [
          {name: 'Watches', href: '#'},
          {name: 'Boots', href: '#'},
          {name: 'Fanny Packs', href: '#'},
          {name: 'Sunglasses', href: '#'},
          {name: 'Browse All', href: '#'},
        ],
        categories: [
          {name: 'Just Added', href: '#'},
          {name: 'Clearance', href: '#'},
          {name: 'Graphic Tees', href: '#'},
        ],
      },
    ],
    other: [
      {name: 'Company', href: '#'},
      {name: 'Stores', href: '#'},
    ],
  }
};
