import Component from "./WithBackgroundImage.vue";

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
    bgImage: {
      type: "string",
      description: "background image",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple testimonial with background image",
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
  description:
    "Workflow has completely transformed how we interact with customers. We've seen record bookings, higher customer satisfaction, and reduced churn.",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  user: {
    name: "Judith Black",
    role: "CEO, Tuple",
  },
  bgImage:
    "https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80",
};
