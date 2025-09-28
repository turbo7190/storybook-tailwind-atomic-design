import Component from './TwoColumnWIthSignUp.vue';

export default {
  title: 'Components/Organisms/Blog Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'blog title'
    },
    description: {
      type: 'string',
      description: 'blog description'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    posts: {
      type: 'array',
      description: 'blog posts data'
    }
  },
  parameters: {
    componentSubtitle: 'Display blog section as 2 columns with signup'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TwoColumnWithSignUp = Template.bind({});
TwoColumnWithSignUp.args = {
  title: 'Press',
  description: 'Get weekly articles in your inbox on how to grow your business.',
  btnText: 'Notify me',
  posts: [
    {
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
    },
    {
      title: 'Writing effective landing page copy',
      href: '#',
      description:
        'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
      date: 'Jan 29, 2020',
      datetime: '2020-01-29',
    },
  ]
};
