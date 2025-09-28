import Component from './OffsetWithSupportingText.vue';

export default {
  title: 'Components/Organisms/FAQs',
  component: Component,
  argTypes: {
    heading: {
      type: 'string',
      description: 'heading of faq section'
    },
    supportingTexr: {
      type: 'string',
      description: 'text to show below heading'
    },
    supportLink: {
      type: 'object',
      description: 'label and link of support team etc.'
    },
    faqs: {
      type: 'array',
      description: 'list of faqs'
    }
  },
  parameters: {
    componentSubtitle: 'faq section with supporting text and link to support team'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const OffsetWithSupportingText = Template.bind({});
OffsetWithSupportingText.args = {
  heading: ' Frequently asked questions',
  supportingText:"Can’t find the answer you’re looking for? Reach out to our",
  supportLink: {
    label: 'Customer Support Team',
    url: '#'
  },
  faqs: [
    {
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    // More questions...
  ]
};
