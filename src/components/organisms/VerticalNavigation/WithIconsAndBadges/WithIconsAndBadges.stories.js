import Component from './WithIconsAndBadges.vue';

export default {
  title: 'Components/Organisms/Vertical Navigation/WithIconsAndBadges',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items'
    },
    iconSelectionColor: {
      control: {type: 'select'},
      options: ['gray-500', 'red-300', 'green-300', 'primary-300', 'white'],
      description: 'use it for assigning icon color of current selection'
    },
    textSelectionColor: {
      ontrol: {type: 'select'},
      options: ['gray-900', 'red-300', 'green-300', 'primary-300', 'white'],
      description: 'use it for assigning text color of current selection'
    },
    badgeSelectionColor: {
      ontrol: {type: 'select'},
      options: ['gray-50', 'red-50', 'green-50', 'primary-50', 'white'],
      description: 'use it for assigning text color of badge of current selection'
    },
    selectedItem: {
      type: 'object',
      description: 'selected item for navigation'
    },
    navCustomClass: {
      type: 'string',
      description: 'custom class for navigation bar'
    },
    bgColor: {
      control: {type: 'select'},
      options: ['gray-700', 'red-700', 'green-700', 'primary-700', 'white'],
      description: 'background color of navigation bar'
    },
    selectionBgColor: {
      control: {type: 'select'},
      options: ['gray-100', 'red-800', 'green-800', 'primary-800', 'black'],
      description: 'background color of navigation bar'
    },
    hoverBg: {
      control: {type: 'select'},
      options: ['gray-50', 'red-600', 'green-600', 'primary-600', 'black'],
      description: 'background color of navigation bar on hover'
    },
    hoverBgOpacity: {
      type: 'string',
      description: 'background opacity of navigation bar on hover'
    },
    hoverTextColor: {
      control: {type: 'select'},
      options: ['gray-900', 'red-900', 'green-900', 'primary-900', 'black'],
      description: 'text color of navigation bar item on hover'
    },
    iconColor: {
      control: {type: 'select'},
      options: ['gray-400', 'red-300', 'green-300', 'primary-300', 'white'],
      description: 'icon color'
    },
    textColor: {
      control: {type: 'select'},
      options: ['gray-100', 'red-100', 'green-100', 'primary-100', 'black'],
      description: 'text color'
    },
    badgeColor: {
      control: {type: 'select'},
      options: ['gray-200', 'red-200', 'green-200', 'primary-200', 'black'],
      description: 'badge color'
    },
    itemClicked: {
      action: 'item clicked'
    },
  },
  parameters: {
    componentSubtitle: 'Display a vertical navigation with icons and badges'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  navigation: [
    {id:1,name: 'Dashboard', href: '#', icon: 'HomeIcon', current: true, count: '5'},
    {id:2,name: 'Team', href: '#', icon: 'UsersIcon', current: false},
    {id:3,name: 'Projects', href: '#', icon: 'FolderIcon', current: false, count: '19'},
    {id:4,name: 'Calendar', href: '#', icon: 'CalendarIcon', current: false, count: '20+'},
    {id:5,name: 'Documents', href: '#', icon: 'InboxIcon', current: false},
    {id:6,name: 'Reports', href: '#', icon: 'ChartBarIcon', current: false},
  ],
  selectedItem:  {id:3,name: 'Projects', href: '#', icon: 'FolderIcon', current: false, count: '19'},
};
export const Brand = Template.bind({});
Brand.args = {
  navigation: [
    {id:1,name: 'Dashboard', href: '#', icon: 'HomeIcon', current: true, count: '5'},
    {id:2,name: 'Team', href: '#', icon: 'UsersIcon', current: false},
    {id:3,name: 'Projects', href: '#', icon: 'FolderIcon', current: false, count: '19'},
    {id:4,name: 'Calendar', href: '#', icon: 'CalendarIcon', current: false, count: '20+'},
    {id:5,name: 'Documents', href: '#', icon: 'InboxIcon', current: false},
    {id:6,name: 'Reports', href: '#', icon: 'ChartBarIcon', current: false},
  ],
  selectedItem:  {id:3,name: 'Projects', href: '#', icon: 'FolderIcon', current: false, count: '19'},
  iconColor: 'primary-300',
  bgColor: 'primary-700',
  textColor: 'primary-100',
  textSelectionColor: 'white',
  iconSelectionColor: 'primary-300',
  hoverBg: 'primary-600',
  hoverBgOpacity: 'opacity-75',
  selectionBgColor: 'primary-800',
  badgeColor:'primary-800',
  badgeSelectionColor: 'primary-600'
};
