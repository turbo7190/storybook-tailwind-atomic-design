import ImageComp from "./Image.vue";

export default {
  title: "Components/Atoms/Image",
  component: ImageComp,
  argTypes: {
    height: {
      type: "number",
    },
    url: {
      type: "string",
    },
    alt: {
      type: "string",
    },
  },
};
const ImageTemplate = (args) => ({
  components: { ImageComp },
  setup() {
    return { args };
  },
  template: '<image-comp v-bind="args" />',
});

export const Image = ImageTemplate.bind({});
Image.args = {
  alt: "test user",
  height: 6,
  width: 6,
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
export const Sizes = (args) => ({
  components: { ImageComp },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <image-comp v-bind="args" height="6" width="6" />
      <image-comp v-bind="args" height="8" width="8" />
      <image-comp v-bind="args" height="10" width="10" />
      <image-comp v-bind="args" height="12" width="12" />
      <image-comp v-bind="args" height="14" width="14" />
    </div>
  `,
});
Sizes.args = {
  alt: "test user",
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
Sizes.parameters = {
  docs: {
    storyDescription: "5 sizes are supported",
  },
};

// export const ImageStates = (args) => (
//   <div class="flex items-center space-x-2">
//     <ImageComp {...args} src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
//     <ImageComp {...args} image-type="placeholder-icon" />
//     <ImageComp {...args} username="test user" />
//   </div>
// );
// ImageStates.args = {
//   isCircle: true,
//   height: '12'
// };
// ImageStates.parameters = {
//   docs: {
//     storyDescription: '3 states are supported'
//   }
// }

// export const ImageContainer = (args) => (
//   <div class="flex items-center space-x-2">
//     <ImageComp {...args} is-circle />
//     <ImageComp {...args}  />

//   </div>
// );
// ImageContainer.args = {
//   username: 'test user',
//   height: '12',
//   src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
// };
// ImageContainer.parameters = {
//   docs: {
//     storyDescription: 'shift between square or circle container by applying isCircle property'
//   }
// }
