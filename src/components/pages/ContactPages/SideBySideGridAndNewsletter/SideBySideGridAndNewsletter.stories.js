import Component from "./SideBySideGridAndNewsletter.vue";

export default {
  title: "Components/Templates/Contact Pages",
  component: Component,
  argTypes: {
    content: {
      type: "string",
    },
    navigation: {
      type: "array",
      description: "Navigation menu items",
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

export const SideBySideGridAndNewsletter = Template.bind({});
SideBySideGridAndNewsletter.args = {
  navigation: [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ],
  faqs: [
    {
      id: 1,
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "What do you call someone with no body and no nose?",
      answer:
        "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 4,
      question: "Why do you never see elephants hiding in trees?",
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ],
};
