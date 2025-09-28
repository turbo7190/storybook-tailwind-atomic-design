import Component from "./WithStartingPoints.vue";

export default {
  title: "Components/Organisms/Empty States",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "state title",
    },
    description: {
      type: "string",
      description: "state description",
    },
    link: {
      type: "string",
      description: "link text",
    },
    onClick: {
      action: "clicked",
      description: "link action",
    },
    items: {
      type: "array",
      description: "points items",
    },
  },
  parameters: {
    componentSubtitle: "Display an empty state with starting points",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithStartingPoints = Template.bind({});
WithStartingPoints.args = {
  title: "Projects",
  description:
    "You haven’t created a project yet. Get started by selecting a template or start from an empty project.",
  link: "Or start from an empty project",
  onClick: () => console.log("clicked"),
  items: [
    {
      title: "Create a List",
      description: "Another to-do system you’ll try but eventually give up on.",
      icon: "ListBulletIcon",
      background: "bg-pink-500",
    },
    {
      title: "Create a Calendar",
      description: "Stay on top of your deadlines, or don’t — it’s up to you.",
      icon: "CalendarIcon",
      background: "bg-yellow-500",
    },
    {
      title: "Create a Gallery",
      description: "Great for mood boards and inspiration.",
      icon: "CameraIcon",
      background: "bg-green-500",
    },
    {
      title: "Create a Board",
      description: "Track tasks in different stages of your project.",
      icon: "Squares2X2Icon",
      background: "bg-blue-500",
    },
    {
      title: "Create a Spreadsheet",
      description: "Lots of numbers and things — good for nerds.",
      icon: "TableCellsIcon",
      background: "bg-primary-500",
    },
    {
      title: "Create a Timeline",
      description: "Get a birds-eye-view of your procrastination.",
      icon: "ClockIcon",
      background: "bg-purple-500",
    },
  ],
};
