import Component from "./WithSplitImages.vue";

export default {
  title: "Components/Organisms/Ecommerce/Category Preview",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "list of Category Previews",
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

export const WithSplitImages = Template.bind({});
WithSplitImages.args = {
  items: [
    {
      name: "Self-Improvement",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Journals and note-taking",
    },
    {
      name: "Desk and Office",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
      description: "Work from home accessories",
    },
  ],
};
