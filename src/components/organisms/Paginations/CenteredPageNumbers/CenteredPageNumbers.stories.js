import Component from './CenteredPageNumbers.vue';

export default {
  title: 'Components/Organisms/Pagination',
  component: Component,
  argTypes: {
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
    componentSubtitle: 'Display a pagination with centered page numbers'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CenteredPageNumbers = Template.bind({});
CenteredPageNumbers.args = {
  pages: [
    1, 2, 3, '...', 8, 9, 10
  ],
  currentPage: 2,
};
