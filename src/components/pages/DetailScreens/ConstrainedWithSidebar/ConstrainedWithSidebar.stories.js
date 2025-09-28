import Component from "./ConstrainedWithSidebar.vue";
import {
  ArchiveBoxIcon,
  ClockIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  ListBulletIcon,
} from "@heroicons/vue/24/outline";

export default {
  title: "Components/Templates/Detail Screens",
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

export const ConstrainedWithSidebar = Template.bind({});
ConstrainedWithSidebar.args = {
  navigation: [
    { name: "All Issues", href: "#", icon: HomeIcon, current: true },
    { name: "My Issues", href: "#", icon: ListBulletIcon, current: false },
    {
      name: "Assigned",
      href: "#",
      icon: UserCircleIconOutline,
      current: false,
    },
    { name: "Closed", href: "#", icon: ArchiveBoxIcon, current: false },
    { name: "Recent", href: "#", icon: ClockIcon, current: false },
  ],
  projects: [
    { id: 1, name: "GraphQL API", href: "#" },
    { id: 2, name: "iOS App", href: "#" },
    { id: 3, name: "Marketing Site Redesign", href: "#" },
    { id: 4, name: "Customer Portal", href: "#" },
  ],
  activity: [
    {
      id: 1,
      type: "comment",
      person: { name: "Eduardo Benz", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
      date: "6d ago",
    },
    {
      id: 2,
      type: "assignment",
      person: { name: "Hilary Mahy", href: "#" },
      assigned: { name: "Kristin Watson", href: "#" },
      date: "2d ago",
    },
    {
      id: 3,
      type: "tags",
      person: { name: "Hilary Mahy", href: "#" },
      tags: [
        { name: "Bug", href: "#", color: "bg-rose-500" },
        { name: "Accessibility", href: "#", color: "bg-primary-500" },
      ],
      date: "6h ago",
    },
    {
      id: 4,
      type: "comment",
      person: { name: "Jason Meyers", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
      date: "2h ago",
    },
  ],
};
