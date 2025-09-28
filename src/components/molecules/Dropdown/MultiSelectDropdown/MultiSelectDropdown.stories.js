import MultiSelectDropdownComp from './MultiSelectDropdown.vue';

export default {
  title: 'Components/Molecules/Dropdown',
  component: MultiSelectDropdownComp,
  argTypes: {
    options: {
      type: 'array'
    },
    label: {
      type: 'string'
    }
  },
  parameters: {
  }
};

const Template = (args) => ({
  components: { MultiSelectDropdownComp },
  setup() {
    return { args };
  },
  template: '<multi-select-dropdown-comp v-bind="args" />',
});

export const MultiSelectDropdown = Template.bind({});
MultiSelectDropdown.args = {
  options: [
    'Batman',
    'Robin',
    'Joker',
  ],
  label: 'Linked Opportunities'
};
