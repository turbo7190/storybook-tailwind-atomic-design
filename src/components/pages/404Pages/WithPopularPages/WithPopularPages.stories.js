import Component from "./WithPopularPages.vue";
import { defineComponent, h } from "vue";
import {
  BookmarkSquareIcon,
  BookOpenIcon,
  RssIcon,
  ListBulletIcon,
} from "@heroicons/vue/24/outline";

export default {
  title: "Components/Templates/404 Pages",
  component: Component,
  argTypes: {
    content: {
      type: "string",
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

export const WithPopularPages = Template.bind({});
WithPopularPages.args = {
  links: [
    {
      title: "Documentation",
      description: "Learn how to integrate our tools with your app",
      icon: BookOpenIcon,
    },
    {
      title: "API Reference",
      description: "A complete API reference for our libraries",
      icon: ListBulletIcon,
    },
    {
      title: "Guides",
      description: "Installation guides that cover popular setups",
      icon: BookmarkSquareIcon,
    },
    {
      title: "Blog",
      description: "Read our latest news and articles",
      icon: RssIcon,
    },
  ],
  social: [
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
