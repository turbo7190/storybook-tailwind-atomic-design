import Component from "./SimpleWithBrandContactPanel.vue";

export default {
  title: "Components/Templates/Contact Pages",
  component: Component,
  argTypes: {
    content: {
      type: "string",
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

export const SimpleWithBrandContactPanel = Template.bind({});
SimpleWithBrandContactPanel.args = {
  navigation: [
    { name: "Changelog", href: "#" },
    { name: "About", href: "#" },
    { name: "Partners", href: "#" },
    { name: "News", href: "#" },
  ],
  offices: [
    {
      id: 1,
      city: "Los Angeles",
      address: ["4556 Brendan Ferry", "Los Angeles, CA 90210"],
    },
    {
      id: 2,
      city: "New York",
      address: ["886 Walter Streets", "New York, NY 12345"],
    },
    {
      id: 3,
      city: "Toronto",
      address: ["7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    },
    { id: 4, city: "London", address: ["114 Cobble Lane", "London N1 2EF"] },
  ],
};
