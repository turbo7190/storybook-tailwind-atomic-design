import Component from "./SplitWithOrderSummary.vue";

export default {
  title: "Components/Templates/Ecommerce/Checkout Pages",
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

export const SplitWithOrderSummary = Template.bind({});
SplitWithOrderSummary.args = {
  products: [
    {
      id: 1,
      name: "High Wall Tote",
      href: "#",
      price: "$210.00",
      color: "White and black",
      size: "15L",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt:
        "Front of zip tote bag with white canvas, white handles, and black drawstring top.",
    },
    // More products...
  ],
};
