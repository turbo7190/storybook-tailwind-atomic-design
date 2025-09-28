import Component from "./WithSquareImages.vue";

export default {
  title: "Components/Organisms/Ecommerce/Product Features",
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

export const WithSquareImages = Template.bind({});
WithSquareImages.args = {
  heading: "Focus",
  title: "Simple productivity",
  desc:
    "Focus allows you to plan 10 daily tasks, while also thinking ahead about what's" +
    "next. Forget distracting digital apps and embrace these small, sturdy pieces of paper.",
  features: [
    {
      name: "Three card types",
      description:
        "Today, Next, and Someday cards allow you to defer your dreams into the future.",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Green cardstock box containing white, beige, and brown cards.",
    },
    {
      name: "The perfect mix",
      description:
        "Each refill pack contains plenty of cards to last you a month of procrastination.",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Green cardstock box open with 50 cards inside.",
    },
    {
      name: "Dot grid backs",
      description:
        "Flip a card over to doodle during meetings when you should be listening.",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Detail of white today card, beige next card, and brown someday card with dot grid.",
    },
    {
      name: "Refill packs",
      description:
        "Subscribe and save on routine refill packs to keep you productive all year long.",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.",
    },
  ],
};
