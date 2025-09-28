import Component from "./StickyFooter.vue";

export default {
  title: "Components/Organisms/Banners",
  component: Component,
  argTypes: {
    content: {
      type: "string",
      description: "banner content",
    },
    btnText: {
      type: "string",
      description: "banner button text",
    },
    icon: {
      type: "string",
      description: "banner icon",
    },
    onClick: {
      action: "clicked",
      description: "banner button action",
    },
  },
  parameters: {
    componentSubtitle: "Display a sticky banner at bottom",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const StickyFooter = Template.bind({});
StickyFooter.args = {
  content: "Big news! We're excited to announce a brand new product.",
  btnText: "Learn More",
  onClick: () => console.log("clicked"),
  icon: "MegaphoneIcon",
};
