import Component from "./FileGallery.vue";
import {
  CogIcon,
  RectangleStackIcon,
  HomeIcon,
  CameraIcon,
  UserGroupIcon,
  Squares2X2Icon as Squares2X2IconOutline,
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

export const FileGallery = Template.bind({});
FileGallery.args = {
  navigation: [
    { name: "Home", href: "#", icon: HomeIcon, current: false },
    {
      name: "All Files",
      href: "#",
      icon: Squares2X2IconOutline,
      current: false,
    },
    { name: "Photos", href: "#", icon: CameraIcon, current: true },
    { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
    { name: "Albums", href: "#", icon: RectangleStackIcon, current: false },
    { name: "Settings", href: "#", icon: CogIcon, current: false },
  ],
  userNavigation: [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  tabs: [
    { name: "Recently Viewed", href: "#", current: true },
    { name: "Recently Added", href: "#", current: false },
    { name: "Favorited", href: "#", current: false },
  ],
  files: [
    {
      name: "IMG_4985.HEIC",
      size: "3.9 MB",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
      current: true,
    },
    // More files...
  ],
  currentFile: {
    name: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    information: {
      "Uploaded by": "Marie Culver",
      Created: "June 8, 2020",
      "Last modified": "June 8, 2020",
      Dimensions: "4032 x 3024",
      Resolution: "72 x 72",
    },
    sharedWith: [
      {
        id: 1,
        name: "Aimee Douglas",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
      },
      {
        id: 2,
        name: "Andrea McMillan",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
};
