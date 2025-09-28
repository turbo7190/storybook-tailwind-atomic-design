import Component from './BrandPanelWithOverlappingImage.vue';

export default {
  title: 'Components/Organisms/CTA Sections',
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
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    image: {
      type: 'string',
      description: 'logo url'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a brand panel with overlapping image'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const BrandPanelWithOverlappingImage = Template.bind({});
BrandPanelWithOverlappingImage.args = {
  title: 'Join our team',
  description: 'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
  btnText: 'Explore open positions',
  image: 'https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
  onClick: () => console.log('clicked'),
};
