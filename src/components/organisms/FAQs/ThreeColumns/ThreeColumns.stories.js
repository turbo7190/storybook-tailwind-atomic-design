import Component from './ThreeColumns.vue';

export default {
  title: 'Components/Organisms/FAQs',
  component: Component,
  argTypes: {
    heading: {
      type: 'string',
      description: 'heading of faq section'
    },
    faqs: {
      type: 'array',
      description: 'list of faqs'
    }
  },
  parameters: {
    componentSubtitle: 'faq section with three column layout'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  heading: ' Frequently asked questions',
  faqs: [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "What's the best thing about Germany?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "What's the best thing about France?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
};
