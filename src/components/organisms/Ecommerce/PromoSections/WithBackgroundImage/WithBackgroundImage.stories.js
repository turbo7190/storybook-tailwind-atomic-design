import Component from "./WithBackgroundImage.vue";

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
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
  heading: "Level up your desk",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  description:
    "Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.",
  linkText: "Shop workspace",
};
