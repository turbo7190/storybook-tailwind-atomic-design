import Component from "./ActionsWithSharedBorders.vue";

export default {
  title: "Components/Organisms/Grid Lists",
  component: Component,
  argTypes: {
    actions: {
      type: "array",
      description: "list of actions",
    },
    actionClicked: {
      action: "clicked",
    },
  },
  parameters: {
    componentSubtitle: "Display actions list with icon, title, description",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ActionsWithSharedBorders = Template.bind({});
ActionsWithSharedBorders.args = {
  actions: [
    {
      title: "Request time off",
      href: "#",
      icon: "ClockIcon",
      iconForeground: "teal-700",
      iconBackground: "bg-teal-50",
      description:
        "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      title: "Benefits",
      href: "#",
      icon: "CheckBadgeIcon",
      iconForeground: "purple-700",
      iconBackground: "bg-purple-50",
      description:
        "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      title: "Schedule a one-on-one",
      href: "#",
      icon: "UsersIcon",
      iconForeground: "sky-700",
      iconBackground: "bg-sky-50",
      description:
        "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      title: "Payroll",
      href: "#",
      icon: "BanknotesIcon",
      iconForeground: "yellow-700",
      iconBackground: "bg-yellow-50",
      description:
        "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      title: "Submit an expense",
      href: "#",
      icon: "ReceiptRefundIcon",
      iconForeground: "rose-700",
      iconBackground: "bg-rose-50",
      description:
        "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
    {
      title: "Training",
      href: "#",
      icon: "AcademicCapIcon",
      iconForeground: "primary-700",
      iconBackground: "bg-primary-50",
      description:
        "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
    },
  ],
};
