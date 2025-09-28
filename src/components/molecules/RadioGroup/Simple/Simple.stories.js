import Component from './Simple.vue';

export default {
  title: 'Components/Molecules/Radio Groups',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'label to be shown on top of group'
    },
    description: {
      type: 'string',
      description: 'text to be shown below label'
    },
    items: {
      type: 'array',
      description: 'list of items'
    },
    inline: {
      type: 'boolean',
      description: 'toggle between vertical and horizontal view'
    },
    isSimpleList: {
      type: 'boolean',
      description: 'when set to true allows simple lists like list of string or numbers'
    },
    displayProp: {
      type: 'string',
      description: 'used with list of objects to allow custom prop for displaying'
    }
  },
  parameters: {
    componentSubtitle:
      'Simple Radio Group layout with options to show Label and description, toggle between vertical and inline(horizontal) view, use list of objects (by default) with option to chose display prop, display list of strings when isSimpleList is set',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});
const DEFAULT_ARGS = {
  label: 'Notifications',
  description: 'How do you prefer to receive notifications?',
  items: [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ],
  selectedItem: { id: 'sms', title: 'Phone (SMS)' }
};

export const Simple = Template.bind({});
Simple.args = DEFAULT_ARGS;
export const SimpleInline = Template.bind({});
SimpleInline.args = {
  ...DEFAULT_ARGS,
  inline: true
};
export const SimpleWithListOfStrings = Template.bind({});
SimpleWithListOfStrings.args = {
  label: 'Simple List',
  items: ['item 1', 'item 2', 'item 3'],
  value: 'item 2',
  isSimpleList: true
}
