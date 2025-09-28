import Component from "./WithOrderSummarySidebar.vue";

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

export const WithOrderSummarySidebar = Template.bind({});
WithOrderSummarySidebar.args = {
  subtotal: "$210.00",
  discount: { code: "CHEAPSKATE", amount: "$24.00" },
  taxes: "$23.68",
  shipping: "$22.00",
  total: "$341.68",
  products: [
    {
      id: 1,
      name: "Micro Backpack",
      href: "#",
      price: "$70.00",
      color: "Moss",
      size: "5L",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt:
        "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
    },
    // More products...
  ],
};
