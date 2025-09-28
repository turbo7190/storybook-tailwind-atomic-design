import Component from './FullWidthSecondaryColumnOnRight.vue';

export default {
  title: 'Components/Organisms/Multi-Column Layouts',
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
    headerLogo: {
      type: 'object',
      description: 'header logo'
    },
    navSelectedItem: {
      type: 'object',
      description: 'selected item for navigation'
    },
    navItemClicked: {
      action: 'navItemClicked'
    },
    user: {
      type: 'string',
      description: 'to show information in profile section'
    },
  },
  parameters: {
    componentSubtitle: 'Multicolumn layout with sidebar, secondaryColumn and default slot for content,secondary column slot is hidden on small screens'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<component v-bind="args">
                <div class="text-sm p-4 font-medium text-gray-900 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <template #secondaryColumn>
                  <div class="text-sm p-2 font-medium text-gray-900">
                    Secondary Column slot
                  </div>
                </template>
            </component>`,
});


export const FullWidthSecondaryColumnOnRight = Template.bind({});
FullWidthSecondaryColumnOnRight.args = {
  user: {
    avatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    name: 'Whitney Francis',
    role: 'View Profile'
  },
  logo: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    title: 'workflow'
  },
  headerLogo: {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: 'workflow'
  },
  navigation: [
    {id:1,name: 'Dashboard', icon: 'HomeIcon', href: '#'},
    {id:2,name: 'Team', icon: 'UsersIcon', href: '#'},
    {id:3,name: 'Projects', icon: 'FolderIcon', href: '#'},
    {id:4,name: 'Calendar', icon: 'CalendarIcon', href: '#'},
    {id:5,name: 'Documents', icon: 'InboxIcon', href: '#'},
    {id:6,name: 'Reports', icon: 'ChartBarIcon', href: '#'},
  ],
  navSelectedItem: {
    id:3,name: 'Projects', icon: 'FolderIcon', href: '#'
  },
};
