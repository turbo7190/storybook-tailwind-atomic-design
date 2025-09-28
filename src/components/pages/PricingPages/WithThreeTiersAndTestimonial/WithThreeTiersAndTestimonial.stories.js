import Component from "./WithThreeTiersAndTestimonial.vue";
import {
  FireIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/outline";

export default {
  title: "Components/Templates/Pricing Pages",
  component: Component,
  argTypes: {
    content: {
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

export const WithThreeTiersAndTestimonial = Template.bind({});
WithThreeTiersAndTestimonial.args = {
  faqs: [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ],
  pricing: {
    tiers: [
      {
        title: "Freelancer",
        price: 24,
        frequency: "/month",
        description: "The essentials to provide your best work for clients.",
        features: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "48-hour support response time",
        ],
        cta: "Monthly billing",
        mostPopular: false,
      },
      {
        title: "Startup",
        price: 32,
        frequency: "/month",
        description: "A plan that scales with your rapidly growing business.",
        features: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "24-hour support response time",
          "Marketing automations",
        ],
        cta: "Monthly billing",
        mostPopular: true,
      },
      {
        title: "Enterprise",
        price: 48,
        frequency: "/month",
        description: "Dedicated support and infrastructure for your company.",
        features: [
          "Unlimited products",
          "Unlimited subscribers",
          "Advanced analytics",
          "1-hour, dedicated support response time",
          "Marketing automations",
          "Custom integrations",
        ],
        cta: "Monthly billing",
        mostPopular: false,
      },
    ],
  },
  solutions: [
    {
      name: "Analytics",
      description:
        "Get a better understanding of where your traffic is coming from.",
      href: "#",
      icon: ChartBarIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure.",
      href: "#",
      icon: ShieldCheckIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      icon: Squares2X2Icon,
    },
    {
      name: "Automations",
      description:
        "Build strategic funnels that will drive your customers to convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ],
  callsToAction: [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
  ],
  resources: [
    {
      name: "Help Center",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "#",
      icon: LifebuoyIcon,
    },
    {
      name: "Guides",
      description:
        "Learn how to maximize our platform to get the most out of it.",
      href: "#",
      icon: FireIcon,
    },
    {
      name: "Events",
      description:
        "See what meet-ups and other events we might be planning near you.",
      href: "#",
      icon: CalendarIcon,
    },
    {
      name: "Security",
      description: "Understand how we take your privacy seriously.",
      href: "#",
      icon: ShieldCheckIcon,
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
