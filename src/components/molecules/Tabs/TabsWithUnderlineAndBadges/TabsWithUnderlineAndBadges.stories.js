import Component from './TabsWithUnderlineAndBadges.vue';

export default {
  title: 'Components/Molecules/Tabs',
  component: Component,
  argTypes: {
    tabs: {
      type: 'array',
      description: 'the list of tabs'
    }
  },
  parameters: {
    componentSubtitle: 'Display tabs with underline and badges'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TabsWithUnderlineAndBadges = Template.bind({});
TabsWithUnderlineAndBadges.args = {
  tabs:  [
    { name: 'Applied', href: '#', count: '52', current: false },
    { name: 'Phone Screening', href: '#', count: '6', current: false },
    { name: 'Interview', href: '#', count: '4', current: true },
    { name: 'Offer', href: '#', current: false },
    { name: 'Disqualified', href: '#', current: false },
  ]
};
