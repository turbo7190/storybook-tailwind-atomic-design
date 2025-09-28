import Component from './BrandedWithBackgroundImage.vue';

export default {
  title: 'Components/Organisms/Header Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    bgImage: {
      type: 'string',
      description: 'background image'
    }
  },
  parameters: {
    componentSubtitle: 'Display a header section with background image'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const BrandedWithBackgroundImage = Template.bind({});
BrandedWithBackgroundImage.args = {
  title: 'Get in touch',
  description: 'Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.',
  bgImage: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
};
