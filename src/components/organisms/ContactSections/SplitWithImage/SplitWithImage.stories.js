import Component from './SplitWithImage.vue';

export default {
  title: 'Components/Organisms/Contact Sections',
  component: Component,
  argTypes: {
    heading: {
      type: 'string',
      description: 'heading of form'
    },
    subheading: {
      type: 'string',
      description: 'subheading of form'
    },
    buttonText: {
      type: 'string',
      description: 'text on form submit button'
    },
    imgSrc: {
      type: 'string',
      description: 'src of the image'
    },
    countryList: {
      type: 'array',
      description: 'used for radio group input'
    },
    onSubmit: {
      action: 'action on button click'
    }
  },
  parameters: {
    componentSubtitle: 'contact form with fields, image and submit information option'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitWithImage = Template.bind({});
SplitWithImage.args = {
  heading: "Let's work together",
  subheading: "We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us.",
  imgSrc: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  buttonText: "Submit",
  radioGroupOptions:  [
    { id: 0, title: "Less than $25k" },
    { id: 1, title: "$25k - $50k" },
    { id: 2, title: "$50k - $100k" },
    { id: 3, title: "$100k+" },
  ],
};
