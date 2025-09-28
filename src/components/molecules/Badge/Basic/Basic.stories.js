import Component from "./Basic.vue";
import * as heroIcons from "@heroicons/vue/24/solid";

export default {
  title: "Components/Molecules/Badge",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label to show inside badge",
    },
    bgColor: {
      control: { type: "select" },
      options: [
        "gray-100",
        "red-100",
        "yellow-100",
        "green-100",
        "blue-100",
        "primary-100",
        "purple-100",
        "pink-100",
      ],
      description: "background color of badge",
    },
    textColor: {
      control: { type: "select" },
      options: [
        "gray-800",
        "red-800",
        "yellow-800",
        "green-800",
        "blue-800",
        "primary-800",
        "purple-800",
        "pink-800",
      ],
      description: "color for label text and icon",
    },
    iconName: {
      control: { type: "select" },
      options: Object.keys(heroIcons),
      description: "name of hero icon",
    },
    isLeft: {
      control: { type: "boolean" },
      description:
        "switch between left and right position of icon with respect to label",
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

export const Basic = Template.bind({});
Basic.args = {
  label: "Badge",
  bgColor: "red-100",
  textColor: "red-800",
  px: 2.5,
};

export const Large = Template.bind({});
Large.args = {
  label: "Badge",
  bgColor: "red-100",
  textColor: "red-800",
  px: 3,
};

export const Round = Template.bind({});
Round.args = {
  label: "Badge",
  bgColor: "red-100",
  textColor: "red-800",
  px: 3,
  isRounded: true,
};

export const WithHomeIcon = Template.bind({});
WithHomeIcon.args = {
  label: "Badge",
  bgColor: "primary-100",
  textColor: "primary-800",
  px: 3,
  isRounded: true,
  iconName: "HomeIcon",
  isLeft: true,
};

export const WithRemove = Template.bind({});
WithRemove.args = {
  label: "Badge",
  bgColor: "primary-100",
  textColor: "primary-800",
  px: 3,
  isRounded: true,
  iconName: "XMarkIcon",
  isLeft: false,
};
