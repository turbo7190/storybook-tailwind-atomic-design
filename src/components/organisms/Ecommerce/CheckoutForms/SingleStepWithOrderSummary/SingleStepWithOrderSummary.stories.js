import Component from "./SingleStepWithOrderSummary.vue";

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
    componentSubtitle: "Display single step checkout with order summary",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SingleStepWithOrderSummary = Template.bind({});
SingleStepWithOrderSummary.args = {
  products: [
    {
      id: 1,
      title: "Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Black",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
  ],
  priceList: {
    subtotal: 104.0,
    tax: 8.32,
    shipping: 14.0,
    total: 126.32,
  },
  btnText: "Confirm Order",
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
      title: "Shipping Information",
      smCol: 2,
      col: 1,
      children: [
        {
          label: "First Name",
          value: "",
          smCol: 1,
          col: 1,
          type: "Input",
        },
        {
          label: "Last Name",
          value: "",
          smCol: 1,
          col: 1,
          type: "Input",
        },
        {
          label: "Company",
          value: "",
          smCol: 2,
          col: 1,
          type: "Input",
        },
        {
          label: "Address",
          value: "",
          smCol: 2,
          col: 1,
          type: "Input",
        },
        {
          label: "Apartment, suite, etc.",
          value: "",
          smCol: 2,
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
          label: "Country",
          value: "",
          smCol: 1,
          col: 1,
          type: "Select",
          options: [
            { text: "Canada", value: "Canada" },
            { text: "USA", value: "USA" },
          ],
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
        {
          label: "Phone Number",
          value: "",
          smCol: 2,
          col: 1,
          type: "Input",
        },
      ],
    },
    {
      title: "Card Information",
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
          label: "Name on card",
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
  ],
};
