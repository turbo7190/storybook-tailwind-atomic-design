import Component from "./WithSplitImage.vue";

export default {
  title: "Components/Organisms/Ecommerce/Product Features",
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

export const WithSplitImage = Template.bind({});
WithSplitImage.args = {
  heading: "Leatherbound Daily Journal",
  title: "All in the Details",
  desc:
    "We've obsessed over every detail of this handcrafted journal to bring you the" +
    "best materials for daily use.",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  imageAlt:
    "Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen.",
  features: [
    {
      name: "Durable",
      description:
        "The leather cover and machined steel disc binding stand up to daily use for years to come.",
    },
    {
      name: "Refillable",
      description:
        "Buy it once and refill as often as you need. Subscribe and save on routine refills.",
    },
    {
      name: "Thoughtfully designed",
      description:
        "The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.",
    },
    {
      name: "Locally made",
      description:
        "Responsibly and sustainably made real close to wherever you are, somehow.",
    },
  ],
};
