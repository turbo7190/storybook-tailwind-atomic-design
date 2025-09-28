import Component from './SimpleFourColumn.vue';

export default {
  title: 'Components/Organisms/Contact Sections',
  component: Component,
  argTypes: {
    heading: {
      type: 'string',
      description: 'heading of contact section'
    },
    subheading: {
      type: 'string',
      description: 'subheading of contact section'
    },
    items: {
      type: 'array',
      description: 'list of contact details'
    },
  },
  parameters: {
    componentSubtitle: 'contact information list in form of a 4 column layout'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleFourColumn = Template.bind({});
SimpleFourColumn.args = {
  heading: "Our offices",
  subheading: "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  items: [
    {
      heading: "Los Angeles",
      title: "4556 Brendan Ferry",
      subtitle: "Los Angeles, CA 90210"
    },
    {
      heading: "New York",
      title: "886 Walter Streets",
      subtitle: "New York, NY 12345"
    },
    {
      heading: "Toronto",

      title: "7363 Cynthia Pass",
      subtitle: "Toronto, ON N3Y 4H8"
    },
    {
      heading: "Chicago",
      title: "726 Mavis Island",
      subtitle: "Chicago, IL 60601"
    }
  ] 
};
