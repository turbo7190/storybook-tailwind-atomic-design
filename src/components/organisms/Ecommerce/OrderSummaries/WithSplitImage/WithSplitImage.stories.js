import Component from "./WithSplitImage.vue";

export default {
  title: "Components/Organisms/Ecommerce/Order Summaries",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label",
    },
    image: {
      type: "string",
      description: "image",
    },
    title: {
      type: "string",
      description: "title",
    },
    description: {
      type: "string",
      description: "description",
    },
    products: {
      type: "array",
      description: "products list",
    },
    priceList: {
      type: "object",
      description: "pricing list",
    },
    extraInfo: {
      type: "array",
      description: "extra order info",
    },
    btnText: {
      type: "string",
      description: "detail button text",
    },
  },
  parameters: {
    componentSubtitle: "Display an order summary with split image",
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
  label: "Payment successful",
  title: "Thanks for ordering",
  description:
    "We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!",
  priceList: {
    subtotal: 104.0,
    tax: 8.32,
    shipping: 14.0,
    total: 126.32,
  },
  extraInfo: [
    {
      label: "Shipping address",
      list: ["Kristin Watson", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    },
    {
      label: "Billing address",
      list: ["Kristin Watson", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    },
  ],
  btnText: "Continue Shopping",
  products: [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      price: "$36.00",
      color: "Charcoal",
      size: "L",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Model wearing men's charcoal basic tee in large.",
    },
  ],
  image:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
};
