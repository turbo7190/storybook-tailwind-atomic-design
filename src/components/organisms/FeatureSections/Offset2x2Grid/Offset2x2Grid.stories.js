import Component from "./Offset2x2Grid.vue";

export default {
  title: "Components/Organisms/Feature Sections",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "section title",
    },
    items: {
      type: "array",
      description: "section feature items",
    },
  },
  parameters: {
    componentSubtitle: "Display a offset 2x2 grid feature section",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Offset2x2Grid = Template.bind({});
Offset2x2Grid.args = {
  title: "A better way to send money.",
  items: [
    {
      name: "Competitive rates",
      description:
        "Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",
      icon: "GlobeAltIcon",
    },
    {
      name: "No hidden fees",
      description:
        "Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",
      icon: "ScaleIcon",
    },
    {
      name: "Instant transfers",
      description:
        "Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",
      icon: "BoltIcon",
    },
    {
      name: "Reminder emails",
      description:
        "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
      icon: "EnvelopeIcon",
    },
  ],
};
