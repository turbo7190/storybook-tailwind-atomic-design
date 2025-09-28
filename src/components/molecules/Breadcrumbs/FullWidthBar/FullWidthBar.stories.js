import Component from "./FullWidthBar.vue";
import * as heroIcons from "@heroicons/vue/24/solid";

export default {
  title: "Components/Molecules/Breadcrumbs/FullWidthBar",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "array of pages to be displayed in breadcrumbs",
    },
    iconName: {
      control: { type: "select" },
      options: Object.keys(heroIcons),
      description: "name of hero icon",
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an array of pages that can be used to display navigation trail.",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithHomeIcon = Template.bind({});
WithHomeIcon.args = {
  items: [
    { name: "Projects", href: "#", current: false },
    { name: "Project Nero", href: "#", current: true },
  ],
  iconName: "HomeIcon",
};
WithHomeIcon.parameters = {
  docs: {
    storyDescription: "with home icon displayed at start",
  },
};

export const WithCapIcon = Template.bind({});
WithCapIcon.args = {
  items: [
    { name: "Institution", href: "#", current: false },
    { name: "Campus", href: "#", current: false },
    { name: "School", href: "#", current: true },
  ],
  iconName: "AcademicCapIcon",
};
WithCapIcon.parameters = {
  docs: {
    storyDescription: "With Academic cap icon shown at start. Can use any icon",
  },
};
