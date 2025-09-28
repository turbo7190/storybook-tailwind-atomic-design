import Component from './Simple.vue';

export default {
  title: 'Components/Molecules/Textareas',
  component: Component,
  argTypes: {
    value: {
      type: 'string',
      description: 'value of textarea'
    },
    label: {
      type: 'string',
      description: 'label of textarea'
    },
    placeholder: {
      type: 'string',
      description: 'placeholder of textarea'
    },
    customClass: {
      type: 'string',
      description: 'extra class of textarea form'
    },
  },
  parameters: {
    componentSubtitle: 'Display a simple textarea'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  label: 'Add your comment',
  placeholder: '',
  value: '',
  customClass: ''
};
