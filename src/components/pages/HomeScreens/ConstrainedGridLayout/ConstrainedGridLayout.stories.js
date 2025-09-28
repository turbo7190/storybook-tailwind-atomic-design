import Component from "./ConstrainedGridLayout.vue";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  BanknotesIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
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

export const ConstrainedGridLayout = Template.bind({});
ConstrainedGridLayout.args = {
  user: {
    name: "Chelsea Hagon",
    email: "chelsea.hagon@example.com",
    role: "Human Resources Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  navigation: [
    { name: "Home", href: "#", current: true },
    { name: "Profile", href: "#", current: false },
    { name: "Resources", href: "#", current: false },
    { name: "Company Directory", href: "#", current: false },
    { name: "Openings", href: "#", current: false },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  stats: [
    { label: "Vacation days left", value: 12 },
    { label: "Sick days left", value: 4 },
    { label: "Personal days left", value: 2 },
  ],
  actions: [
    {
      icon: "ClockIcon",
      name: "Request time off",
      href: "#",
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
    },
    {
      icon: "CheckBadgeIcon",
      name: "Benefits",
      href: "#",
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },
    {
      icon: "UsersIcon",
      name: "Schedule a one-on-one",
      href: "#",
      iconForeground: "text-sky-700",
      iconBackground: "bg-sky-50",
    },
    {
      icon: "BanknotesIcon",
      name: "Payroll",
      href: "#",
      iconForeground: "text-yellow-700",
      iconBackground: "bg-yellow-50",
    },
    {
      icon: "ReceiptRefundIcon",
      name: "Submit an expense",
      href: "#",
      iconForeground: "text-rose-700",
      iconBackground: "bg-rose-50",
    },
    {
      icon: "AcademicCapIcon",
      name: "Training",
      href: "#",
      iconForeground: "text-primary-700",
      iconBackground: "bg-primary-50",
    },
  ],
  recentHires: [
    {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    {
      name: "Floyd Miles",
      handle: "floydmiles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    {
      name: "Emily Selman",
      handle: "emilyselman",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    {
      name: "Kristin Watson",
      handle: "kristinwatson",
      imageUrl:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
  ],
  announcements: [
    {
      id: 1,
      title: "Office closed on July 2nd",
      href: "#",
      preview:
        "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
    },
    {
      id: 2,
      title: "New password policy",
      href: "#",
      preview:
        "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
    },
    {
      id: 3,
      title: "Office closed on July 2nd",
      href: "#",
      preview:
        "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
    },
  ],
};
