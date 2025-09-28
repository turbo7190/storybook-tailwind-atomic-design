import Component from "./Simple.vue";
import * as heroIcons from "@heroicons/vue/24/outline";

export default {
  title: "Components/Organisms/Empty States",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: Object.keys(heroIcons),
      description: "icon name",
    },
    title: {
      type: "string",
      description: "state title",
    },
    description: {
      type: "string",
      description: "state description",
    },
    btnText: {
      type: "string",
      description: "action button text",
    },
    btnIcon: {
      type: "string",
      description: "action button icon",
    },
    onClick: {
      action: "clicked",
      description: "button action",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple Empty State",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  icon: "FolderPlusIcon",
  title: "No projects",
  description: "Get started by creating a new project.",
  btnText: "New project",
  btnIcon: "PlusIcon",
  onClick: () => console.log("clicked"),
};
