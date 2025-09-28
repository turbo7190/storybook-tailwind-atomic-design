import Component from './SimpleTwoColumn.vue';

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
    componentSubtitle: 'contact information list in form of a 2 column layout'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleTwoColumn = Template.bind({});
SimpleTwoColumn.args = {
  items: [
    {
      title: 'Sales Support',
      description: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      list: [ 
        {
          icon: 'PhoneIcon',
          line:'+1 (555) 123 4567',
          subline: 'Mon-Fri 8am to 6pm PST'
        },
        {
          icon: 'EnvelopeIcon',
          line:'support@example.com'
        },
      ]
    },
    {
      title: 'Technical Support',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat error corporis doloribus similique, voluptatibus numquam quam, quae officiis facilis.',
      list: [ 
        {
          icon: 'PhoneIcon',
          line:'+1 (555) 123 4567',
          subline: 'Mon-Fri 8am to 6pm PST'
        },
        {
          icon: 'EnvelopeIcon',
          line:'support@example.com'
        },
      ]
    }
  ]
};
