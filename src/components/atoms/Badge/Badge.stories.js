import BadgeComp from "./Badge.vue";

export default {
  title: "Components/Atoms/Badge",
  component: BadgeComp,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "assign size to badge",
    },
    borderWidth: {
      control: { type: "select" },
      options: [2, 4],
      description: "assign border size to badge",
    },
    borderColor: {
      control: { type: "select" },
      options: ["white", "black"],
      description: "assign border color to badge",
    },
    bgColor: {
      control: { type: "select" },
      options: ["gray", "red", "green"],
      description: "assign background color to badge",
    },
    bgWeight: {
      control: { type: "select" },
      options: [100, 200, 300, 400, 500, 600, 700, 800],
      description: "assign background color weight to badge",
    },
    isTop: {
      control: { type: "boolean" },
      description: "switch between top and bottom position",
    },
    isRight: {
      control: { type: "boolean" },
      description: "switch between right and left position",
    },
  },
  parameters: {
    componentSubtitle:
      "Displays a badge that can be used with an avatar or any other component to show status",
  },
};

const BadgeTemplate = (args) => ({
  components: { BadgeComp },
  setup() {
    return { args };
  },
  template: '<badge-comp v-bind="args" />',
});

export const Badge = BadgeTemplate.bind({});
Badge.args = {
  size: 6,
  isTop: true,
  isRight: false,
  bgColor: "green",
  bgWeight: 100,
  borderWidth: 2,
  borderColor: "white",
};

export const Sizes = (args) => ({
  components: { BadgeComp },
  setup() {
    return { args };
  },
  template: `
      <badge-comp v-bind="args"/>
  `,
});
Sizes.args = {
  bgColor: "red",
  bgWeight: "500",
  isRight: false,
  isTop: false,
  size: 6,
};
Sizes.parameters = {
  docs: {
    storyDescription: "6 sizes are supported",
  },
};

export const Border = (args) => ({
  components: { BadgeComp },
  setup() {
    return { args };
  },
  template: `
      <badge-comp v-bind="args" size="6" border-color="green" border-width="2" />
  `,
});
Border.args = {
  bgColor: "red",
  bgWeight: "100",
  isTop: true,
};
Border.parameters = {
  docs: {
    storyDescription: "give both border color and width to set border",
  },
};

export const BackgroundColor = (args) => ({
  components: { BadgeComp },
  setup() {
    return { args };
  },
  template: `
    <div>
      <badge-comp v-bind="args" size="6" bg-color="green" bg-weight="900" is-top />
    </div>
  `,
});

BackgroundColor.parameters = {
  docs: {
    storyDescription: "use bgColor along with bgWeight to set background color",
  },
};

export const Positions = (args) => ({
  components: { BadgeComp },
  setup() {
    return { args };
  },
  template: `
      <badge-comp v-bind="args" size="6" :is-top="true" />
  `,
});
Positions.args = {
  bgColor: "red",
  bgWeight: "100",
};
Positions.parameters = {
  docs: {
    storyDescription:
      "4 positions top-left, top-right, bottom-left and bottom-right",
  },
};
