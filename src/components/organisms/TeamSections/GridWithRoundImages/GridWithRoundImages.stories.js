import Component from './GridWithRoundImages.vue';

export default {
  title: 'Components/Organisms/Team Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    people: {
      type: 'array',
      description: 'teammates list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a team section with round images'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const GridWithRoundImages = Template.bind({});
GridWithRoundImages.args = {
  people: [
    {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    // More people...
  ],
  title: 'The People',
  description: 'Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam in.'
};
