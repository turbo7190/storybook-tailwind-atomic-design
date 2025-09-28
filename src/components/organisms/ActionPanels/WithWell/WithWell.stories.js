import Component from "./WithWell.vue";

export default {
  title: "Components/Organisms/Action Panels",
  component: Component,
  argTypes: {
    title: {
      value: "string",
      description: "title of panel",
    },
    last4: {
      value: "string",
      description: "last four number of card",
    },
    cardIcon: {
      value: "string",
      description: "credit card icon",
    },
    expireMonth: {
      value: "string",
      description: "expire month of credit card",
    },
    expireDay: {
      value: "string",
      description: "expire date of credit card",
    },
    onClick: {
      action: "clicked",
      control: null,
      description: "action of button",
    },
    updatedAt: {
      value: "string",
      description: "updated at of credit card",
    },
    btnText: {
      value: "string",
      description: "button text",
    },
  },
  parameters: {
    componentSubtitle: "Display a panel with credit card.",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithWell = Template.bind({});
WithWell.args = {
  title: "Payment method",
  last4: "4242",
  expireMonth: "12",
  expireDay: "20",
  updatedAt: "22 Aug 2017",
  onClick: () => console.log("clicked"),
  btnText: "Edit",
};
