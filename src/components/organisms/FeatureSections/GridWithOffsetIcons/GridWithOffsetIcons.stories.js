import Component from "./GridWithOffsetIcons.vue";

export default {
  title: "Components/Organisms/Feature Sections",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "section title",
    },
    description: {
      type: "string",
      description: "section description",
    },
    category: {
      type: "string",
      description: "section category",
    },
    items: {
      type: "array",
      description: "section feature items",
    },
  },
  parameters: {
    componentSubtitle: "Display a grid feature section with offset icons",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const GridWithOffsetIcons = Template.bind({});
GridWithOffsetIcons.args = {
  category: "deploy faster",
  title: "Everything you need to deploy your app",
  description:
    "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.",
  items: [
    {
      name: "Push to Deploy",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "CloudArrowUpIcon",
    },
    {
      name: "SSL Certificates",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "LockClosedIcon",
    },
    {
      name: "Simple Queues",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "ArrowPathIcon",
    },
    {
      name: "Advanced Security",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "ShieldCheckIcon",
    },
    {
      name: "Powerful API",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "CogIcon",
    },
    {
      name: "Database Backups",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "ServerIcon",
    },
  ],
};
