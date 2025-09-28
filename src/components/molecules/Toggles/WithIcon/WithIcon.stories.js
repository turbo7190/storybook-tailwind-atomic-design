import Component from "./WithIcon.vue";

export default {
  title: "Components/Molecules/Toggles",
  component: Component,
  argTypes: {
    value: {
      value: "boolean",
      description: "toggle value",
    },
    label: {
      value: "string",
      description: "toggle label",
    },
    enableIcon: {
      value: "string",
      description: "Icon in enabled status",
    },
    disableIcon: {
      value: "string",
      description: "Icon in disabled status",
    },
    enableBg: {
      value: "string",
      description: "enabled background color",
    },
    disableBg: {
      value: "string",
      description: "disabled background color",
    },
    focusBorderColor: {
      value: "string",
      description: "focus border color",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple toggle with icon",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Use Setting",
  value: false,
  enableIcon: "CheckIcon",
  disableIcon: "XMarkIcon",
  enableBg: "primary-600",
  disableBg: "gray-200",
  focusBorderColor: "primary-500",
};
