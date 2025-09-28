import Component from './WithSummaryChart.vue';

export default {
  title: 'Components/Organisms/Ecommerce/Reviews',
  component: Component,
  argTypes: {
    heading: {
      type: 'string'
    },
    content: {
      type: 'object'
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

export const WithSummaryChart = Template.bind({});
WithSummaryChart.args = {
  heading: 'Customer Reviews',
  content: {
    average: 4,
    totalCount: 1624,
    subHeading: 'Share your thoughts',
    description: 'If you’ve used this product, share your thoughts with other customers',
    linkText: 'Write a review',
    counts: [
      {rating: 5, count: 1019},
      {rating: 4, count: 162},
      {rating: 3, count: 97},
      {rating: 2, count: 199},
      {rating: 1, count: 147},
    ],
  },
  items: [
      {
        id: 1,
        rating: 5,
        content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
        author: 'Emily Selman',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      // More reviews...
    ],
};
