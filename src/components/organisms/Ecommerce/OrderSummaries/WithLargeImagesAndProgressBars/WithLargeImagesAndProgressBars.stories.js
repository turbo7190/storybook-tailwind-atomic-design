import Component from "./WithLargeImagesAndProgressBars.vue";

export default {
  title: "Components/Organisms/Ecommerce/Order Summaries",
  component: Component,
  argTypes: {
    products: {
      type: "array",
      description: "products list",
    },
    title: {
      type: "string",
      description: "page title",
    },
    orderNumber: {
      type: "string",
      description: "order number",
    },
    date: {
      type: "string",
      description: "order created date",
    },
    btnText: {
      type: "string",
      description: "button text",
    },
    priceList: {
      type: "object",
      description: "price list",
    },
    extraInfo: {
      type: "array",
      description: "extra order info",
    },
    steps: {
      type: "array",
      description: "progress bar steps",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a order summary view with large images and progress bars",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithLargeImagesAndProgressBars = Template.bind({});
WithLargeImagesAndProgressBars.args = {
  title: "Order Details",
  btnText: "View Invoice",
  orderNumber: "W086438695",
  date: "March 22, 2021",
  priceList: {
    subtotal: 104.0,
    tax: 8.32,
    shipping: 14.0,
    total: 126.32,
  },
  products: [
    {
      id: 1,
      name: "Distant Mountains Artwork Tee",
      price: "$36.00",
      description:
        "You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?",
      address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
      email: "f•••@example.com",
      phone: "1•••••••••40",
      href: "#",
      status: "Processing",
      step: 1,
      date: "March 24, 2021",
      datetime: "2021-03-24",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.",
    },
    // More products...
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
  ],
  steps: ["Order placed", "Processing", "Shipped", "Delivered"],
};
