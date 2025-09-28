import Component from "./SimpleCentered.vue";

export default {
  title: "Components/Organisms/Footers",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "list of footer columns",
    },
    logos: {
      type: "array",
      description: "list of footer logos",
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

export const SimpleCentered = Template.bind({});
SimpleCentered.args = {
  items: [
    { title: "About", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Jobs", href: "#" },
    { title: "Press", href: "#" },
    { title: "Accessibility", href: "#" },
    { title: "Partners", href: "#" },
  ],
  logos: [
    {
      name: "Facebook",
      href: "#",
      icon: "UserGroupIcon",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "PhotoIcon",
    },
    {
      name: "Twitter",
      href: "#",
      icon: "ChatBubbleLeftRightIcon",
    },
    {
      name: "GitHub",
      href: "#",
      icon: "CodeBracketIcon",
    },
    {
      name: "Dribbble",
      href: "#",
      icon: "PaintBrushIcon",
    },
  ],
};
