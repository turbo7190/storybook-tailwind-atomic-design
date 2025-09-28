import Component from "./DriveContainer.vue";

export default {
  title: "Components/Atoms/Containers",
  component: Component,
  argTypes: {
    onRightClick: {
      action: "clicked",
      description: "right click action",
    },
    onDrag: {
      action: "clicked",
      description: "drag action",
    },
    onDrop: {
      action: "clicked",
      description: "drop action",
    },
    isActive: {
      type: "boolean",
      description: "active status",
    },
    isAdmin: {
      type: "boolean",
      description: "check whether or not user is admin",
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

export const DriveContainer = Template.bind({});
DriveContainer.args = {
  isActive: true,
  isAdmin: true,
};
