import Component from './MultiColumn.vue';

export default {
  title: 'Components/Organisms/Ecommerce/Reviews',
  component: Component,
  argTypes: {
    heading: {
      type: 'string'
    },
    items: {
      type: 'array'
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

export const MultiColumn = Template.bind({});
MultiColumn.args = {
  heading: 'Recent reviews',
  items: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: 'Risako M',
      date: 'May 16, 2021',
      datetime: '2021-01-06',
    },
    // More reviews...
  ]
};
