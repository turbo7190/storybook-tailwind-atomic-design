import Component from './TwoColumnsOnBrand.vue';

export default {
  title: 'Components/Organisms/FAQs/Brand',
  component: Component,
  argTypes: {
    heading: {
      type: 'string',
      description: 'heading of faq section'
    },
    faqs: {
      type: 'array',
      description: 'list of faqs'
    },
    background:  {
      control: {type: 'select'},
      options: ['gray-700', 'red-700', 'green-700', 'primary-700'],
      description: 'background color according to theme'
    },
    textColor:  {
      ontrol: {type: 'select'},
      options: ['white','black'],
      description: 'text color for heading, questions'
    },
    textBrandColor:  {
      ontrol: {type: 'select'},
      options: ['gray-200', 'red-200', 'green-200', 'primary-200'],
      description: 'text color according to theme'
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

export const TwoColumnsOnBrand = Template.bind({});
TwoColumnsOnBrand.args = {
  heading: ' Frequently asked questions',
  background: 'primary-700',
  textColor: 'white',
  textBrandColor: 'primary-200',
  faqs: [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "What's the best thing about France?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "What's the best thing about Germany?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
};
export const TwoColumnsOnBrandGreen = Template.bind({});
TwoColumnsOnBrandGreen.args = {
  heading: ' Frequently asked questions',
  background: 'green-700',
  textColor: 'white',
  textBrandColor: 'green-200',
  faqs: [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "What's the best thing about France?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "What's the best thing about Germany?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
};
