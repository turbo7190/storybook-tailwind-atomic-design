import Component from "./FullWidthWithNarrowSidebar.vue";
export default {
  title: "Components/Organisms/Multi-Column Layouts",
  component: Component,
  argTypes: {
    navigation: {
      type: "array",
      description: "navigation items list",
    },
    sidebarNavigation: {
      type: "array",
      description: "sidebar navigation items list",
    },
    userNavigation: {
      type: "array",
      description: "user navigation items list",
    },
    logo: {
      type: "object",
      description: "navigation menu logo",
    },
    sidebarLogo: {
      type: "object",
      description: "sidebar logo",
    },
    user: {
      type: "object",
      description: "navigation bottom user object",
    },
    selectedItem: {
      type: "object",
      description: "selected navigation item",
    },
    itemClicked: {
      action: "item clicked",
    },
    logoSectionBgColor: {
      control: { type: "select" },
      options: ["gray-600", "red-600", "green-600", "primary-500"],
      description: "background color of navigation bar",
    },
    navBgColor: {
      control: { type: "select" },
      options: ["gray-600", "red-600", "green-600", "primary-600"],
      description: "background color of navigation bar",
    },
    navSelectionBgColor: {
      control: { type: "select" },
      options: ["gray-900", "red-900", "green-900", "primary-900"],
      description: "background color of navigation bar selection item",
    },
    hoverBgColor: {
      control: { type: "select" },
      options: ["gray-700", "red-700", "green-700", "primary-700"],
      description: "background color of navigation bar item on hover",
    },
    iconColor: {
      control: { type: "select" },
      options: ["gray-200", "red-200", "green-200", "primary-200"],
      description: "color of icon",
    },
    iconSelectionColor: {
      control: { type: "select" },
      options: ["gray-200", "red-200", "green-200", "primary-200"],
      description: "color of icon of selected item",
    },
    searchInputChange: {
      action: "search input changes",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a  sidebar navigation, user navigation, header navigation, Search Input etc.",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<component v-bind="args">
              <template #secondaryColumn>
                <div class="text-sm text-gray-900 font-medium p-4">
                  Secondary Column
                </div>
              </template>
              <template #primaryColumn>
                <div class="text-sm text-gray-900 font-medium p-4">
                  Primary Column
                </div>
              </template>
            </component>`,
});

export const FullWidthWithNarrowSidebar = Template.bind({});
FullWidthWithNarrowSidebar.args = {
  logo: {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    title: "workflow",
  },
  user: {
    name: "Whitney Francis",
    role: "whitney.francis@example.com",
    avatar:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  navigation: [
    {
      name: "Inboxes",
      href: "#",
      children: [
        { name: "Technical Support", href: "#" },
        { name: "Sales", href: "#" },
        { name: "General", href: "#" },
      ],
    },
    { name: "Reporting", href: "#", children: [] },
    { name: "Settings", href: "#", children: [] },
  ],
  sidebarNavigation: [
    { id: 1, name: "Open", href: "#", icon: "InboxIcon", current: true },
    {
      id: 2,
      name: "Archive",
      href: "#",
      icon: "ArchiveBoxIcon",
      current: false,
    },
    {
      id: 3,
      name: "Customers",
      href: "#",
      icon: "UserCircleIcon",
      current: false,
    },
    { id: 4, name: "Flagged", href: "#", icon: "FlagIcon", current: false },
    { id: 5, name: "Spam", href: "#", icon: "NoSymbolIcon", current: false },
    { id: 6, name: "Drafts", href: "#", icon: "PencilIcon", current: false },
  ],
  userNavigation: [
    {
      name: "Your Profile",
      action: () => console.log("your profile"),
    },
    {
      name: "Sign out",
      action: () => console.log("Sign out"),
    },
  ],
  sidebarLogo: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    title: "workflow",
  },
  selectedItem: {
    id: 3,
    name: "Customers",
    href: "#",
    icon: "UserCircleIcon",
    current: false,
  },
};
