import Component from "./FourColumnWithIllustrations.vue";

export default {
  title: "Components/Organisms/Ecommerce/Incentives",
  component: Component,
  argTypes: {
    items: {
      type: "array",
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

export const FourColumnWithIllustrations = Template.bind({});
FourColumnWithIllustrations.args = {
  items: [
    {
      name: "Free Shipping",
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
    },
    {
      name: "24/7 Customer Support",
      description:
        "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
    },
    {
      name: "Fast Shopping Cart",
      description:
        "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
    },
    {
      name: "Gift Cards",
      description:
        "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
    },
  ],
};
