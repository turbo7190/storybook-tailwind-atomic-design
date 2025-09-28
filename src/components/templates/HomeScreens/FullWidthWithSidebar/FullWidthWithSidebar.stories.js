import Component from "./FullWidthWithSidebar.vue";
import { ClockIcon, HomeIcon, ListBulletIcon } from "@heroicons/vue/24/outline";

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

export const FullWidthWithSidebar = Template.bind({});
FullWidthWithSidebar.args = {
  navigation: [
    { name: "Home", href: "#", icon: HomeIcon, current: true },
    { name: "My tasks", href: "#", icon: ListBulletIcon, current: false },
    { name: "Recent", href: "#", icon: ClockIcon, current: false },
  ],
  teams: [
    { name: "Engineering", href: "#", bgColorClass: "bg-primary-500" },
    { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
    { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
  ],
  projects: [
    {
      id: 1,
      title: "GraphQL API",
      initials: "GA",
      team: "Engineering",
      members: [
        {
          name: "Dries Vincent",
          handle: "driesvincent",
          imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Courtney Henry",
          handle: "courtneyhenry",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
      totalMembers: 12,
      lastUpdated: "March 17, 2020",
      pinned: true,
      bgColorClass: "bg-pink-600",
    },
    // More projects...
  ],
};
