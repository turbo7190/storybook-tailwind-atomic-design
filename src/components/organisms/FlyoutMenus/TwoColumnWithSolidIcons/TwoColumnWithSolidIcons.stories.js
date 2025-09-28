import Component from "./TwoColumnWithSolidIcons.vue";

export default {
  title: "Components/Organisms/Flyout Menus",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "menu label",
    },
    list: {
      type: "array",
      description: "menu list items",
    },
    title: {
      type: "string",
      description: "footer title",
    },
    description: {
      type: "string",
      description: "footer description",
    },
    badgeText: {
      type: "string",
      description: "footer badge text",
    },
  },
  parameters: {
    componentSubtitle: "Display two column flyout menu with solid icons",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TwoColumnWithSolidIcons = Template.bind({});
TwoColumnWithSolidIcons.args = {
  label: "Solutions",
  list: [
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
    {
      name: "Reports",
      description:
        "Get detailed reports that will help you make more informed decisions",
      href: "#",
      icon: "DocumentTextIcon",
    },
  ],
  title: "Enterprise",
  description: "Empower your entire team with even more advanced tools.",
  badgeText: "New",
};
