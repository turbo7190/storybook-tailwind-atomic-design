import Component from "./WithFourTiersAndFeatureList.vue";

export default {
  title: "Components/Templates/Pricing Pages",
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

export const WithFourTiersAndFeatureList = Template.bind({});
WithFourTiersAndFeatureList.args = {
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
