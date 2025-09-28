import Component from "./SplitWithScreenshot.vue";

export default {
  title: "Components/Organisms/Hero Sections",
  component: Component,
  argTypes: {
    screenshot: {
      type: "string",
      description: "screenshot",
    },
    title: {
      type: "string",
      description: "section title",
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
    rateText: {
      type: "string",
      description: "rating text",
    },
  },
  parameters: {
    componentSubtitle: "Display a hero section splitting with screenshot",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitWithScreenshot = Template.bind({});
SplitWithScreenshot.args = {
  title: "Server management for growing teams",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  placeholder: "Enter your email",
  btnText: "Notify me",
  rateText: "Rated 5 stars by over 500 beta users",
  screenshot:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
};
