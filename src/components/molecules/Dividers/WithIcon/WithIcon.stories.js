import Component from "./WithIcon.vue";
import * as heroIcons from "@heroicons/vue/24/solid";

export default {
  title: "Components/Molecules/Dividers",
  component: Component,
  argTypes: {
    content: {
      type: "string",
    },
    label: {
      type: "string",
      description: "label to show with divider",
    },
    isIcon: {
      type: "boolean",
      description: "toggle visibility of icon",
    },
    position: {
      control: { type: "select" },
      options: ["start", "end", "center"],
      description: "position of label and icon",
    },
    textColor: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500", "white"],
      description: "assign color to icon and label",
    },
    iconName: {
      control: { type: "select" },
      options: Object.keys(heroIcons),
      description: "name of hero icon",
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  isIcon: true,
  iconName: "PlusIcon",
  position: "center",
};
WithIcon.parameters = {
  docs: {
    storyDescription: "isIcon and iconName to show icon",
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Continue",
  position: "center",
};

export const WithLabelOnLeft = Template.bind({});
WithLabelOnLeft.args = {
  label: "Continue",
  position: "start",
};
WithLabelOnLeft.parameters = {
  docs: {
    storyDescription: "using position to show label at start",
  },
};
