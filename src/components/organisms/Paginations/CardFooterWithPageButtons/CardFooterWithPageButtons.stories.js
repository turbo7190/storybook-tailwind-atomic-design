import Component from './CardFooterWithPageButtons.vue';

export default {
  title: 'Components/Organisms/Pagination',
  component: Component,
  argTypes: {
    totalCount: {
      type: 'number',
      description: 'items total count',
    },
    first: {
      type: 'number',
      description: 'first item index in current page'
    },
    last: {
      type: 'number',
      description: 'last item index in current page'
    },
    pages: {
      type: 'array',
      description: 'pages index list'
    },
    currentPage: {
      type: 'number',
      description: 'current page index'
    }
  },
  parameters: {
    componentSubtitle: 'Display a pagination in card footer with page buttons'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CardFooterWithPageButtons = Template.bind({});
CardFooterWithPageButtons.args = {
  totalCount: 97,
  first: 1,
  last: 10,
  pages: [
    1, 2, 3, '...', 8, 9, 10
  ],
  currentPage: 1,
};
