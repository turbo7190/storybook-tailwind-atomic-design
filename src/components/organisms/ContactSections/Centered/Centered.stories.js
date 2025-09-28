import Component from './Centered.vue';

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
    privacyPolicyLinkUrl: {
      type: 'string',
      description: 'navigation link for privacy policy'
    },
    cookiePolicyLinkUrl: {
      type: 'string',
      description: 'navigation link for cookie policy'
    },
    buttonText: {
      type: 'string',
      description: 'text on form submit button'
    },
    countryList: {
      type: 'array',
      description: 'used for phonenumber input'
    },
    onSubmit: {
      action: 'action on button click'
    }
  },
  parameters: {
    componentSubtitle: 'contact form with first name, last name, email, company name, phone number options, link to privacy and cookie policy and submit information option'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Centered = Template.bind({});
Centered.args = {
  heading: 'Contact sales',
  subheading: ' Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
  formObject: {},
  buttonText: "Let's Talk",
  countryList: ['US', 'CA', 'EU'],
  privacyPolicyLinkUrl: '#',
  cookiePolicyLinkUrl: '#'
};
