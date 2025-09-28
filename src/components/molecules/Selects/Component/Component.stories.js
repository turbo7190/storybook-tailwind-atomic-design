import Component from './Component.vue';

export default {
  title: 'Components/Molecules/Selects',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'list to populate select'
    },
    selectedItem: {
      type:'string',
      description: 'selected value'
    },
    label: {
      type: 'string',
      description: 'label of select'
    }
  },
  parameters: {
    componentSubtitle:
      'Displays a Select with list of items with variations',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CustomWithAvatar = Template.bind({});
CustomWithAvatar.args = {
  items: [
    {
      id: 1,
      name: 'Wade Cooper',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Arlene Mccoy',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Devon Webb',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Tom Cook',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 5,
      name: 'Tanya Fox',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
  ],
  label: 'Assigned To',
  selectedItem:   {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

export const CustomWithStatusIndicator = Template.bind({});
CustomWithStatusIndicator.args = {
  items: [
    { id: 1, name: 'Wade Cooper', online: true },
    { id: 2, name: 'Arlene Mccoy', online: false },
    { id: 3, name: 'Devon Webb', online: false },
    { id: 4, name: 'Tom Cook', online: true },
    { id: 5, name: 'Tanya Fox', online: false },
  ],
  label: 'Assigned To',
  selectedItem:     { id: 4, name: 'Tom Cook', online: true },
};

export const SimpleCustom = Template.bind({});
SimpleCustom.args = {
  items: [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
  ],
  label: 'Assigned To',
  selectedItem:  { id: 5, name: 'Tanya Fox' },
};

export const WithSecondaryText = Template.bind({});
WithSecondaryText.args = {
  items: [
    { name: 'Wade Cooper', username: '@wadecooper' },
    { name: 'Arlene Mccoy', username: '@arlenemccoy' },
    { name: 'Devon Webb', username: '@devonwebb' },
    { name: 'Tom Cook', username: '@tomcook' },
    { name: 'Tanya Fox', username: '@tanyafox' },
  ],
  label: 'Assigned To',
  selectedItem:   { name: 'Devon Webb', username: '@devonwebb' }
};
