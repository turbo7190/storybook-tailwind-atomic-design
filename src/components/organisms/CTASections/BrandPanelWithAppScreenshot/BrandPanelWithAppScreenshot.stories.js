import Component from "./BrandPanelWithAppScreenshot.vue";

export default {
  title: "Components/Organisms/CTA Sections",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "section title",
    },
    description: {
      type: "string",
      description: "section description",
    },
    btnText: {
      type: "string",
      description: "action button text",
    },
    screenshot: {
      type: "string",
      description: "screenshot url",
    },
    onClick: {
      action: "clicked",
      description: "button action",
    },
  },
  parameters: {
    componentSubtitle: "Display a brand panel with app screenshot",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const BrandPanelWithAppScreenshot = Template.bind({});
BrandPanelWithAppScreenshot.args = {
  title: "Ready to dive in? Start your free trial today.",
  description:
    "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.",
  btnText: "Sign up for free",
  screenshot:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  onClick: () => console.log("clicked"),
};
