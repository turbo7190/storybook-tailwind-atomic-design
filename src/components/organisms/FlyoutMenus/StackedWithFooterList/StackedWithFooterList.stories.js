import Component from "./StackedWithFooterList.vue";

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
    linkText: {
      type: "string",
      description: "menu item link text",
    },
    secondListLabel: {
      type: "string",
      description: "second list label",
    },
  },
  parameters: {
    componentSubtitle: "Display a stacked flyout menu with footer list",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const StackedWithFooterList = Template.bind({});
StackedWithFooterList.args = {
  label: "Solutions",
  list1: [
    {
      name: "Help Center",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "#",
      icon: "LifebuoyIcon",
    },
    {
      name: "Guides",
      description:
        "Learn how to maximize our platform to get the most out of it.",
      href: "#",
      icon: "BookmarkSquareIcon",
    },
    {
      name: "Events",
      description:
        "See what meet-ups and other events we might be planning near you.",
      href: "#",
      icon: "CalendarIcon",
    },
    {
      name: "Security",
      description: "Understand how we take your privacy seriously.",
      href: "#",
      icon: "ShieldCheckIcon",
    },
  ],
  list2: [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
      id: 2,
      name: "How to use search engine optimization to drive traffic to your site",
      href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
  ],
  linkText: "Learn More",
  secondListLabel: "Recent Posts",
};
