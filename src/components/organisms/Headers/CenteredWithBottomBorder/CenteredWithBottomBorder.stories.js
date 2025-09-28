import Component from "./CenteredWithBottomBorder.vue";

export default {
  title: "Components/Organisms/Headers",
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
  },
  parameters: {
    componentSubtitle: "Display a centered header with bottom border",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CenteredWithBottomBorder = Template.bind({});
CenteredWithBottomBorder.args = {
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
      icon: "BookmarkSquareIcon",
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
};
