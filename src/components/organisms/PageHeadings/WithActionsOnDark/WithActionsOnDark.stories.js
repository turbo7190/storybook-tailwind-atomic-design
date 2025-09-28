import Component from './WithActionsOnDark.vue';

export default {
  title: 'Components/Organisms/Page Headings',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'header title'
    },
    buttons: {
      type: 'array',
      description: 'header action buttons list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a page header on dark'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithActionsOnDark = Template.bind({});
WithActionsOnDark.args = {
  title: 'Back End Developer',
  buttons: [
    {
      label: 'Edit',
      type: 'primary',
      onClick: () => console.log('clicked'),
      customClass: 'bg-gray-600'
    },
    {
      label: 'Publish',
      type: 'primary',
      onClick: () => console.log('clicked'),
    }
  ],
};
