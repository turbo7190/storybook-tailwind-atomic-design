import Component from "./WithParagraphOnBrand.vue";

export default {
  title: "Components/Organisms/Newsletter Sections",
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
    placeholder: {
      type: "string",
      description: "input form placeholder",
    },
    value: {
      type: "string",
      description: "input value",
    },
    btnText: {
      type: "string",
      description: "action button text",
    },
    onClick: {
      action: "clicked",
      description: "button action",
    },
    helpText: {
      type: "string",
      description: "input form help text",
    },
    linkText: {
      type: "string",
      description: "link text",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a simple newsletter with paragraph on brand card",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithParagraphOnBrandCard = Template.bind({});
WithParagraphOnBrandCard.args = {
  title: "Want product news and updates?",
  description: "Sign up for our newsletter to stay up to date.",
  placeholder: "Enter your email",
  value: "",
  btnText: "Notify me",
  onClick: () => console.log("clicked"),
  helpText: "We care about the protection of your data. Read our",
  linkText: "Privacy Policy",
};
