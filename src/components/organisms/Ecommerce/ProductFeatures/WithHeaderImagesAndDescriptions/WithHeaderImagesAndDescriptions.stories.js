import Component from "./WithHeaderImagesAndDescriptions.vue";

export default {
  title: "Components/Organisms/Ecommerce/Product Features",
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

export const WithHeaderImagesAndDescriptions = Template.bind({});
WithHeaderImagesAndDescriptions.args = {
  title: "The Fine Details",
  desc:
    "Our patented padded snack sleeve construction protects your" +
    "favorite treats from getting smooshed during all-day adventures, long shifts at work, and tough travel" +
    "schedules.",
  features: [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Drawstring top with elastic loop closure and textured interior padding.",
      desc:
        "The 20L model has enough space for 370 candy bars, 6 cylinders of" +
        "chips, 1220 standard gumballs, or any combination of on-the-go treats that your heart desires. Yes, we did" +
        "the math.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Front zipper pouch with included key ring.",
      desc:
        "Up your snack organization game with multiple compartment options." +
        "The quick-access stash pouch is ready for even the most unexpected snack attacks and sharing needs.",
    },
  ],
};
