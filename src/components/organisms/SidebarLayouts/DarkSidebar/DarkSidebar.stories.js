import Component from './DarkSidebar.vue';

export default {
  title: 'Components/Organisms/Sidebar Layouts',
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
    componentSubtitle: 'Display a sidebar navigation with icons,logo and  profile with dark set as default theme'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const DarkSidebar = Template.bind({});
DarkSidebar.args = {
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
