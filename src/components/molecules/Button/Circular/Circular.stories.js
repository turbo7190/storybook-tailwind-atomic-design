import Component from "./Circular.vue";
import * as heroIcons from "@heroicons/vue/24/solid";

export default {
  title: "Components/Molecules/Button/Circular",
  component: Component,
  argTypes: {
    padding: {
      type: "string",
      description: "padding for button",
    },
    iconName: {
      control: { type: "select" },
      options: Object.keys(heroIcons),
      description: "name of hero icon",
    },
    iconSize: {
      control: { type: "select" },
      options: ["5", "6", "8", "9"],
      description: "assign size to icon",
    },
    isOutline: {
      type: "boolean",
      description: "switch between outline and solid icons",
    },
    textColor: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500", "white"],
      description: "assign color to icon or text",
    },
    bgColor: {
      control: { type: "select" },
      options: ["gray-700", "red-700", "green-700", "black"],
      description: "assign background color to button",
    },
    hoverBgColor: {
      control: { type: "select" },
      options: ["gray-900", "red-900", "green-900", "gray-100"],
      description: "assign hover background color to button",
    },
  },
  parameters: {
    componentSubtitle: "Fab button with icon",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  padding: "3",
};
Default.parameters = {
  doc: {
    storyDescription: "fab button with default properties",
  },
};

export const Sizes = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `
    <div class="space-x-3">
      <component v-bind="args" size="5" padding="3" />
      <component v-bind="args" size="5" padding="5" />
      <component v-bind="args" size="5" padding="6" />
    </div>
  `,
});

Sizes.args = {
  iconName: "HomeIcon",
};

Sizes.parameters = {
  docs: {
    storyDescription: "sizes of fab button",
  },
};

export const Colors = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `
    <div class="space-x-3">
      <component
        v-bind="args"
        text-color="gray-300"
        bg-color="gray-900"
        hover-bg-color="gray-700"
      />
      <component
        v-bind="args"
        text-color="red-300"
        bg-color="red-900"
        hover-bg-color="red-700"
      />
      <component
        v-bind="args"
        text-color="green-300"
        bg-color="green-900"
        hover-bg-color="green-700"
      />
    </div>
  `,
});

Colors.args = {
  iconName: "HomeIcon",
  size: "5",
  padding: "5",
};

Colors.parameters = {
  docs: {
    storyDescription: "background, hover and icon color of fab button",
  },
};
export const outlineAndSolidIcons = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <component v-bind="args" is-outline icon-name="AcademicCapIcon" />
      <component v-bind="args" icon-name="AcademicCapIcon" />
      <component v-bind="args" is-outline icon-name="TruckIcon" />
      <component v-bind="args" icon-name="TruckIcon" />
    </div>
  `,
});
outlineAndSolidIcons.args = {
  padding: "5",
};

outlineAndSolidIcons.parameters = {
  docs: {
    storyDescription: "use to switch between outline and solid icons",
  },
};
