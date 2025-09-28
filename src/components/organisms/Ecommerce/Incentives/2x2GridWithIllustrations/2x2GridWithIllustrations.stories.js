import Component from "./2x2GridWithIllustrations.vue";

export default {
  title: "Components/Organisms/Ecommerce/Incentives",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
    },
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

export const TwoX2GridWithIllustrations = Template.bind({});
TwoX2GridWithIllustrations.args = {
  heading: "Our Items",
  items: [
    {
      name: "Free delivery",
      imageSrc:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: "10-year warranty",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
      description:
        "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
    },
    {
      name: "Exchanges",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
      description:
        "We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.",
    },
    {
      name: "For the planet",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
      description:
        "Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",
    },
  ],
};
