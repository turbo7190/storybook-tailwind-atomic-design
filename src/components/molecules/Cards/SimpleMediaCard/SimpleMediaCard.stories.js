import Component from "./SimpleMediaCard.vue";

export default {
  title: "Components/Molecules/Cards",
  component: Component,
  argTypes: {
    media: {
      type: "object",
      description: "media object",
    },
    onClick: {
      action: "clicked",
      decription: "button action",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple media card with thumbnail",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleMediaCard = Template.bind({});
SimpleMediaCard.args = {
  onClick: () => console.log("clicked"),
  media: {
    member: {
      type: "IMAGE",
      source:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      name: "Mountain Landscape.jpg",
    },
  },
};
