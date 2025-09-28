import Component from "./SplitWithNavBar.vue";

export default {
  title: "Components/Organisms/Hero Sections",
  component: Component,
  argTypes: {
    solutions: {
      type: "array",
      description: "solutions list",
    },
    callsToAction: {
      type: "array",
      description: "callsToAction list",
    },
    resources: {
      type: "array",
      description: "resources list",
    },
    recentPosts: {
      type: "array",
      description: "recentPosts list",
    },
    image: {
      type: "string",
      description: "background image",
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
    buttons: {
      type: "array",
      description: "section buttons list",
    },
  },
  parameters: {
    componentSubtitle: "Display a hero sections splitting with nav bar",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitWithNavBar = Template.bind({});
SplitWithNavBar.args = {
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
  ],
  callsToAction: [
    { name: "Watch Demo", href: "#", icon: "PlayIcon" },
    { name: "Contact Sales", href: "#", icon: "PhoneIcon" },
  ],
  resources: [
    {
      name: "Help Center",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "#",
      icon: "LifebuoyIcon",
    },
    {
      name: "Guides",
      description:
        "Learn how to maximize our platform to get the most out of it.",
      href: "#",
      icon: "FireIcon",
    },
    {
      name: "Events",
      description:
        "See what meet-ups and other events we might be planning near you.",
      href: "#",
      icon: "CalendarIcon",
    },
    {
      name: "Security",
      description: "Understand how we take your privacy seriously.",
      href: "#",
      icon: "ShieldCheckIcon",
    },
  ],
  recentPosts: [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
      id: 2,
      name: "How to use search engine optimization to drive traffic to your site",
      href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
  ],
  title: "Take control of your",
  subtitle: "customer support",
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  buttons: [
    {
      label: "Get Started",
      type: "secondary",
    },
    {
      label: "Live Demo",
      type: "primary",
    },
  ],
  image:
    "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
};
