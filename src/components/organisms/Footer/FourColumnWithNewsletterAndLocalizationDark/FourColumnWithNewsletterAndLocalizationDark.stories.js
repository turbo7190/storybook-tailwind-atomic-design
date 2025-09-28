import Component from "./FourColumnWithNewsletterAndLocalizationDark.vue";

export default {
  title: "Components/Organisms/Footers",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
      description: "heading of footer",
    },
    landuageAndCurrencyList: {
      type: "array",
      description: "landuage and currency list of footer",
    },
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

export const FourColumnWithNewsletterAndLocalizationDark = Template.bind({});
FourColumnWithNewsletterAndLocalizationDark.args = {
  heading: "Footer",
  landuageAndCurrencyList: [
    {
      title: "Language",
      subList: ["English", "French", "German", "Japanese", "Spanish"],
    },
    {
      title: "Currency",
      subList: ["ARS", "AUD", "CAD", "CHF", "EUR", "GBP", "JPY", "USD"],
    },
  ],
  items: [
    {
      heading: "Solutions",
      sublist: [
        { title: "Marketing", href: "#" },
        { title: "Analytics", href: "#" },
        { title: "Commerce", href: "#" },
        { title: "Insights", href: "#" },
      ],
    },
    {
      heading: "Support",
      sublist: [
        { title: "Pricing", href: "#" },
        { title: "Documentation", href: "#" },
        { title: "Guides", href: "#" },
        { title: "API Status", href: "#" },
      ],
    },
    {
      heading: "Company",
      sublist: [
        { title: "About", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Jobs", href: "#" },
        { title: "Press", href: "#" },
        { title: "Partners", href: "#" },
      ],
    },
    {
      heading: "Legal",
      sublist: [
        { title: "Claim", href: "#" },
        { title: "Privacy", href: "#" },
        { title: "Terms", href: "#" },
      ],
    },
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
