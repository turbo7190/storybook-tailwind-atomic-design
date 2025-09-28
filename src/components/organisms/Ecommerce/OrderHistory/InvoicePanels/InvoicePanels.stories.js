import Component from "./InvoicePanels.vue";

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
    componentSubtitle: "Display invoice panels",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InvoicePanels = Template.bind({});
InvoicePanels.args = {
  title: "Order history",
  description:
    "Check the status of recent orders, manage returns, and download invoices",
  buttons: [
    {
      label: "View Order",
      action: () => console.log("clicked"),
    },
    {
      label: "View Invoice",
      action: () => console.log("clicked"),
    },
  ],
  orders: [
    {
      number: "WU88191111",
      href: "#",
      invoiceHref: "#",
      createdDate: "Jul 6, 2021",
      createdDatetime: "2021-07-06",
      deliveredDate: "July 12, 2021",
      deliveredDatetime: "2021-07-12",
      total: "$160.00",
      products: [
        {
          id: 1,
          name: "Micro Backpack",
          description:
            "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
          href: "#",
          price: "$70.00",
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
        },
      ],
    },
  ],
};
