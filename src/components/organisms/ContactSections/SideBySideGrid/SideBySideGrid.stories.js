import Component from './SideBySideGrid.vue';

export default {
  title: 'Components/Organisms/Contact Sections',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'list of contact details'
    },
  },
  parameters: {
    componentSubtitle: 'contact information list in form of a grid'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SideBySideGrid = Template.bind({});
SideBySideGrid.args = {
  items: [ 
    {
      heading: "Get in touch",
      list: [
        {
          heading: "Collaborate",
          title: "support@example.com",
          subtitle: "+1 (555) 123-4567"
        },
        {
          heading: "Press",
          title: "support@example.com",
          subtitle: "+1 (555) 123-4567"
        },
        {
          heading: "Join our team",
          title: "support@example.com",
          subtitle: "+1 (555) 123-4567"
        },
        {
          heading: "Say hello",
          title: "support@example.com",
          subtitle: "+1 (555) 123-4567"
        }
      ] 
    },
    {
      heading: "Locations",
      list: [
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
    }
  ]
};
