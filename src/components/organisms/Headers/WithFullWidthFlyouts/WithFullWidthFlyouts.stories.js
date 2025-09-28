import Component from "./WithFullWidthFlyouts.vue";
import {
  BookmarkSquareIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/outline";

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
    company: {
      type: "array",
      description: "company list",
    },
    resources: {
      type: "array",
      description: "resources list",
    },
    blogPosts: {
      type: "array",
      description: "blog posts list",
    },
  },
  parameters: {
    componentSubtitle: "Display a header with full width flyouts",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithFullWidthFlyouts = Template.bind({});
WithFullWidthFlyouts.args = {
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
  ],
  callsToAction: [
    { name: "Watch Demo", href: "#", icon: "PlayIcon" },
    { name: "View All Products", href: "#", icon: "CheckCircleIcon" },
    { name: "Contact Sales", href: "#", icon: "PhoneIcon" },
  ],
  company: [
    { name: "About", href: "#", icon: "InformationCircleIcon" },
    { name: "Customers", href: "#", icon: "BuildingOfficeIcon" },
    { name: "Press", href: "#", icon: "NewspaperIcon" },
    { name: "Careers", href: "#", icon: "BriefcaseIcon" },
    { name: "Privacy", href: "#", icon: "ShieldCheckIcon" },
  ],
  resources: [
    { name: "Community", href: "#", icon: "UserGroupIcon" },
    { name: "Partners", href: "#", icon: "GlobeAltIcon" },
    { name: "Guides", href: "#", icon: "BookmarkSquareIcon" },
    { name: "Webinars", href: "#", icon: "ComputerDesktopIcon" },
  ],
  blogPosts: [
    {
      id: 1,
      name: "Boost your conversion rate",
      href: "#",
      preview:
        "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
      imageUrl:
        "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
    },
    {
      id: 2,
      name: "How to use search engine optimization to drive traffic to your site",
      href: "#",
      preview:
        "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
      imageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
    },
  ],
};
