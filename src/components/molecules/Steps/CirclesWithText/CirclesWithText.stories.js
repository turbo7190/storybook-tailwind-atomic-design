import Component from './CirclesWithText.vue';

export default {
  title: 'Components/Molecules/Steps',
  component: Component,
  argTypes: {
    content: {
      type: 'string'
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CirclesWithText = Template.bind({});
CirclesWithText.args = {
  items:[
    {
      id: 1,
      name: "Create account",
      description: "Vitae sed mi luctus laoreet.",
      status: "complete",
    },
    {
      id: 2,
      name: "Profile information",
      description: "Cursus semper viverra facilisis et et some more.",
      status: "current",
    },
    {
      id: 3,
      name: "Business information",
      description: "Penatibus eu quis ante.",
      status: "pending",
    },
    {
      id: 4,
      name: "Theme",
      description: "Faucibus nec enim leo et.",
      status: "pending",
    },
    {
      id: 5,
      name: "Preview",
      description: "Iusto et officia maiores porro ad non quas.",
      status: "pending",
    },
  ]
};
export const CirclesWithTextDependancy = Template.bind({});
CirclesWithTextDependancy.args = {
  items:[
    {
      id: 1,
      name: "Create account",
      description: "Vitae sed mi luctus laoreet.",
      status: "complete",
    },
    {
      id: 2,
      name: "Profile information",
      description: "Cursus semper viverra facilisis et et some more.",
      status: "current",
    },
    {
      id: 3,
      name: "Business information",
      description: "Penatibus eu quis ante.",
      status: "pending",
    },
    {
      id: 4,
      name: "Theme",
      description: "Faucibus nec enim leo et.",
      status: "pending",
    },
    {
      id: 5,
      name: "Preview",
      description: "Iusto et officia maiores porro ad non quas.",
      status: "pending",
    },
  ],
  dependancy: true
};
