import Component from "./Simple.vue";

export default {
  title: "Components/Organisms/Feeds",
  component: Component,
  argTypes: {
    timeline: {
      type: "array",
      description: "timeline items",
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

export const Simple = Template.bind({});
Simple.args = {
  timeline: [
    {
      id: 1,
      content: "Applied to",
      target: "Front End Developer",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: "UserIcon",
      iconBackground: "bg-gray-400",
    },
    {
      id: 2,
      content: "Advanced to phone screening by",
      target: "Bethany Blake",
      href: "#",
      date: "Sep 22",
      datetime: "2020-09-22",
      icon: "HandThumbUpIcon",
      iconBackground: "bg-blue-500",
    },
    {
      id: 3,
      content: "Completed phone screening with",
      target: "Martha Gardner",
      href: "#",
      date: "Sep 28",
      datetime: "2020-09-28",
      icon: "CheckIcon",
      iconBackground: "bg-green-500",
    },
    {
      id: 4,
      content: "Advanced to interview by",
      target: "Bethany Blake",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: "HandThumbUpIcon",
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Completed interview with",
      target: "Katherine Snyder",
      href: "#",
      date: "Oct 4",
      datetime: "2020-10-04",
      icon: "CheckIcon",
      iconBackground: "bg-green-500",
    },
  ],
};
