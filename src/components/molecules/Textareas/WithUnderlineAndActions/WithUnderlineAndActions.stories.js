import Component from "./WithUnderlineAndActions.vue";

export default {
  title: "Components/Molecules/Textareas",
  component: Component,
  argTypes: {
    value: {
      type: "string",
      description: "value of textarea",
    },
    label: {
      type: "string",
      description: "label of textarea",
    },
    placeholder: {
      type: "string",
      description: "placeholder of textarea",
    },
    customClass: {
      type: "string",
      description: "extra class of textarea form",
    },
    avatar: {
      type: "string",
      description: "avatar of textarea form",
    },
    moods: {
      type: "array",
      description: "items of textarea actions",
    },
    selectedOption: {
      type: "object",
      description: "item of selected action",
    },
  },
  parameters: {
    componentSubtitle: "Display a textarea with underline and actions",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});
const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: "FireIcon",
    iconColor: "white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: "HeartIcon",
    iconColor: "white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: "FaceSmileIcon",
    iconColor: "white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: "EmojiSadIcon",
    iconColor: "white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: "HandThumbUpIcon",
    iconColor: "white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: "XMarkIcon",
    iconColor: "gray-400",
    bgColor: "bg-transparent",
  },
];
export const WithUnderlineAndActions = Template.bind({});
WithUnderlineAndActions.args = {
  moods,
  selectedOption: moods[5],
  label: "Add your comment",
  value: "",
  placeholder: "Add your comment...",
  avatar:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
