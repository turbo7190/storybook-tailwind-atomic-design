import Component from "./DropdownWithIcons.vue";

export default {
  title: "Components/Molecules/Dropdown",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label to be shown on dropdown",
    },
    items: {
      type: "array",
      description: "list to populate dropdown",
    },
    menuItemClicked: { action: "menuItemClicked" },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const DropdownWithIcons = Template.bind({});
DropdownWithIcons.args = {
  label: "Options",
  customClass: "ml-40",
  items: [
    {
      name: "Edit",
      icon: "PencilIcon",
    },
    {
      name: "Duplicate",
      icon: "DocumentDuplicateIcon",
    },
    {
      name: "Archive",
      icon: "ArchiveBoxIcon",
    },
    {
      name: "Move",
      icon: "ArrowRightCircleIcon",
    },
    {
      name: "Share",
      icon: "UserPlusIcon",
    },
    {
      name: "Add to favorites",
      icon: "HeartIcon",
    },
    {
      name: "Delete",
      icon: "TrashIcon",
    },
  ],
};
