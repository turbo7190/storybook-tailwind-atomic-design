import Component from './SplitWithImage.vue';

export default {
  title: 'Components/Organisms/CTA Sections',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'section label'
    },
    title: {
      type: 'string',
      description: 'section title'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    image: {
      type: 'string',
      description: 'logo url'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a brand panel with spliting image'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitWithImage = Template.bind({});
SplitWithImage.args = {
  label: 'AWARD WINNING SUPPORT',
  title: 'We\'re here to help',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
  btnText: 'Visit the help center',
  image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply',
  onClick: () => console.log('clicked'),
};
