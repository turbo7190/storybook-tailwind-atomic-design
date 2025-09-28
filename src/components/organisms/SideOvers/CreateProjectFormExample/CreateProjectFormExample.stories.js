import Component from './CreateProjectFormExample.vue';

export default {
  title: 'Components/Organisms/Side Overs',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'title'
    },
    description: {
      type: 'string',
      description: 'description'
    },
    forms: {
      type: 'array',
      description: 'forms list'
    },
    team: {
      type: 'array',
      description: 'team members'
    },
    yesBtnText: {
      type: 'string',
      description: 'yes button text'
    },
    noBtnText: {
      type: 'string',
      description: 'no button text'
    },
    onYesClick: {
      action: 'clicked',
      description: 'yes button action'
    },
    onNoClick: {
      action: 'clicked',
      description: 'no button action'
    },
    linkText: {
      type: 'string',
      description: 'link text'
    },
    helpText: {
      type: 'string',
      description: 'help ext'
    }
  },
  parameters: {
    componentSubtitle: 'Display a side over to create project'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CreateProjectFormExample = Template.bind({});
CreateProjectFormExample.args = {
  title: 'New Project',
  description: 'Get started by filling in the information below to create your new project',
  forms: [
    {
      label: 'Project name',
      value: '',
      multiple: false,
    },
    {
      label: 'Description',
      value: '',
      multiple: true,
    }
  ],
  linkText: 'Copy link',
  helpText: 'Learn more about sharing',
  yesBtnText: 'Save',
  noBtnText: 'Cancel',
  onYesClick: () => console.log('clicked'),
  onNoClick: () => console.log('clicked'),
  team: [
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Whitney Francis',
      email: 'whitney.francis@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leonard Krasner',
      email: 'leonard.krasner@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Floyd Miles',
      email: 'floy.dmiles@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Selman',
      email: 'emily.selman@example.com',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
};
