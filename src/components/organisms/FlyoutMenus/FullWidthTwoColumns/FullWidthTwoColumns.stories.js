import Component from "./FullWidthTwoColumns.vue";

export default {
  title: "Components/Organisms/Flyout Menus",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "menu label",
    },
    linkText: {
      type: "string",
      description: "menu item link text",
    },
    list1: {
      type: "array",
      description: "menu list 1 items",
    },
    list2: {
      type: "array",
      description: "menu list 2 items",
    },
  },
  parameters: {
    componentSubtitle: "Display a full width flyout menu with 2 columns",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const FullWidthTwoColumns = Template.bind({});
FullWidthTwoColumns.args = {
  label: "Solutions",
  linkText: "View all posts",
  list1: [
    { name: "About", href: "#", icon: "InformationCircleIcon" },
    { name: "Customers", href: "#", icon: "BuildingOfficeIcon" },
    { name: "Press", href: "#", icon: "NewspaperIcon" },
    { name: "Careers", href: "#", icon: "BriefcaseIcon" },
    { name: "Privacy", href: "#", icon: "ShieldCheckIcon" },
  ],
  list2: [
    { name: "Community", href: "#", icon: "UserGroupIcon" },
    { name: "Partners", href: "#", icon: "GlobeAltIcon" },
    { name: "Guides", href: "#", icon: "BookmarkSquareIcon" },
    { name: "Webinars", href: "#", icon: "ComputerDesktopIcon" },
  ],
  list3: [
    {
      id: 1,
      name: "Boost your conversion rate",
      href: "#",
      preview:
        "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
      imageUrl:
        "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
    },
    {
      id: 2,
      name: "How to use search engine optimization to drive traffic to your site",
      href: "#",
      preview:
        "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
      imageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
    },
  ],
};
