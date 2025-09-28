import Component from './SideBySide.vue';

export default {
  title: 'Components/Organisms/FAQs',
  component: Component,
  rgTypes: {
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
    componentSubtitle: 'faq section with side by side layout'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SideBySide = Template.bind({});
SideBySide.args = {
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
