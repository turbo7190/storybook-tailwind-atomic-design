import Component from "./Popover.vue";

export default {
  title: "Components/Organisms/Ecommerce/Shopping Carts",
  component: Component,
  argTypes: {},
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Popover = Template.bind({});
Popover.args = {
  logoSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  logoAlt: "",
  navigation: [
    { name: "Women", href: "#" },
    { name: "Men", href: "#" },
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
  products: [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ],
};
