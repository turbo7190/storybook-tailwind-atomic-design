import Component from "./WithSignInAndMediaContent.vue";

export default {
  title: "Components/Organisms/Hero Sections",
  component: Component,
  argTypes: {
    solutions: {
      type: "array",
      description: "solutions list",
    },
    resources: {
      type: "array",
      description: "resources list",
    },
    label: {
      type: "string",
      description: "section label",
    },
    title: {
      type: "string",
      description: "section title",
    },
    subtitle: {
      type: "string",
      description: "section subtitle",
    },
    description: {
      type: "string",
      description: "section description",
    },
    inputLabel: {
      type: "string",
      description: "input label",
    },
    placeholder: {
      type: "string",
      description: "input placeholder",
    },
    btnText: {
      type: "string",
      description: "button text",
    },
    helpText: {
      type: "string",
      description: "help text",
    },
    thumbnail: {
      type: "string",
      description: "media thumbnail",
    },
  },
  parameters: {
    componentSubtitle: "Display a hero sections with sign in and media content",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSignInAndMediaContent = Template.bind({});
WithSignInAndMediaContent.args = {
  solutions: [
    {
      name: "Analytics",
      description:
        "Get a better understanding of where your traffic is coming from.",
      href: "#",
      icon: "ChartBarIcon",
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: "CursorArrowRaysIcon",
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure.",
      href: "#",
      icon: "ShieldCheckIcon",
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      icon: "Squares2X2Icon",
    },
    {
      name: "Automations",
      description:
        "Build strategic funnels that will drive your customers to convert",
      href: "#",
      icon: "ArrowPathIcon",
    },
    {
      name: "Reports",
      description:
        "Get detailed reports that will help you make more informed decisions ",
      href: "#",
      icon: "DocumentTextIcon",
    },
  ],
  resources: [
    {
      name: "Help Center",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "#",
    },
    {
      name: "Guides",
      description:
        "Learn how to maximize our platform to get the most out of it.",
      href: "#",
    },
    {
      name: "Events",
      description:
        "See what meet-ups and other events we might be planning near you.",
      href: "#",
    },
    {
      name: "Security",
      description: "Understand how we take your privacy seriously.",
      href: "#",
    },
  ],
  label: "Coming soon",
  title: "Data to enrich your",
  subtitle: "online business",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  inputLabel: "Sign up to get notified when it's ready.",
  placeholder: "Enter your email",
  btnText: "Notify me",
  helpText:
    "We care about the protection of your data. Read our Privacy Policy.",
  thumbnail:
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
};
