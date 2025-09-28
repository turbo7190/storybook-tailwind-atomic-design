import Component from "./DarkWithIllustration.vue";

export default {
  title: "Components/Organisms/Hero Sections",
  component: Component,
  argTypes: {
    navigation: {
      type: "array",
      description: "navigation items",
    },
    title: {
      type: "string",
      description: "section title",
    },
    subtitle: {
      type: "string",
      description: "section subtitle",
    },
    description: {
      type: "string",
      description: "section description",
    },
    placeholder: {
      type: "string",
      description: "input placeholder",
    },
    btnText: {
      type: "string",
      description: "button text",
    },
    helpText: {
      type: "string",
      description: "help text",
    },
    image: {
      type: "string",
      description: "background image",
    },
  },
  parameters: {
    componentSubtitle: "Display a dark hero sections with illustration",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const DarkWithIllustration = Template.bind({});
DarkWithIllustration.args = {
  navigation: [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ],
  title: "A better way to",
  subtitle: "ship web apps",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
  placeholder: "Enter your email",
  helpText:
    "Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our terms of service",
  btnText: "Start free trial",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
};
