import Component from './Confirm.vue';

export default {
  title: 'Components/Organisms/Modals',
  component: Component,
  argTypes: {
    showConfirmModal: {
      type: 'boolean',
      description: 'show confirm modal'
    },
    title: {
      type: 'string',
      description: 'title'
    },
    message: {
      type: 'string',
      description: 'message'
    },
    yesTxt: {
      type: 'string',
      description: 'yes button text'
    },
    noTxt: {
      type: 'string',
      description: 'no button text'
    },
    onYes: {
      action: 'clicked',
      description: 'yew button action'
    },
    onNo: {
      action: 'clicked',
      description: 'no button action'
    },
    onCloseModal: {
      action: 'clicked',
      description: 'closing action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a confirm modal with message and buttons'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<Component v-bind="args" />',
});


export const Confirm = Template.bind({});
Confirm.args = {
  showConfirmModal: true,
  title: 'Confirm',
  message: 'Do you really want to delete this item?',
  yesTxt: 'Remove',
  noTxt: 'Cancel'
};



