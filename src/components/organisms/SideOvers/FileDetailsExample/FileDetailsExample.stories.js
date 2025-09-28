import Component from './FileDetailsExample.vue';

export default {
  title: 'Components/Organisms/Side Overs',
  component: Component,
  argTypes: {
    file: {
      type: 'object',
      description: 'file'
    }
  },
  parameters: {
    componentSubtitle: 'Display a file detail form'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const FileDetailsExample = Template.bind({});
FileDetailsExample.args = {
  file: {
    image: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    name: 'IMG_3453.HEIC',
    size: 3.9,
    creator: 'Marie Culver',
    createdAt: 'June 8, 2020',
    updatedAt: 'June 8, 2020',
    dimensions: '4032 x 3024',
    resolution: '72 x 72',
    description: '',
    users: [
      {
        avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
        name: 'Aimee Douglas'
      },
      {
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Andrea McMillan'
      }
    ],
    buttons: [
      {
        label: 'Download',
        type: 'primary',
        action: () => {}
      },
      {
        label: 'Delete',
        type: 'secondary',
        action: () => {}
      }
    ]
  }
};
