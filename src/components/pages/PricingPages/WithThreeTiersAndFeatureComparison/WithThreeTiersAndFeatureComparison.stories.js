import Component from "./WithThreeTiersAndFeatureComparison.vue";

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

export const WithThreeTiersAndFeatureComparison = Template.bind({});
WithThreeTiersAndFeatureComparison.args = {
  faqs: [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ],
};
