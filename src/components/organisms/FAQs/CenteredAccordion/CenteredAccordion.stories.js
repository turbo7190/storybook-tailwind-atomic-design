import Component from './CenteredAccordion.vue';

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
    componentSubtitle: 'faq section with disclosure'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CenteredAccordion = Template.bind({});
CenteredAccordion.args = {
  heading: ' Frequently asked questions',
  faqs: [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Germany?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about UK?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
};
