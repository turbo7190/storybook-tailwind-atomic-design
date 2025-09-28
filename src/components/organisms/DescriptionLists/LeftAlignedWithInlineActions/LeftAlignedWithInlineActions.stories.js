import Component from './LeftAlignedWithInlineActions.vue';

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
    actionClicked: {
      action: 'action clicked'
    }
  },
  parameters: {
    componentSubtitle: 'Description list with key value pairs and sublists and actions'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const LeftAlignedWithInlineActions = Template.bind({});
LeftAlignedWithInlineActions.args = {
  heading: "Applicant Information",
  subheading: "Personal details and application.",
  list: [
    {
      id: "ID001",
      key:"Full name",
      description: "Margot Foster",
      sublist: [],
      action: 'Update'
    },
    {
      id: "ID002",
      key:"Application for",
      description: "Backend Developer",
      sublist: [],
      action: 'Update'
    },
    {
      id: "ID003",
      key:"Email address",
      description: "margotfoster@example.com",
      sublist: [],
      action: 'Update'
    },
    {
      id: "ID004",
      key:"Salary expectation",
      description: "$120,000",
      sublist: [],
      action: 'Update'
    },
    {
      id: "ID005",
      key:"About",
      description: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
      sublist: [],
      action: 'Update'
    },
    {
      id: "ID006",
      key: "Attachments",
      description:'',
      sublist: [
        {
          id: "ID007",
          icon: 'PaperClipIcon',
          text: ' resume_back_end_developer.pdf',
          actions:  ['Update', 'Remove']
        },
        {
          id: "ID008",
          icon: 'PaperClipIcon',
          text: ' cover_letter_back_end_developer.pdf',
          actions: ['Update', 'Remove']
        }
      ]

    }
  ]
};