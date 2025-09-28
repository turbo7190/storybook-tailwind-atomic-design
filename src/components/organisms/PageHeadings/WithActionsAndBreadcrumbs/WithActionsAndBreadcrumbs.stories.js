import Component from './WithActionsAndBreadcrumbs.vue';

export default {
  title: 'Components/Organisms/Page Headings',
  component: Component,
  argTypes: {
    breadcrumbs: {
      type: 'array',
      description: 'breadcrumbs list'
    },
    title: {
      type: 'string',
      description: 'header title'
    },
    meta: {
      type: 'array',
      description: 'meta items list'
    },
    buttons: {
      type: 'array',
      description: 'action buttons list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a page header with breadcrumbs, title, meta, and buttons.'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithActionsAndBreadcrumbs = Template.bind({});
WithActionsAndBreadcrumbs.args = {
  breadcrumbs: [
    { name: 'Jobs', href: '#', current: false },
    { name: 'Engineering', href: '#', current: false },
    { name: 'Backend Developer', href: '#', current: true },
  ],
  title: 'Back End Developer',
  buttons: [
    {
      label: 'Edit',
      type: 'secondary',
      onClick: () => console.log('clicked'),
    },
    {
      label: 'Publish',
      type: 'primary',
      onClick: () => console.log('clicked'),
    }
  ]
};

WithActionsAndBreadcrumbs.parameters = {
  description: 'With action buttons and breadcrumbs'
}

export const WithAction = Template.bind({});
WithAction.args = {
  title: 'Back End Developer',
  buttons: [
    {
      label: 'Edit',
      type: 'secondary',
      onClick: () => console.log('clicked'),
    },
    {
      label: 'Publish',
      type: 'primary',
      onClick: () => console.log('clicked'),
    }
  ],
};

WithAction.parameters = {
  description: 'With action buttons'
}

export const WithMetaAction = Template.bind({});
WithMetaAction.args = {
  breadcrumbs: [
    { name: 'Jobs', href: '#', current: false },
    { name: 'Engineering', href: '#', current: false },
    { name: 'Backend Developer', href: '#', current: true },
  ],
  title: 'Back End Developer',
  buttons: [
    {
      label: 'Edit',
      type: 'secondary',
      onClick: () => console.log('clicked'),
    },
    {
      label: 'Publish',
      type: 'primary',
      onClick: () => console.log('clicked'),
    }
  ],
  meta: [
    {
      icon: 'BriefcaseIcon',
      label: 'Full-time'
    },
    {
      icon: 'MapPinIcon',
      label: 'Remote'
    },
    {
      icon: 'CurrencyDollarIcon',
      label: '$120k ~ $140k'
    },
    {
      icon: 'CalendarIcon',
      label: 'Closing on January 9, 2020'
    }
  ]
};
