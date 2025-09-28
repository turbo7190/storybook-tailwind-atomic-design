import Component from "./WithIcons.vue";

export default {
  title: "Components/Organisms/Command Palettes",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "items list",
    },
    quickActions: {
      type: "array",
      description: "quick actions list",
    },
  },
  parameters: {
    componentSubtitle: "Display a command palettes with icons",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    { id: 1, name: "Workflow Inc. / Website Redesign", url: "#" },
    // More projects...
  ],
  quickActions: [
    {
      name: "Add new file...",
      icon: "DocumentPlusIcon",
      shortcut: "N",
      url: "#",
    },
    {
      name: "Add new folder...",
      icon: "FolderPlusIcon",
      shortcut: "F",
      url: "#",
    },
    { name: "Add hashtag...", icon: "HashtagIcon", shortcut: "H", url: "#" },
    { name: "Add label...", icon: "TagIcon", shortcut: "L", url: "#" },
  ],
};
