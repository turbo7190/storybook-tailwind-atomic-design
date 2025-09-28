import ButtonComp from "./Button.vue";

export default {
  title: "Components/Atoms/Button",
  component: ButtonComp,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    content: {
      type: "string",
    },
    isRounded: { type: "boolean" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger", "themed"],
    },
  },
};

const ButtonTemplate = (args) => ({
  components: { ButtonComp },
  setup() {
    return { args };
  },
  template: '<button-comp v-bind="args" />',
});

export const Default = ButtonTemplate.bind({});
Default.args = {
  content: "Button",
};

export const Sizes = (args) => ({
  components: { ButtonComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center space-x-3">
      <button-comp v-bind="args" size="sm" content="small" />
      <button-comp v-bind="args" size="md" content="medium" />
      <button-comp v-bind="args" size="lg" content="large" />
      <button-comp v-bind="args" size="xl" content="extra large" />
    </div>
  `,
});
Sizes.parameters = {
  docs: {
    storyDescription: "4 sizes are supported",
  },
};

export const Variants = (args) => ({
  components: { ButtonComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center space-x-3">
      <button-comp v-bind="args" variant="primary" content="Primary" />
      <button-comp v-bind="args" variant="secondary" content="Secondary" />
      <button-comp v-bind="args" variant="success" content="Success" />
      <button-comp v-bind="args" variant="danger" content="Danger" />
      <button-comp v-bind="args" variant="themed" content="Themed" />
    </div>
  `,
});
Variants.args = {
  size: "md",
};
Variants.parameters = {
  docs: {
    storyDescription:
      "5 variants are supported i.e. Primary, Secondary, Success, Danger and Themed",
  },
};

export const RoundedBorders = (args) => ({
  components: { ButtonComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center space-x-3">
      <button-comp v-bind="args" variant="primary" :is-rounded="true" />
      <button-comp v-bind="args" variant="primary" />
    </div>
  `,
});
RoundedBorders.args = {
  size: "md",
  content: "Button",
};
RoundedBorders.parameters = {
  docs: {
    storyDescription: "rounded borders variations for button",
  },
};

export const CustomClasses = (args) => ({
  components: { ButtonComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center space-x-3">
      <button-comp v-bind="args" variant="primary" custom-class="line-through" />
      <button-comp
        v-bind="args"
        variant="primary"
        custom-class="border-2 border-black"
      />
    </div>
  `,
});
CustomClasses.args = {
  size: "md",
  content: "Button",
};
CustomClasses.parameters = {
  docs: {
    storyDescription: "Support for adding custom classes",
  },
};
