import AvatarComp from "./Avatar.vue";

export default {
  title: "Components/Atoms/Avatar",
  component: AvatarComp,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["6", "8", "10", "12", "14"],
      description: "assign size to avatar",
    },
    isCircle: {
      type: "boolean",
      description: "switch between circle or square container by using this",
    },
    src: {
      type: "string",
      description: "provide src to fetch image",
    },
    username: {
      type: "string",
      description: "provide name to show initials",
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
};

const AvatarTemplate = (args) => ({
  components: { AvatarComp },
  setup() {
    return { args };
  },
  template: '<avatar-comp v-bind="args" />',
});

export const Avatar = AvatarTemplate.bind({});
Avatar.args = {
  username: "test user",
  isCircle: true,
  size: 6,
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
export const Sizes = (args) => ({
  components: { AvatarComp },
  setup() {
    return { args };
  },
  template: `
    <div>
      <avatar-comp v-bind="args" size="6" />
      <avatar-comp v-bind="args" size="8" />
      <avatar-comp v-bind="args" size="10" />
      <avatar-comp v-bind="args" size="12" />
      <avatar-comp v-bind="args" size="14" />
    </div>
  `,
});
Sizes.args = {
  username: "test user",
  isCircle: true,
};
Sizes.parameters = {
  docs: {
    storyDescription: "5 sizes are supported",
  },
};

export const AvatarStates = (args) => ({
  components: { AvatarComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center space-x-2">
      <avatar-comp
        v-bind="args"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <avatar-comp v-bind="args" />
      <avatar-comp v-bind="args" username="test user" />
    </div>
  `,
});
AvatarStates.args = {
  isCircle: true,
  size: "12",
};
AvatarStates.parameters = {
  docs: {
    storyDescription: "3 states are supported",
  },
};

export const ImageContainer = (args) => ({
  components: { AvatarComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center space-x-2">
      <avatar-comp v-bind="args" :is-circle="true" />
      <avatar-comp v-bind="args" />
    </div>
  `,
});
ImageContainer.args = {
  username: "test user",
  size: "12",
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
ImageContainer.parameters = {
  docs: {
    storyDescription:
      "shift between square or circle container by applying isCircle property",
  },
};
