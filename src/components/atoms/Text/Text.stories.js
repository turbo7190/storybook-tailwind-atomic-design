import TextComp from "./Text.vue";

export default {
  title: "Components/Atoms/Text",
  component: TextComp,
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
    element: {
      type: "string",
      description:
        "use to switch between div and span. By default it is set to div",
    },
  },
  parameters: {
    componentSubtitle: "Displays Text with custom options",
  },
};

const TextTemplate = (args) => ({
  components: { TextComp },
  setup() {
    return { args };
  },
  template: '<text-comp v-bind="args" />',
});

export const Text = TextTemplate.bind({});
Text.args = {
  size: "base",
  color: "gray-500",
  content: "This is a test",
  align: "left",
  transform: "normal-case",
  decoration: "no-underline",
};

export const Sizes = (args) => ({
  components: { TextComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <text-comp v-bind="args" size="xs" content="xs" />
      <text-comp v-bind="args" size="sm" content="sm" />
      <text-comp v-bind="args" size="base" content="base" />
      <text-comp v-bind="args" size="lg" content="lg" />
      <text-comp v-bind="args" size="xl" content="xl" />
      <text-comp v-bind="args" size="2xl" content="2xl" />
      <text-comp v-bind="args" size="3xl" content="3xl" />
      <text-comp v-bind="args" size="4xl" content="4xl" />
      <text-comp v-bind="args" size="5xl" content="5xl" />
      <text-comp v-bind="args" size="6xl" content="6xl" />
      <text-comp v-bind="args" size="7xl" content="7xl" />
      <text-comp v-bind="args" size="8xl" content="8xl" />
      <text-comp v-bind="args" size="9xl" content="9xl" />
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
  components: { TextComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <text-comp v-bind="args" size="base" color="black" />
      <text-comp v-bind="args" size="base" color="green-700" />
      <text-comp v-bind="args" size="base" color="red-600" />
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

export const Align = (args) => ({
  components: { TextComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <div class="w-24 bg-green-700">
        <text-comp v-bind="args" size="base" align="left" content="left" />
      </div>
      <div class="w-24 bg-green-700">
        <text-comp v-bind="args" size="base" align="right" content="right" />
      </div>
      <div class="w-24 bg-green-700">
        <text-comp v-bind="args" size="base" align="center" content="center" />
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
  components: { TextComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <text-comp v-bind="args" transform="uppercase" content="uppercase" />
      <text-comp v-bind="args" transform="lowercase" content="lowercase" />
      <text-comp v-bind="args" transform="capitalize" content="capitalize" />
      <text-comp v-bind="args" transform="normal-case" content="NorMalcase" />
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
  components: { TextComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <text-comp v-bind="args" decoration="underline" content="underline" />
      <text-comp v-bind="args" decoration="line-through" content="line-through" />
      <text-comp v-bind="args" decoration="no-underline" content="no-underline" />
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
  components: { TextComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <text-comp v-bind="args" weight="thin" content="thin" />
      <text-comp v-bind="args" weight="extralight" content="extraligh" />
      <text-comp v-bind="args" weight="light" content="light" />
      <text-comp v-bind="args" weight="normal" content="normal" />
      <text-comp v-bind="args" weight="medium" content="medium" />
      <text-comp v-bind="args" weight="semibold" content="semibold" />
      <text-comp v-bind="args" weight="bold" content="bold" />
      <text-comp v-bind="args" weight="extrabold" content="extrabold" />
      <text-comp v-bind="args" weight="black" content="black" />
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

export const SpanOrDivElement = (args) => ({
  components: { TextComp },
  setup() {
    return { args };
  },
  template: `
    <div>
      <text-comp v-bind="args" content="span1" element="span" class="mr-2" />
      <text-comp v-bind="args" content="span2" element="span" />
      <text-comp v-bind="args" content="Div1" />
      <text-comp v-bind="args" content="Div2" />
    </div>
  `,
});
SpanOrDivElement.args = {
  color: "green-700",
  weight: "medium",
  size: "sm",
};
SpanOrDivElement.parameters = {
  docs: {
    storyDescription:
      "use element prop to switch between span and div element.",
  },
};
