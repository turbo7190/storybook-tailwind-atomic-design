import Component from "./InvoiceList.vue";

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
    componentSubtitle: "Display an invoice list",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InvoiceList = Template.bind({});
InvoiceList.args = {
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
      date: "January 22, 2021",
      datetime: "2021-01-22",
      href: "#",
      invoiceHref: "#",
      total: "$302.00",
      products: [
        {
          id: 1,
          name: "Nomad Tumbler",
          description:
            "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
          href: "#",
          price: "$35.00",
          status: "out-for-delivery",
          date: "January 5, 2021",
          datetime: "2021-01-05",
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
      ],
    },
  ],
};
