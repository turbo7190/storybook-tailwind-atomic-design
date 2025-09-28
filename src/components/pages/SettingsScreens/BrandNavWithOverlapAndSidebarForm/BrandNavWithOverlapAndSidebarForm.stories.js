import Component from "./BrandNavWithOverlapAndSidebarForm.vue";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  ViewColumnsIcon,
} from "@heroicons/vue/24/outline";
export default {
  title: "Components/Templates/Settings Screens",
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

export const BrandNavWithOverlapAndSidebarForm = Template.bind({});
BrandNavWithOverlapAndSidebarForm.args = {
  user: {
    name: "Debbie Lewis",
    handle: "deblewis",
    email: "debbielewis@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
  },
  navigation: [
    { name: "Dashboard", href: "#", current: true },
    { name: "Jobs", href: "#", current: false },
    { name: "Applicants", href: "#", current: false },
    { name: "Company", href: "#", current: false },
  ],
  subNavigation: [
    { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
    { name: "Account", href: "#", icon: CogIcon, current: false },
    { name: "Password", href: "#", icon: KeyIcon, current: false },
    { name: "Notifications", href: "#", icon: BellIcon, current: false },
    { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
    { name: "Integrations", href: "#", icon: ViewColumnsIcon, current: false },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
};
