import Component from "./MultiStep.vue";

export default {
  title: "Components/Organisms/Ecommerce/Checkout Forms",
  component: Component,
  argTypes: {
    products: {
      type: "array",
      description: "products list",
    },
    priceList: {
      type: "object",
      description: "pricing list",
    },
    forms: {
      type: "array",
      description: "forms list",
    },
    btnText: {
      type: "string",
      description: "action button text",
    },
    extraInfo: {
      type: "array",
      description: "extra checkout info",
    },
  },
  parameters: {
    componentSubtitle: "Display multi step checkout form",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const MultiStep = Template.bind({});
MultiStep.args = {
  products: [
    {
      id: 1,
      name: "Women's Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Gray",
      size: "S",
      imageSrc:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Front of women's basic tee in heather gray.",
    },
    // More products...
  ],
  priceList: {
    subtotal: 104.0,
    tax: 8.32,
    shipping: 14.0,
    total: 126.32,
  },
  forms: [
    {
      label: "Email address",
      type: "input",
      value: "",
    },
    {
      label: "Phone number",
      type: "input",
      value: "",
    },
    {
      label:
        "I have read the terms and conditions and agree to the sale of my personal information to the highest bidder.",
      type: "checkbox",
      value: false,
    },
  ],
  btnText: "Continue",
  extraInfo: [
    "Payment Details",
    "Shipping Address",
    "Billing Address",
    "Review",
  ],
};
