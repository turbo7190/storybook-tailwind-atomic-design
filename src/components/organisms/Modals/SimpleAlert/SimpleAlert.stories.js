import Component from "./SimpleAlert.vue";
import * as heroIcons from "@heroicons/vue/24/outline";

export default {
  title: "Components/Organisms/Modals",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "modal title",
    },
    description: {
      type: "string",
      description: "modal description",
    },
    icon: {
      control: { type: "select" },
      options: Object.keys(heroIcons),
      description: "modal icon",
    },
    yesBtnText: {
      type: "string",
      description: "yes button text",
    },
    noBtnText: {
      type: "string",
      description: "no button text",
    },
    onYesClick: {
      action: "clicked",
      description: "yes button action",
    },
    onNoClick: {
      action: "clicked",
      description: "no button action",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple modal",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleAlert = Template.bind({});
SimpleAlert.args = {
  title: "Deactivate account",
  description:
    "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.",
  icon: "ExclamationTriangleIcon",
  yesBtnText: "Deactivate",
  onYesClick: () => console.log("yes clicked"),
  noBtnText: "Cancel",
  onNoClick: () => console.log("no clicked"),
};
