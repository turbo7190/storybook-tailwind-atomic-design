import IconsComp from "./Icons.vue";
import * as heroIcons from "@heroicons/vue/24/solid";

export default {
  title: "Components/Atoms/Icons",
  component: IconsComp,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["5", "6", "8", "9"],
      description: "assign size to icon",
    },
    color: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500", "white"],
      description: "assign color to icon",
    },
    name: {
      control: { type: "select" },
      options: Object.keys(heroIcons),
      description: "name of hero icon",
    },
    hoverTextColor: {
      control: { type: "select" },
      options: ["gray-700", "red-700", "green-700", "white"],
      description: "assign hover color",
    },
    isOutline: {
      type: "boolean",
      description: "switch between outline and solid icons",
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an icon that can be used with any other control or by itself",
  },
};

const IconsTemplate = (args) => ({
  components: { IconsComp },
  setup() {
    return { args };
  },
  template: '<icons-comp v-bind="args" />',
});

export const Icon = IconsTemplate.bind({});
Icon.args = {
  size: "5",
  color: "red-500",
  name: "AcademicCapIcon",
};

export const Sizes = (args) => ({
  components: { IconsComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <icons-comp v-bind="args" size="6" />
      <icons-comp v-bind="args" size="8" />
      <icons-comp v-bind="args" size="9" />
      <icons-comp v-bind="args" size="10" />
    </div>
  `,
});

Sizes.args = {
  color: "green-800",
  name: "HomeIcon",
};

Sizes.parameters = {
  docs: {
    storyDescription: "sizes of icon",
  },
};

export const Color = (args) => ({
  components: { IconsComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <icons-comp v-bind="args" color="red-400" name="AcademicCapIcon" />
      <icons-comp v-bind="args" color="green-400" name="HomeIcon" />
      <icons-comp v-bind="args" color="gray-400" name="TruckIcon" />
    </div>
  `,
});

Color.parameters = {
  docs: {
    storyDescription: "use color to set icon color",
  },
};

export const HoverColor = (args) => ({
  components: { IconsComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <icons-comp
        v-bind="args"
        color="red-400"
        name="AcademicCapIcon"
        hover-text-color="red-800"
      />
      <icons-comp
        v-bind="args"
        color="green-400"
        name="HomeIcon"
        hover-text-color="green-800"
      />
      <icons-comp
        v-bind="args"
        color="gray-400"
        name="TruckIcon"
        hover-text-color="gray-800"
      />
    </div>
  `,
});

HoverColor.parameters = {
  docs: {
    storyDescription: "use hoverColor to change color on hovering over icon",
  },
};
export const outlineAndSolidIcons = (args) => ({
  components: { IconsComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <icons-comp v-bind="args" :is-outline="true" name="AcademicCapIcon" />
      <icons-comp v-bind="args" name="AcademicCapIcon" />
      <icons-comp v-bind="args" :is-outline="true" name="TruckIcon" />
      <icons-comp v-bind="args" name="TruckIcon" />
    </div>
  `,
});
outlineAndSolidIcons.args = {
  color: "green-800",
};

outlineAndSolidIcons.parameters = {
  docs: {
    storyDescription: "use to switch between outline and solid icons",
  },
};
