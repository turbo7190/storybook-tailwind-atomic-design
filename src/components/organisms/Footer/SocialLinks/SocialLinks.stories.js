import Component from "./SocialLinks.vue";

export default {
  title: "Components/Organisms/Footers",
  component: Component,
  argTypes: {
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

export const SocialLinks = Template.bind({});
SocialLinks.args = {
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
