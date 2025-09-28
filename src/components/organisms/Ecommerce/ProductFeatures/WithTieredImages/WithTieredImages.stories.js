import Component from "./WithTieredImages.vue";

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

export const WithTieredImages = Template.bind({});
WithTieredImages.args = {
  heading: "Machined Kettle",
  title: "Elegant simplicity",
  images: [
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system.",
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Detail of temperature setting button on kettle bass with digital degree readout.",
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Kettle spout pouring boiling water into coffee grounds in pour-over mug.",
    },
  ],
  features: [
    {
      name: "Sleek design",
      description:
        "The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.",
    },
    {
      name: "Comfort handle",
      description: "Shaped for steady pours and insulated to prevent burns.",
    },
    {
      name: "One-button control",
      description:
        "The one button control has a digital readout for setting temperature and turning the kettle on and off.",
    },
    {
      name: "Long spout",
      description:
        "Designed specifically for controlled pour-overs that don't slash or sputter.",
    },
  ],
};
