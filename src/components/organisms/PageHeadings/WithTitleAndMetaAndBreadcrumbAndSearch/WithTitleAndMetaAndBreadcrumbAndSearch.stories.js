import Component from "./WithTitleAndMetaAndBreadcrumbAndSearch.vue";

export default {
  title: "Components/Organisms/Page Headings",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "title",
    },
    onAdd: {
      action: "clicked",
      description: "adding action",
    },
    onRemove: {
      action: "clicked",
      description: "removing action",
    },
    meta: {
      type: "array",
      description: "meta data",
    },
    onShow: {
      action: "clicked",
      description: "showing action",
    },
    onSearch: {
      action: "clicked",
      description: "search action",
    },
    isNotShowSub: {
      type: "boolean",
      description: "decide whether or not show sub header",
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

export const WithTitleAndMetaAndBreadcrumbAndSearch = Template.bind({});
WithTitleAndMetaAndBreadcrumbAndSearch.args = {
  title: "Users",
};
