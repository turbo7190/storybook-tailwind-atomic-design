import Component from "./SettingFormContainer.vue";

export default {
  title: "Components/Molecules/Containers",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "title",
    },
    description: {
      type: "string",
      description: "description",
    },
  },
  parameters: {
    componentSubtitle: "Display a setting form container",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SettingFormContainer = Template.bind({});
SettingFormContainer.args = {
  title: "Test",
  description: "This is a test",
};
