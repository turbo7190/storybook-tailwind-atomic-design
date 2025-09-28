import Component from "./InvoiceListWithQuickActions.vue";

export default {
  title: "Components/Organisms/Ecommerce/Order History",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "title",
    },
    description: {
      type: "string",
      description: "description",
    },
    orders: {
      type: "array",
      description: "orders list",
    },
    buttons: {
      type: "array",
      description: "buttons list",
    },
  },
  parameters: {
    componentSubtitle: "Display an invoice list with quick actions",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InvoiceListWithQuickActions = Template.bind({});
InvoiceListWithQuickActions.args = {
  orders: [
    {
      number: "4376",
      status: "Delivered on January 22, 2021",
      href: "#",
      invoiceHref: "#",
      products: [
        {
          id: 1,
          name: "Machined Brass Puzzle",
          href: "#",
          price: "$95.00",
          color: "Brass",
          size: '3" x 3" x 3"',
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Brass puzzle in the shape of a jack with overlapping rounded posts.",
        },
        // More products...
      ],
    },
    // More orders...
  ],
  title: "Your Orders",
  description:
    "Check the status of recent orders, manage returns, and discover similar products",
  buttons: [
    {
      label: "Buy again",
      type: "primary",
      action: () => console.log("clicked"),
    },
    {
      label: "Shop similar",
      type: "secondary",
      action: () => console.log("clicked"),
    },
  ],
};
