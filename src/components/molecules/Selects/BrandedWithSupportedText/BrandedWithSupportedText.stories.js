
import Component from './BrandedWithSupportedText.vue';

export default {
  title: 'Components/Molecules/Selects',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'list to populate select'
    },
    selectedItem: {
      type:'string',
      description: 'selected value'
    },
    label: {
      type: 'string',
      description: 'label of select'
    }
  },
  parameters: {
    componentSubtitle:
      'Displays a Select with list of items with specific style',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const BrandedWithSupportedText = Template.bind({});
BrandedWithSupportedText.args = {
  items:  [
    { title: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
    { title: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
  ],
  label: 'Change published status',
  selectedItem:  { title: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true }
  
};
