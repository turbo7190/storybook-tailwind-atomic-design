import Component from './SplitTwoTone.vue';

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
    email: {
      type: 'string',
      description: 'email address of company'
    },
    phoneNumber: {
      type: 'string',
      description: 'phone number of company'
    },
    addressLine1: {
      type: 'string',
      description: 'address of company'
    },
    addressLine2: {
      type: 'string',
      description: 'address of company'
    },
    careerLinkUrl: {
      type: 'string',
      description: 'navigation link of company career page'
    },
    onSubmit: {
      action: 'action on button click'
    }
  },
  parameters: {
    componentSubtitle: 'contact form with fields, background and submit information option'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitTwoTone = Template.bind({});
SplitTwoTone.args = {
  heading: "Get in touch",
  subheading: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
  buttonText: "Submit",
  addressLine1: "742 Evergreen Terrace",
  addressLine2: "Springfield, OR 12345",
  phoneNumber: "+1 (555) 123-4567",
  email: "support@example.com",
  careerLinkUrl: '#'
};
