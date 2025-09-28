import Component from "./SimpleCentered.vue";

export default {
  title: "Components/Organisms/Testimonials",
  component: Component,
  argTypes: {
    description: {
      type: "string",
      description: "tesitimonial description",
    },
    user: {
      type: "object",
      description: "user object",
    },
    logo: {
      type: "string",
      description: "testimonial logo",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple testimonial",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleCentered = Template.bind({});
SimpleCentered.args = {
  description:
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."',
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  user: {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Judith Black",
    role: "CEO, Tuple",
  },
};
