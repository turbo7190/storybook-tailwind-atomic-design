import Comp from './Multiple.vue';

export default {
  title: 'Components/Atoms/Toggles',
  component: Comp,
  argTypes: {
    data: {
      type: 'array',
      description: 'all tree data'
    },
    onToggle: {
      action: 'clicked',
      description: 'toggle action'
    },
    onCollapsed: {
      action: 'clicked',
      description: 'collapse action'
    }
  },
  parameters: {
    componentSubtitle: 'Display multiple toggles view in tree structure'
  }
};

const ToggleTemplate = (args) => ({
  components: { Comp },
  setup() {
    return { args };
  },
  template: '<Comp v-bind="args" />',
});

export const Multiple = ToggleTemplate.bind({});
Multiple.args = {
  
};
