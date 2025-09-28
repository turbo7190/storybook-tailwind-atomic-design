import Component from "./WithBannerImage.vue";

export default {
  title: "Components/Organisms/Page Headings",
  component: Component,
  argTypes: {
    profile: {
      type: "object",
      description: "profile object with name, avatar, background image",
    },
    buttons: {
      type: "array",
      description: "header action buttons list",
    },
  },
  parameters: {
    componentSubtitle: "Display a page header with banner image",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBannerImage = Template.bind({});
WithBannerImage.args = {
  profile: {
    name: "Ricardo Cooper",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  buttons: [
    {
      icon: "PhoneIcon",
      label: "Call",
      onClick: () => console.log("clicked"),
    },
    {
      icon: "EnvelopeIcon",
      label: "Message",
      onClick: () => console.log("clicked"),
    },
  ],
};
