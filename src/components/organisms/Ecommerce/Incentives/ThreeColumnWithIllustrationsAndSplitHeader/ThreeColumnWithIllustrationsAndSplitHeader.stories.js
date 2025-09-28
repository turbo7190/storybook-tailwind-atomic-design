import Component from "./ThreeColumnWithIllustrationsAndSplitHeader.vue";

export default {
  title: "Components/Organisms/Ecommerce/Incentives",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
    },
    description: {
      type: "string",
    },
    imageSrc: {
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

export const ThreeColumnWithIllustrationsAndSplitHeader = Template.bind({});
ThreeColumnWithIllustrationsAndSplitHeader.args = {
  heading: "We built our business on customer service",
  description:
    "At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  items: [
    {
      name: "Free shipping",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: "10-year warranty",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
      description:
        "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: "Exchanges",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ],
};
