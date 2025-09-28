import Component from "./WithSidebarNavigationAndConstrainedContentArea.vue";
import {
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  CogIcon,
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
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

export const WithSidebarNavigationAndConstrainedContentArea = Template.bind({});
WithSidebarNavigationAndConstrainedContentArea.args = {
  navigation: [
    { name: "Home", href: "#", icon: HomeIcon, current: false },
    { name: "Jobs", href: "#", icon: BriefcaseIcon, current: false },
    {
      name: "Applications",
      href: "#",
      icon: DocumentMagnifyingGlassIcon,
      current: false,
    },
    { name: "Messages", href: "#", icon: ChatBubbleLeftIcon, current: false },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Settings", href: "#", icon: CogIcon, current: true },
  ],
  secondaryNavigation: [
    { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
    { name: "Logout", href: "#", icon: CogIcon },
  ],
  tabs: [
    { name: "General", href: "#", current: true },
    { name: "Password", href: "#", current: false },
    { name: "Notifications", href: "#", current: false },
    { name: "Plan", href: "#", current: false },
    { name: "Billing", href: "#", current: false },
    { name: "Team Members", href: "#", current: false },
  ],
};
