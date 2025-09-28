import Component from "./StackedWithFooterActions.vue";

export default {
  title: "Components/Organisms/Flyout Menus",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "menu label",
    },
    list1: {
      type: "array",
      description: "menu list 1 items",
    },
    list2: {
      type: "array",
      description: "menu list 2 items",
    },
  },
  parameters: {
    componentSubtitle: "Display a stacked flyout menu with footer actions",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const StackedWithFooterActions = Template.bind({});
StackedWithFooterActions.args = {
  label: "Solutions",
  list1: [
    {
      name: "Analytics",
      description:
        "Get a better understanding of where your traffic is coming from.",
      href: "#",
      icon: "ChartBarIcon",
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: "CursorArrowRaysIcon",
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure.",
      href: "#",
      icon: "ShieldCheckIcon",
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      icon: "Squares2X2Icon",
    },
    {
      name: "Automations",
      description:
        "Build strategic funnels that will drive your customers to convert",
      href: "#",
      icon: "ArrowPathIcon",
    },
  ],
  list2: [
    { name: "Watch Demo", href: "#", icon: "PlayIcon" },
    { name: "Contact Sales", href: "#", icon: "PhoneIcon" },
  ],
};
