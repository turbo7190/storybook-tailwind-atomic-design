import Component from "./InvoiceTable.vue";

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
    componentSubtitle: "Display an invoice table",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InvoiceTable = Template.bind({});
InvoiceTable.args = {
  title: "Order history",
  description:
    "Check the status of recent orders, manage returns, and download invoices",
  buttons: [
    {
      label: "View Invoice",
      action: () => console.log("clicked"),
    },
  ],
  orders: [
    {
      number: "WU88191111",
      date: "January 22, 2021",
      datetime: "2021-01-22",
      invoiceHref: "#",
      total: "$238.00",
      products: [
        {
          id: 1,
          name: "Machined Pen and Pencil Set",
          href: "#",
          price: "$70.00",
          status: "Delivered Jan 25, 2021",
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip.",
        },
      ],
    },
  ],
};
