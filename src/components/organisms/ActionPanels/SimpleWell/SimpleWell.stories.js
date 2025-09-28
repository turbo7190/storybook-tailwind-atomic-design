import Component from './SimpleWell.vue';

export default {
  title: 'Components/Organisms/Action Panels',
  component: Component,
  argTypes: {
    title: {
      value: 'string',
      description: 'title of panel'
    },
    description: {
      value: 'string',
      description: 'description of panel'
    },
    onClick: {
      action: 'clicked',
      control: null,
      description: 'action of button'
    },
    btnText: {
      value: 'string',
      description: 'button text'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple well panel with title, description and button.'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWell = Template.bind({});
SimpleWell.args = {
  title: 'Need more bandwidth?',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.',
  onClick: () => {
    // console.log('clicked')
  },
  btnText: 'Contract Sales'
};
