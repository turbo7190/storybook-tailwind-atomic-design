import Component from "./WithFadingBackgroundImageAndTestimonials.vue";

export default {
  title: "Components/Organisms/Ecommerce/Promo Sections",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
    },
    imageSrc: {
      type: "string",
    },
    description: {
      type: "string",
    },
    linkText: {
      type: "string",
    },
    items: {
      type: "array",
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

export const WithFadingBackgroundImageAndTestimonials = Template.bind({});
WithFadingBackgroundImageAndTestimonials.args = {
  heading: "Get 25% off during our one-time sale",
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  linkText: "Get access to our one-time sale",
  items: [
    {
      id: 1,
      quote:
        "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
      attribution: "Sarah Peters, New Orleans",
    },
    {
      id: 2,
      quote:
        "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
      attribution: "Kelly McPherson, Chicago",
    },
    {
      id: 3,
      quote:
        "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
      attribution: "Chris Paul, Phoenix",
    },
  ],
};
