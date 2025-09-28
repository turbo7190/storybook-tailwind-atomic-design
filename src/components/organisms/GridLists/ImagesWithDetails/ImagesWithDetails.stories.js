import Component from './ImagesWithDetails.vue';

export default {
  title: 'Components/Organisms/Grid Lists',
  component: Component,
  argTypes: {
    files: {
      type: 'array',
      description: 'list of image files with details'
    }
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ImagesWithDetails = Template.bind({});
ImagesWithDetails.args = {
  items: [
    {
      title: 'IMG_4985.HEIC',
      size: '3.9 MB',
      source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
      title: 'IMG_4951.HEIC',
      size: '4.9 MB',
      source:
        'https://images.unsplash.com/photo-1662401174604-4f5994714259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
      title: 'IMG_4912.HEIC',
      size: '2.9 MB',
      source:
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    // More files...
  ]
};
