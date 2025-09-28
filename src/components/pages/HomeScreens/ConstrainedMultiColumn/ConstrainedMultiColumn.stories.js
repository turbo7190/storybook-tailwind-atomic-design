import Component from "./ConstrainedMultiColumn.vue";

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

export const ConstrainedMultiColumn = Template.bind({});
ConstrainedMultiColumn.args = {
  navigation: [
    { name: "Dashboard", href: "#", current: true },
    { name: "Domains", href: "#", current: false },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  projects: [
    {
      name: "Workcation",
      href: "#",
      siteHref: "#",
      repoHref: "#",
      repo: "debbielewis/workcation",
      tech: "Laravel",
      lastDeploy: "3h ago",
      location: "United states",
      starred: true,
      active: true,
    },
    // More projects...
  ],
  activityItems: [
    {
      project: "Workcation",
      commit: "2d89f0c8",
      environment: "production",
      time: "1h",
    },
    // More items...
  ],
};
