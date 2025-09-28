import Component from "./4x2GridOnBrand.vue";

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
    items: {
      type: "array",
      description: "section feature items",
    },
  },
  parameters: {
    componentSubtitle: "Display a 4 x 2 grid feature section on brand",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Fx2GridOnBrand = Template.bind({});
Fx2GridOnBrand.args = {
  title: "Inbox support built for efficiency",
  description:
    "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.",
  items: [
    {
      name: "Unlimited Inboxes",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "InboxIcon",
    },
    {
      name: "Manage Team Members",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "UsersIcon",
    },
    {
      name: "Spam Report",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "TrashIcon",
    },
    {
      name: "Compose in Markdown",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "PencilIcon",
    },
    {
      name: "Team Reporting",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "DocumentTextIcon",
    },
    {
      name: "Saved Replies",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "ArrowUturnLeftIcon",
    },
    {
      name: "Email Commenting",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "ChatBubbleLeftRightIcon",
    },
    {
      name: "Connect with Customers",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: "HeartIcon",
    },
  ],
};
