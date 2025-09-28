import Component from "./WithAlternatingSections.vue";

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
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAlternatingSections = Template.bind({});
WithAlternatingSections.args = {
  features: [
    {
      name: "Minimal and thoughtful",
      description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
    },
    {
      name: "Refined details",
      description:
        "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    },
  ],
  title: "Protect your device",
  desc:
    "As a digital creative, your laptop or tablet is at the center of your work. Keep" +
    "your device safe with a fabric sleeve that matches in quality and looks.",
};
