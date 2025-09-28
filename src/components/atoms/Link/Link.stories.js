import LinkComp from "./Link.vue";

export default {
  title: "Components/Atoms/Link",
  component: LinkComp,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      description: "assign size to text",
    },
    color: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500"],
      description: "set text's color",
    },
    hoverColor: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500"],
      description: "set text's color on hover",
    },
    focusColor: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500"],
      description: "set text's color on focus",
    },
    hoverBg: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500"],
      description: "set background color on hover",
    },
    focusBg: {
      control: { type: "select" },
      options: ["gray-500", "red-500", "green-500"],
      description: "set background color on focus",
    },
    content: {
      type: "string",
      description: "pass the string to be displayed",
    },
    align: {
      control: { type: "select" },
      options: ["left", "right", "center"],
      description: "for text alignment",
    },
    transform: {
      control: { type: "select" },
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
      description: "provide transformation options",
    },
    decoration: {
      control: { type: "select" },
      options: ["underline", "line-through", "no-underline"],
      description: "set decoration on text content",
    },
    weight: {
      control: { type: "select" },
      options: [
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semi-bold",
        "bold",
        "extrabold",
        "black",
      ],
    },
    url: {
      type: "string",
      description: "url to navigate to on clicking on link",
    },
  },
  parameters: {
    componentSubtitle: "Displays Link with custom options",
  },
};

const LinkTemplate = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: '<link-comp v-bind="args" />',
});

export const Link = LinkTemplate.bind({});
Link.args = {
  size: "base",
  color: "gray-500",
  content: "This is a test",
  align: "left",
  transform: "normal-case",
  decoration: "no-underline",
};

export const Sizes = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp v-bind="args" size="xs" content="xs" />
      <link-comp v-bind="args" size="sm" content="sm" />
      <link-comp v-bind="args" size="base" content="base" />
      <link-comp v-bind="args" size="lg" content="lg" />
      <link-comp v-bind="args" size="xl" content="xl" />
      <link-comp v-bind="args" size="2xl" content="2xl" />
      <link-comp v-bind="args" size="3xl" content="3xl" />
      <link-comp v-bind="args" size="4xl" content="4xl" />
      <link-comp v-bind="args" size="5xl" content="5xl" />
      <link-comp v-bind="args" size="6xl" content="6xl" />
      <link-comp v-bind="args" size="7xl" content="7xl" />
      <link-comp v-bind="args" size="8xl" content="8xl" />
      <link-comp v-bind="args" size="9xl" content="9xl" />
    </div>
  `,
});
Sizes.args = {
  color: "gray-500",
  weight: "medium",
};
Sizes.parameters = {
  docs: {
    storyDescription: "sizes from sm to 9xl are supported",
  },
};

export const Color = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp v-bind="args" size="base" color="black" />
      <link-comp v-bind="args" size="base" color="green-700" />
      <link-comp v-bind="args" size="base" color="red-600" />
    </div>
  `,
});
Color.args = {
  content: "Color",
  weight: "bold",
};
Color.parameters = {
  docs: {
    storyDescription: "provide color to text",
  },
};

export const LinkUrl = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp
        v-bind="args"
        size="base"
        color="black"
        url="https://www.google.com/"
        content="Google"
      />
    </div>
  `,
});
LinkUrl.args = {
  weight: "medium",
};
LinkUrl.parameters = {
  docs: {
    storyDescription: "provide url to link text",
  },
};

export const HoverColorAndBackground = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp v-bind="args" size="base" color="black" hover-color="blue-500" />
      <link-comp
        v-bind="args"
        size="base"
        color="green-700"
        hover-bg="black"
        hover-color="white"
      />
    </div>
  `,
});
HoverColorAndBackground.args = {
  content: "Hover me",
  weight: "bold",
};
HoverColorAndBackground.parameters = {
  docs: {
    storyDescription: "provide hover color and background to link text",
  },
};

export const FocusColorAndBackground = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp v-bind="args" size="base" color="black" focus-color="blue-500" />
      <link-comp
        v-bind="args"
        size="base"
        color="green-700"
        focus-bg="black"
        focus-color="white"
      />
    </div>
  `,
});
FocusColorAndBackground.args = {
  content: "Focus me",
  weight: "bold",
};
FocusColorAndBackground.parameters = {
  docs: {
    storyDescription: "provide focus color and background to link text",
  },
};

export const Align = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <div class="w-24 bg-green-700">
        <link-comp v-bind="args" size="base" align="left" content="left" />
      </div>
      <div class="w-24 bg-green-700">
        <link-comp v-bind="args" size="base" align="right" content="right" />
      </div>
      <div class="w-24 bg-green-700">
        <link-comp v-bind="args" size="base" align="center" content="center" />
      </div>
    </div>
  `,
});
Align.args = {
  weight: "medium",
  color: "white",
};
Align.parameters = {
  docs: {
    storyDescription: "provide alignment options to text",
  },
};

export const Transformation = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp v-bind="args" transform="uppercase" content="uppercase" />
      <link-comp v-bind="args" transform="lowercase" content="lowercase" />
      <link-comp v-bind="args" transform="capitalize" content="capitalize" />
      <link-comp v-bind="args" transform="normal-case" content="NorMalcase" />
    </div>
  `,
});
Transformation.args = {
  weight: "bold",
  size: "base",
  color: "green-700",
};
Transformation.parameters = {
  docs: {
    storyDescription: "provide transformation to text",
  },
};

export const Decoration = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp v-bind="args" decoration="underline" content="underline" />
      <link-comp v-bind="args" decoration="line-through" content="line-through" />
      <link-comp v-bind="args" decoration="no-underline" content="no-underline" />
    </div>
  `,
});
Decoration.args = {
  weight: "bold",
  color: "green-700",
  size: "base",
};
Decoration.parameters = {
  docs: {
    storyDescription: "provide decoration options to text",
  },
};

export const Weight = (args) => ({
  components: { LinkComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <link-comp v-bind="args" weight="thin" content="thin" />
      <link-comp v-bind="args" weight="extralight" content="extraligh" />
      <link-comp v-bind="args" weight="light" content="light" />
      <link-comp v-bind="args" weight="normal" content="normal" />
      <link-comp v-bind="args" weight="medium" content="medium" />
      <link-comp v-bind="args" weight="semibold" content="semibold" />
      <link-comp v-bind="args" weight="bold" content="bold" />
      <link-comp v-bind="args" weight="extrabold" content="extrabold" />
      <link-comp v-bind="args" weight="black" content="black" />
    </div>
  `,
});
Weight.args = {
  color: "green-700",
  weight: "medium",
  size: "sm",
};
Weight.parameters = {
  docs: {
    storyDescription: "font weight are supported",
  },
};
