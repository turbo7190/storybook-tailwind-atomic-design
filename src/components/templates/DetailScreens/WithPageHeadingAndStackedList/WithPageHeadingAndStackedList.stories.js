import Component from "./WithPageHeadingAndStackedList.vue";

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

export const WithPageHeadingAndStackedList = Template.bind({});
WithPageHeadingAndStackedList.args = {
  user: {
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  navigation: [
    { name: "Dashboard", href: "#", current: true },
    { name: "Jobs", href: "#", current: false },
    { name: "Applicants", href: "#", current: false },
    { name: "Company", href: "#", current: false },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  tabs: [
    { name: "Applied", href: "#", count: "2", current: false },
    { name: "Phone Screening", href: "#", count: "4", current: false },
    { name: "Interview", href: "#", count: "6", current: true },
    { name: "Offer", href: "#", current: false },
    { name: "Disqualified", href: "#", current: false },
  ],
  candidates: [
    {
      name: "Emily Selman",
      email: "emily.selman@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      applied: "January 7, 2020",
      appliedDatetime: "2020-07-01T15:34:56",
      status: "Completed phone screening",
    },
    // More candidates...
  ],
  publishingOptions: [
    {
      name: "Published",
      description: "This job posting can be viewed by anyone who has the link.",
      current: true,
    },
    {
      name: "Draft",
      description: "This job posting will no longer be publicly accessible.",
      current: false,
    },
  ],
};
