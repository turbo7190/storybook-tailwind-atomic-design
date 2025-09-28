import Component from "./SimpleWithFullOrderDetails.vue";

export default {
  title: "Components/Organisms/Ecommerce/Order Summaries",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label",
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
  },
  parameters: {
    componentSubtitle: "Display a simple order summary with full order details",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithFullOrderDetails = Template.bind({});
SimpleWithFullOrderDetails.args = {
  label: "thank you!",
  title: "It's on the way!",
  description: "Your order #14034056 has shipped and will be with you soon.",
  priceList: {
    subtotal: 104.0,
    tax: 8.32,
    shipping: 14.0,
    total: 126.32,
  },
  products: [
    {
      id: 1,
      name: "Cold Brew Bottle",
      description:
        "This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.",
      href: "#",
      quantity: 1,
      price: "$32.00",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Glass bottle with black plastic pour top and mesh insert.",
    },
  ],
  extraInfo: [
    {
      label: "Shipping address",
      list: ["Kristin Watson", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    },
    {
      label: "Billing address",
      list: ["Kristin Watson", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    },
    {
      label: "Payment method",
      list: ["Apple pay", "Mastercard", "****4515"],
    },
    {
      label: "Shipping method",
      list: ["DHL", "Takes up to 3 working days"],
    },
  ],
};
