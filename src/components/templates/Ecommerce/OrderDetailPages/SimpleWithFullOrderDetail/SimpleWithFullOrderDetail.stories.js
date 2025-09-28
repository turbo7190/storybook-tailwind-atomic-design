import Component from "./SimpleWithFullOrderDetail.vue";

export default {
  title: "Components/Templates/Ecommerce/Order Detail Pages",
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

export const SimpleWithFullOrderDetail = Template.bind({});
SimpleWithFullOrderDetail.args = {
  products: [
    {
      id: 1,
      name: "Cold Brew Bottle",
      description:
        "This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.",
      href: "#",
      quantity: 1,
      price: "$32.00",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt: "Glass bottle with black plastic pour top and mesh insert.",
    },
  ],
};
