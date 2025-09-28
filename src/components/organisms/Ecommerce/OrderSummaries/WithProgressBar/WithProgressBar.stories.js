import Component from "./WithProgressBar.vue";

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
    componentSubtitle: "Display a order summary view with progress bar",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithProgressBar = Template.bind({});
WithProgressBar.args = {
  title: "Order #3345345",
  btnText: "View Invoice",
  date: "March 22, 2021",
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
  steps: ["Order placed", "Processing", "Shipped", "Delivered"],
  products: [
    {
      id: 1,
      name: "Nomad Tumbler",
      description:
        "This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.",
      href: "#",
      price: "35.00",
      status: "Preparing to ship",
      step: 1,
      date: "March 24, 2021",
      datetime: "2021-03-24",
      address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
      email: "f•••@example.com",
      phone: "1•••••••••40",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Insulated bottle with white base and black snap lid.",
    },
    {
      id: 2,
      name: "Minimalist Wristwatch",
      description:
        "This contemporary wristwatch has a clean, minimalist look and high quality components.",
      href: "#",
      price: "149.00",
      status: "Shipped",
      step: 0,
      date: "March 23, 2021",
      datetime: "2021-03-23",
      address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
      email: "f•••@example.com",
      phone: "1•••••••••40",
      imageSrc:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.",
    },
    // More products...
  ],
};
