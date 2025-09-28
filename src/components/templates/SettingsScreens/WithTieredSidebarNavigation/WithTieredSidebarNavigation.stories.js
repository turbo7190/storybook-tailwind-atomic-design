import Component from "./WithTieredSidebarNavigation.vue";
import {
  BellIcon,
  FireIcon,
  BanknotesIcon,
  CogIcon,
  HomeIcon,
  InboxIcon,
  KeyIcon,
  CameraIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
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

export const WithTieredSidebarNavigation = Template.bind({});
WithTieredSidebarNavigation.args = {
  navigation: [
    { name: "Home", href: "#", icon: HomeIcon },
    { name: "Trending", href: "#", icon: FireIcon },
    { name: "Bookmarks", href: "#", icon: FireIcon },
    { name: "Messages", href: "#", icon: InboxIcon },
    { name: "Profile", href: "#", icon: UserIcon },
  ],
  subNavigation: [
    {
      name: "Account",
      description:
        "Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.",
      href: "#",
      icon: CogIcon,
      current: true,
    },
    {
      name: "Notifications",
      description:
        "Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.",
      href: "#",
      icon: BellIcon,
      current: false,
    },
    {
      name: "Security",
      description:
        "Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.",
      href: "#",
      icon: KeyIcon,
      current: false,
    },
    {
      name: "Appearance",
      description:
        "Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.",
      href: "#",
      icon: CameraIcon,
      current: false,
    },
    {
      name: "Billing",
      description:
        "Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.",
      href: "#",
      icon: BanknotesIcon,
      current: false,
    },
    {
      name: "Integrations",
      description:
        "Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.",
      href: "#",
      icon: ViewColumnsIcon,
      current: false,
    },
    {
      name: "Additional Resources",
      description:
        "Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.",
      href: "#",
      icon: MagnifyingGlassCircleIcon,
      current: false,
    },
  ],
};
