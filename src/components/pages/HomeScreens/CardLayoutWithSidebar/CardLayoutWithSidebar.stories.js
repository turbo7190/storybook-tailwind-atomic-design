import Component from "./CardLayoutWithSidebar.vue";
import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentTextIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";

export default {
  title: "Components/Templates/Home Screens",
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

export const CardLayoutWithSidebar = Template.bind({});
CardLayoutWithSidebar.args = {
  navigation: [
    { name: "Home", href: "#", icon: HomeIcon, current: true },
    { name: "History", href: "#", icon: ClockIcon, current: false },
    { name: "Balances", href: "#", icon: ScaleIcon, current: false },
    { name: "Cards", href: "#", icon: CreditCardIcon, current: false },
    { name: "Recipients", href: "#", icon: UserGroupIcon, current: false },
    { name: "Reports", href: "#", icon: DocumentTextIcon, current: false },
  ],
  secondaryNavigation: [
    { name: "Settings", href: "#", icon: CogIcon },
    { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
    { name: "Privacy", href: "#", icon: ShieldCheckIcon },
  ],
  cards: [
    {
      name: "Account balance",
      href: "#",
      icon: ScaleIcon,
      amount: "$30,659.45",
    },
    // More items...
  ],
  transactions: [
    {
      id: 1,
      name: "Payment to Molly Sanders",
      href: "#",
      amount: "$20,000",
      currency: "USD",
      status: "success",
      date: "July 11, 2020",
      datetime: "2020-07-11",
    },
    // More transactions...
  ],
  statusStyles: {
    success: "bg-green-100 text-green-800",
    processing: "bg-yellow-100 text-yellow-800",
    failed: "bg-gray-100 text-gray-800",
  },
  user: {
    name: "Rebecca Nicholas",
    role: "Product Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  stats: [
    { label: "Vacation days left", value: 12 },
    { label: "Sick days left", value: 4 },
    { label: "Personal days left", value: 2 },
  ],
};
