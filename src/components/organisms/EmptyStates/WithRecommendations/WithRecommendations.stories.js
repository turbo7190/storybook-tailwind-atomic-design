import Component from "./WithRecommendations.vue";

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
    placeholder: {
      type: "string",
      description: "input form placeholder",
    },
    value: {
      type: "string",
      description: "input form value",
    },
    btnText: {
      type: "string",
      description: "action button text",
    },
    btnIcon: {
      type: "string",
      description: "action button icon",
    },
    onClick: {
      action: "clicked",
      description: "button action",
    },
    list: {
      type: "array",
      description: "recommendations list",
    },
    listLabel: {
      type: "string",
      description: "recommendataion list label",
    },
  },
  parameters: {
    componentSubtitle: "Display an empty state with recommendations",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithRecommendations = Template.bind({});
WithRecommendations.args = {
  list: [
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      btnIcon: "PlusIcon",
      btnText: "Invite",
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      btnIcon: "PlusIcon",
      btnText: "Invite",
    },
    {
      name: "Tom Cook",
      role: "Director, Product Development",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      btnIcon: "PlusIcon",
      btnText: "Invite",
    },
  ],
  title: "Add team members",
  description:
    "You haven’t added any team members to your project yet. As the owner of this project, you can manage team member permissions.",
  value: "",
  placeholder: "Enter an email",
  btnText: "Send Invite",
  onClick: () => console.log("clicked"),
  listLabel: "Team members previously added to projects",
};
