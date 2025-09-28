import Component from './WithTransitionAndSlotForContent.vue';

export default {
  title: 'Components/Organisms/Side Overs',
  component: Component,
  argTypes: {
    closeSidebar: {
      action: 'close sidebar'
    },
    sidebarOpen: {
      type: 'boolean',
      description: 'flag to open sidebar'
    }
  },
  parameters: {
    componentSubtitle: 'Display an empty panel with slot'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template:   `<component v-bind="args">
                  <div class="text-sm text-gray-900 font-semibold p-4">
                    Slot to place content
                  </div>
              </component>`,
});

export const WithTransitionAndSlotForContent = Template.bind({});
WithTransitionAndSlotForContent.args = {
  sidebarOpen: true
};
