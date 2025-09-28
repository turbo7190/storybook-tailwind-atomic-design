import Component from "./WithFadingImage.vue";

export default {
  title: "Components/Organisms/Ecommerce/Product Features",
  component: Component,
  argTypes: {
    title: {
      type: "string",
    },
    desc: {
      type: "string",
    },
    imageSrc: {
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

export const WithFadingImage = Template.bind({});
WithFadingImage.args = {
  features: [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
    },
    { name: "Dimensions", description: '15" x 3.75" x .75"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    {
      name: "Includes",
      description:
        "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
    },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item.",
    },
  ],
  title: "Technical Specifications",
  desc:
    "Organize is a system to keep your desk tidy and photo-worthy all day long." +
    "Procrastinate your work while you meticulously arrange items into dedicated trays.",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  imageAlt: "",
};
