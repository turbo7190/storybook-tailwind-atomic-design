import Component from "./WithInputGroup.vue";

export default {
  title: "Components/Organisms/Section Headings",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "header title",
    },
    value: {
      type: "string",
      description: "value of input",
    },
    placeholder: {
      type: "string",
      description: "placeholder of input",
    },
    customClass: {
      type: "string",
      description: "extra class of input form",
    },
    leadIcon: {
      type: "string",
      description: "leading icon name",
    },
    btnIcon: {
      type: "string",
      description: "button icon name",
    },
    btnText: {
      type: "string",
      description: "button text",
    },
  },
  parameters: {
    componentSubtitle: "Display section header with title",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithInputGroup = Template.bind({});
WithInputGroup.args = {
  placeholder: "Search candidates",
  value: "",
  leadIcon: "MagnifyingGlassIcon",
  btnIcon: "BarsArrowUpIcon",
  btnText: "Sort",
  title: "Job Postings",
};
