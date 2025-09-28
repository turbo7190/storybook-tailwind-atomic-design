import Component from "./WithMobileOrderSummaryOverlay.vue";

export default {
  title: "Components/Organisms/Ecommerce/Checkout Forms",
  component: Component,
  argTypes: {
    forms: {
      type: "array",
      description: "forms list",
    },
    products: {
      type: "array",
      description: "products list",
    },
    priceList: {
      type: "object",
      description: "pricing list",
    },
    btnText: {
      type: "string",
      description: "action button text",
    },
  },
  parameters: {
    componentSubtitle: "Display checkout with mobile order summary overlay",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithMobileOrderSummaryOverlay = Template.bind({});
WithMobileOrderSummaryOverlay.args = {
  products: [
    {
      id: 1,
      name: "Micro Backpack",
      href: "#",
      price: "$70.00",
      color: "Moss",
      size: "5L",
      imageSrc:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
    },
    // More products...
  ],
  priceList: {
    subtotal: 570,
    tax: 47.6,
    shipping: 25,
    total: 126.32,
    due: 232,
  },
  btnText: "Pay Now",
  forms: [
    {
      title: "Contact Information",
      smCol: 2,
      col: 1,
      children: [
        {
          label: "Email address",
          value: "",
          smCol: 2,
          col: 1,
          type: "Input",
        },
      ],
    },
    {
      title: "Payment details",
      smCol: 3,
      col: 1,
      children: [
        {
          label: "Card Number",
          value: "",
          smCol: 3,
          col: 1,
          type: "Input",
        },
        {
          label: "Expiration Date (MM/YY)",
          value: "",
          smCol: 2,
          col: 1,
          type: "Input",
        },
        {
          label: "CVC",
          value: "",
          smCol: 1,
          col: 1,
          type: "Input",
        },
      ],
    },
    {
      title: "Shipping address",
      smCol: 3,
      col: 1,
      children: [
        {
          label: "Address",
          value: "",
          smCol: 3,
          col: 1,
          type: "Input",
        },
        {
          label: "City",
          value: "",
          smCol: 1,
          col: 1,
          type: "Input",
        },
        {
          label: "State / Province",
          value: "",
          smCol: 1,
          col: 1,
          type: "Input",
        },
        {
          label: "Postal Code",
          value: "",
          smCol: 1,
          col: 1,
          type: "Input",
        },
      ],
    },
    {
      title: "Billing information",
      smCol: 1,
      col: 1,
      children: [
        {
          label: "Same as shipping information",
          value: true,
          smCol: 1,
          col: 1,
          type: "Checkbox",
        },
      ],
    },
  ],
};
