import Component from './FullWidthWithNarrowBrandedSidebar.vue';

export default {
  title: 'Components/Organisms/Multi-Column Layouts',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items list'
    },
    logo: {
      type: 'string',
      description: 'navigation menu logo'
    },
    headerLogo: {
      type: 'string',
      description: 'header logo'
    },
    sideNavLogo: {
      type: 'string',
      description: 'sidenav logo'
    },
    user: {
      type: 'object',
      description: 'navigation bottom user object'
    },
    navSelectedItem: {
      type: 'object',
      description: 'selected item for navigation'
    },
    navItemClicked: {
      action: 'navItemClicked'
    },
    headerBgColor: {
      control: {type: 'select'},
      options: ['gray-600', 'red-600', 'green-600', 'primary-600', 'white'],
      description: 'background color of header'
    },
    headerButtonHoverBgColor: {
      control: {type: 'select'},
      options: ['gray-700', 'red-700', 'green-700', 'primary-700', 'white'],
      description: 'background color of header on hover'
    },
  },
  parameters: {
    componentSubtitle: 'Display a narrow brand navigation, sidebar, header with logo, primary and secondary column'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<component v-bind="args">
                <template #secondaryColumn>
                  <div class="text-sm text-gray-900 font-medium p-4">
                    Secondary Column
                  </div>
                </template>
                <template #primaryColumn>
                  <div class="text-sm text-gray-900 font-medium p-4">
                    Primary Column
                  </div>
                </template>
              </component>`,
});

export const FullWidthWithNarrowBrandedSidebar = Template.bind({});
FullWidthWithNarrowBrandedSidebar.args = {
  user: {
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Emily Selman',
    role: 'View profile'
  },
  sideNavLogo: {
    src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'workflow'
  },
  headerLogo:{
    src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
    title: 'workflow'
  },
  logo:{
    src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
    title: 'workflow'
  },
  navigation: [
    {id: 1, name: 'Home', href: '#', icon: 'HomeIcon'},
    {id: 2, name: 'Trending', href: '#', icon: 'FireIcon'},
    {id: 3, name: 'Bookmarks', href: '#', icon: 'BookmarkSquareIcon'},
    {id: 4, name: 'Messages', href: '#', icon: 'InboxIcon'},
    {id: 5, name: 'Profile', href: '#', icon: 'UserIcon'}
  ],
  navSelectedItem: {id: 3, name: 'Bookmarks', href: '#', icon: 'BookmarkSquareIcon'}
};
