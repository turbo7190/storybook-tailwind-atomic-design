import Component from './TwoColumnInCard.vue';

export default {
  title: 'Components/Organisms/Description Lists',
  component: Component,
  argTypes: {
    heading: {
      type: 'string',
      description: 'heading of description list'
    },
    subheading: {
      type: 'string',
      description: 'subheading of description list'
    },
    list: {
      type: 'array',
      description: 'list of key value pairs'
    },
  },
  parameters: {
    componentSubtitle: 'Description list with key value pairs and sublists in 2 column layout, use twoColumn to show item in whole column'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TwoColumnInCard = Template.bind({});
TwoColumnInCard.args = {
  heading: "Applicant Information",
  subheading: "Personal details and application.",
  list: [
    {
      id: "ID001",
      key:"Full name",
      description: "Margot Foster",
      sublist: []
    },
    {
      id: "ID002",
      key:"Application for",
      description: "Backend Developer",
      sublist: []
    },
    {
      id: "ID003",
      key:"Email address",
      description: "margotfoster@example.com",
      sublist: []
    },
    {
      id: "ID004",
      key:"Salary expectation",
      description: "$120,000",
      sublist: []
    },
    {
      id: "ID005",
      key:"About",
      twoColumn: true,
      description: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
      sublist: []
    },
    {
      id: "ID006",
      key: "Attachments",
      twoColumn: true,
      description:'',
      sublist: [
        {
          id: "ID007",
          icon: 'PaperClipIcon',
          text: ' resume_back_end_developer.pdf',
          action:  {
            link: '#',
            label: 'Downlaod'
          }
        },
        {
          id: "ID008",
          icon: 'PaperClipIcon',
          text: ' cover_letter_back_end_developer.pdf',
          action:  {
            link: '#',
            label: 'Downlaod'
          }
        }
      ]

    }
  ]
};
