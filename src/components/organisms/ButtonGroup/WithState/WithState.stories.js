import Component from './WithState.vue';

export default {
    title: 'Components/Organisms/ButtonGroup',
    component: Component,
    argTypes: {
        iconName: {
            type: 'string'
        },
        iconLabel: {
            type: 'string'
        },
        count: {
            type: 'string'
        },
    },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithState = Template.bind({});
WithState.args = {
    iconName: "BookmarkIcon",
    iconLabel: "Bookmark",
    count: "12k"
};
