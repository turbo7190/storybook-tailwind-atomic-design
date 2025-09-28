import Component from './SplitBrandPanel.vue';

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
    title: {
      type: 'string',
      description: 'address of company'
    },
    onSubmit: {
      action: 'action on button click'
    }
  },
  parameters: {
    componentSubtitle: 'contact form with fields, gradient side background with contact information and submit information option'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitBrandPanel = Template.bind({});
SplitBrandPanel.args = {
  title: "Send us a message",
  heading: "Contact information",
  subheading: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
  buttonText: "Submit",
  phoneNumber: "+1 (555) 123-4567",
  email: "support@workcation.com"
};
