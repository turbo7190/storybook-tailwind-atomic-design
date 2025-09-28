import Component from "./FullWidth.vue";

export default {
  title: "Components/Organisms/Flyout Menus",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "menu label",
    },
    linkText: {
      type: "string",
      description: "menu item link text",
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
    componentSubtitle: "Display a full width flyout menu",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Solutions",
  linkText: "Learn More",
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
  ],
  list2: [
    { name: "Watch Demo", href: "#", icon: "PlayIcon" },
    { name: "View All Products", href: "#", icon: "CheckCircleIcon" },
    { name: "Contact Sales", href: "#", icon: "PhoneIcon" },
  ],
};
