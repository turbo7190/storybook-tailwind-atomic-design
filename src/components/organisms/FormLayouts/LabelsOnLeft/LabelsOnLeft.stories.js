import Component from './LabelsOnLeft.vue';

export default {
  title: 'Components/Organisms/Form Layouts',
  component: Component,
  argTypes: {
    saveAction: {
      action: 'save action'
    },
    cancelAction: {
      action: 'cancel'
    },
    submitButtonText: {
      type: 'string',
      description: 'submit button label'
    },
    cancelButtonText: {
      type: 'string',
      description: 'cancel button label'
    }
  },
  parameters: {
    componentSubtitle:
      'Displays a form layout with labels on left, options to provide dynamic field on basis of field type, save and cancel action',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const LabelsOnLeft = Template.bind({});
LabelsOnLeft.args = {
  submitButtonText: 'Save',
  cancelButtonText: 'Cancel',
  sections: [
    {
      id: 1,
      name: 'Profile',
      description: 'This information will be displayed publicly so be careful what you share.',
      fields: [
        {
          id: 'f11',
          type:'InputAddOn',
          label: 'Username',
          model: 'username',
          addOn: 'workcation.com/',
          placeholder: 'Type here'
        },
        {
          id: 'f12',
          type:'TextArea',
          label: 'About',
          model: 'about',
          helpText: 'Write a few sentences about yourself.',
          placeholder: 'Type here'
        },
        {
          id: 'f13',
          type:'UploadImage',
          label: 'Photo',
          model: 'avatar',
          buttonText: 'Change',
        },
        {
          id: 'f14',
          type:'FileDragAndDrop',
          label: 'Cover Photo',
          model: 'filePath',
          linkText: 'Upload a file',
          helpText: ' or drag and drop /n  PNG, JPG, GIF up to 10MB'
        }
      ]
    },
    {
      id: 2,
      name: 'Personal Information',
      description: 'Use a permanent address where you can receive mail.',
      fields: [
        {
          id: 'f21',
          type:'Input',
          label: 'First name',
          model: 'firstName',
          placeholder: 'Type here'
        },
        {
          id: 'f22',
          type:'Input',
          label: 'Last name',
          model: 'lastName',
          placeholder: 'Type here'
        },
        {
          id: 'f23',
          type:'Input',
          label: 'Email',
          model: 'email',
          placeholder: 'Type here'
        },
        {
          id: 'f24',
          type:'Select',
          label: 'Country',
          model: 'country',
          placeholder: 'Select an option',
          items: [{text:'Canada',value:'Canada'},{text:'USA',value:'USA'}]
        },
        {
          id: 'f25',
          type:'Input',
          label: 'Street Address',
          model: 'streetAddress',
          placeholder: 'Type here'
        },
        {
          id: 'f26',
          type:'Input',
          label: 'City',
          model: 'city',
          placeholder: 'Type here'
        },
        {
          id: 'f27',
          type:'Input',
          label: 'State / Province',
          model: 'state',
          placeholder: 'Type here'
        },
        {
          id: 'f28',
          type:'Input',
          label: 'ZIP / Postal Code',
          model: 'postalCode',
          placeholder: 'Type here'
        },
      ]
    },
    {
      id: 3,
      name: 'Notifications',
      description: "We'll always let you know about important changes, but you pick what else you want to hear about.",
      fields: [
        {
          id: 'f31',
          type:'CheckboxesWithDescription',
          label: 'By Email',
          model: 'emailNotifications',
          items: [
            {
              id: 'Comments',
              name: 'Comments',
              title: 'Comments',
              description: 'Get notified when someones posts a comment on a posting.'
            },
            {
              id: 'Candidates',
              name: 'Candidates',
              title: 'Candidates',
              description: 'Get notified when a candidate applies for a job.'
            },
            {
              id: 'Offers',
              name: 'Offers',
              title: 'Offers',
              description: 'Get notified when a candidate accepts or rejects an offer.'
            }
          ]
        },
        {
          id: 'f32',
          type: 'RadioGroup',
          label: 'Push Notifications',
          description: 'These are delivered via SMS to your mobile phone.',
          model: 'pushNotifications',
          items:  [
            {id: 0, title: 'Everything'},
            {id: 1, title: 'Same as email'},
            {id: 2, title: 'No push notifications'},
          ]


        }
      ]
    }
  ]
};
