import Component from './AlternatingWithOptionalTestimonial.vue';

export default {
  title: 'Components/Organisms/Feature Sections',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'feature items'
    }
  },
  parameters: {
    componentSubtitle: 'Display an alternating feature section with optional testimonial'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const AlternatingWithOptionalTestimonial = Template.bind({});
AlternatingWithOptionalTestimonial.args = {
  items: [
    {
      icon: 'InboxIcon',
      title: 'Stay on top of customer support',
      description: 'Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.',
      btnText: 'Get Started',
      comment: 'Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.',
      user: {
        avatar: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        info: 'Marcia Hill, Digital Marketing Manager'
      },
      screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
    },
    {
      icon: 'SparklesIcon',
      title: 'Better understand your customers',
      description: 'Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.',
      btnText: 'Get Started',
      screenshot: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    }
  ]
};
