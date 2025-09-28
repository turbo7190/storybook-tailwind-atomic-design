import Component from './SimpleWithIconAndLogo.vue';

export default {
  title: 'Components/Organisms/Sidebar Navigation/SimpleWitIconAndLogo',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items list'
    },
    logo: {
      type: 'object',
      description: 'navigation menu logo'
    },
    navSelectedItem: {
      type: 'object',
      description: 'selected item for navigation'
    },
    navCustomClass: {
      type: 'string',
      description: 'custom class for navigation bar'
    },
    navBgColor: {
      control: {type: 'select'},
      options: ['gray-700', 'red-700', 'green-700', 'primary-700', 'white'],
      description: 'background color of navigation bar'
    },
    navSelectionBgColor: {
      control: {type: 'select'},
      options: ['gray-100', 'red-800', 'green-800', 'primary-800', 'black'],
      description: 'background color of navigation bar'
    },
    navHoverBg: {
      control: {type: 'select'},
      options: ['gray-50', 'red-600', 'green-600', 'primary-600', 'black'],
      description: 'background color of navigation bar on hover'
    },
    navHoverTextColor: {
      control: {type: 'select'},
      options: ['gray-900', 'red-900', 'green-900', 'primary-900', 'black'],
      description: 'text color of navigation bar item on hover'
    },
    navIconColor: {
      control: {type: 'select'},
      options: ['gray-400', 'red-300', 'green-300', 'primary-300', 'white'],
      description: 'icon color'
    },
    navTextColor: {
      control: {type: 'select'},
      options: ['gray-100', 'red-100', 'green-100', 'primary-100', 'black'],
      description: 'text color'
    },
    navIconSelectionColor: {
      control: {type: 'select'},
      options: ['gray-300', 'red-300', 'green-300', 'primary-300', 'white'],
      description: 'icon color of selected item'
    },
    navTextSelectionColor: {
      control: {type: 'select'},
      options: ['gray-300', 'red-300', 'green-300', 'primary-300', 'white'],
      description: 'text color of selected item'
    },
    navItemClicked: {
      action: 'navItemClicked'
    },
    user: {
      type: 'string',
      description: 'to show information in profile section'
    },
    profileTitleTextColor: {
      type: 'string',
      description: 'text color of title in profile section'
    },
    profileSubtitleTextColor: {
      type: 'string',
      description: 'text color of subtitle in profile section'
    },
    profileTopBorderColor: {
      type: 'string',
      description: 'top border color for profile'
    },
    profileSectionCustomClass: {
      type: 'string',
      description: 'custom class for profile'
    },
  },
  parameters: {
    componentSubtitle: 'Display a sidebar navigation with icons,logo and  profile'
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
  logo: {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    title: 'Workflow'
  },
  navigation: [
    {id:1,name: 'Dashboard', icon: 'HomeIcon', href: '#'},
    {id:2,name: 'Team', icon: 'UsersIcon', href: '#'},
    {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
    {id:4,name: 'Calendar', icon: 'CalendarIcon', href: '#'},
    {id:5,name: 'Documents', icon: 'InboxIcon', href: '#'},
    {id:6,name: 'Reports', icon: 'ChartBarIcon', href: '#'},
  ],
  navSelectedItem: {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
};
export const DefaultWithProfile = Template.bind({});
DefaultWithProfile.args = {
  user: {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Tom Cook',
    role: 'View profile'
  },
  logo: {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    title: 'Workflow'
  },
  navigation: [
    {id:1,name: 'Dashboard', icon: 'HomeIcon', href: '#'},
    {id:2,name: 'Team', icon: 'UsersIcon', href: '#'},
    {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
    {id:4,name: 'Calendar', icon: 'CalendarIcon', href: '#'},
    {id:5,name: 'Documents', icon: 'InboxIcon', href: '#'},
    {id:6,name: 'Reports', icon: 'ChartBarIcon', href: '#'},
  ],
  navSelectedItem: {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
};
export const Brand = Template.bind({});
Brand.args = {

  logo: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    title: 'Workflow'
  },
  navigation: [
    {id:1,name: 'Dashboard', icon: 'HomeIcon', href: '#'},
    {id:2,name: 'Team', icon: 'UsersIcon', href: '#'},
    {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
    {id:4,name: 'Calendar', icon: 'CalendarIcon', href: '#'},
    {id:5,name: 'Documents', icon: 'InboxIcon', href: '#'},
    {id:6,name: 'Reports', icon: 'ChartBarIcon', href: '#'},
  ],
  navSelectedItem: {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
  navIconColor: 'primary-300',
  navBgColor: 'primary-700',
  navTextColor: 'primary-100',
  navTextSelectionColor: 'white',
  navIconSelectionColor: 'primary-300',
  navHoverBg: 'primary-600',
  navHoverBgOpacity: 'opacity-75',
  navSelectionBgColor: 'primary-800',
  navBadgeColor:'primary-800',
  navBadgeSelectionColor: 'primary-600',
};
export const BrandWithProfile = Template.bind({});
BrandWithProfile.args = {
  user: {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Tom Cook',
    role: 'View profile'
  },
  logo: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    title: 'Workflow'
  },
  navigation: [
    {id:1,name: 'Dashboard', icon: 'HomeIcon', href: '#'},
    {id:2,name: 'Team', icon: 'UsersIcon', href: '#'},
    {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
    {id:4,name: 'Calendar', icon: 'CalendarIcon', href: '#'},
    {id:5,name: 'Documents', icon: 'InboxIcon', href: '#'},
    {id:6,name: 'Reports', icon: 'ChartBarIcon', href: '#'},
  ],
  navSelectedItem: {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
  navIconColor: 'primary-300',
  navBgColor: 'primary-700',
  navTextColor: 'primary-100',
  navTextSelectionColor: 'white',
  navIconSelectionColor: 'primary-300',
  navHoverBg: 'primary-600',
  navHoverBgOpacity: 'opacity-75',
  navSelectionBgColor: 'primary-800',
  navBadgeColor:'primary-800',
  navBadgeSelectionColor: 'primary-600',
  profileTopBorderColor: 'primary-800',
  profileTitleTextColor: 'white',
  profileSubtitleTextColor:'primary-200'
};
export const Dark = Template.bind({});
Dark.args = {
  user: {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Tom Cook',
    role: 'View profile'
  },
  logo: {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: 'Workflow'
  },
  navigation: [
    {id:1,name: 'Dashboard', icon: 'HomeIcon', href: '#'},
    {id:2,name: 'Team', icon: 'UsersIcon', href: '#'},
    {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
    {id:4,name: 'Calendar', icon: 'CalendarIcon', href: '#'},
    {id:5,name: 'Documents', icon: 'InboxIcon', href: '#'},
    {id:6,name: 'Reports', icon: 'ChartBarIcon', href: '#'},
  ],
  navSelectedItem: {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
  navIconColor: 'gray-400',
  navBgColor: 'gray-800',
  navTextColor: 'gray-300',
  navTextSelectionColor: 'white',
  navIconSelectionColor: 'gray-300',
  navHoverBg: 'gray-700',
  navHoverBgOpacity: 'opacity-75',
  navSelectionBgColor: 'gray-900',
  profileTopBorderColor: 'gray-700',
  profileTitleTextColor: 'white',
  profileSubtitleTextColor:'gray-300',
  navHoverTextColor: 'white',
  profileSectionCustomClass: 'bg-gray-700'
};
