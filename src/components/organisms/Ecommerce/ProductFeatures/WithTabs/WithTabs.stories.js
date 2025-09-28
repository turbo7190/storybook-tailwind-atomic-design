import Component from "./WithTabs.vue";

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

export const WithTabs = Template.bind({});
WithTabs.args = {
  title: "Technical Specifications",
  desc:
    "The Organize modular system offers endless options for arranging your favorite" +
    "and most used items. Keep everything at reach and in its place, while dressing up your workspace.",
  tabs: [
    {
      name: "Design",
      features: [
        {
          name: "Adaptive and modular",
          description:
            "The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.",
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Maple organizer base with slots, supporting white polycarbonate trays of various sizes.",
        },
      ],
    },
    {
      name: "Material",
      features: [
        {
          name: "Natural wood options",
          description:
            "Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.",
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.",
        },
      ],
    },
    {
      name: "Considerations",
      features: [
        {
          name: "Helpful around the home",
          description:
            "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.",
        },
      ],
    },
    {
      name: "Included",
      features: [
        {
          name: "Everything you'll need",
          description:
            "The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.",
          imageSrc:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          imageAlt:
            "Walnut organizer system on black leather desk mat on top of white desk.",
        },
      ],
    },
  ],
};
