import Component from './WithTruncatedContentPreview.vue';

export default {
  title: 'Components/Organisms/Stacked Lists',
  component: Component,
  argTypes: {
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithTruncatedContentPreview = Template.bind({});
WithTruncatedContentPreview.args = {
  messages: [
    {
      id: 1,
      subject: 'Velit placeat sit ducimus non sed',
      sender: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    // More messages...
  ]
};
