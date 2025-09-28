import Component from "./TwoColumnCardsWithSidebar.vue";

export default {
  title: "Components/Organisms/Form Layouts",
  component: Component,
  argTypes: {
    saveAction: {
      action: "save action",
    },
    sections: {
      type: "array",
      description: "list of sections",
    },
    navigation: {
      type: "array",
      description: "list of navigation items",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TwoColumnCardsWithSidebar = Template.bind({});
TwoColumnCardsWithSidebar.args = {
  navigation: [
    {
      id: 1,
      name: "Account",
      model: "account",
      href: "#",
      icon: "UserCircleIcon",
      current: true,
      sections: [
        {
          id: 1,
          name: "Profile",
          formModel: "profile",
          customClass: "",
          submitButtonText: "Save",
          col: "3",
          description:
            "This information will be displayed publicly so be careful what you share.",
          fields: [
            {
              id: "f11",
              type: "InputAddOn",
              label: "Website",
              model: "website",
              addOn: "workcation.com/",
              placeholder: "Type here",
              col: "4",
            },
            {
              id: "f12",
              type: "TextArea",
              label: "About",
              model: "about",
              helpText: "Write a few sentences about yourself.",
              placeholder: "Type here",
              col: "6",
            },
            {
              id: "f13",
              type: "UploadImage",
              label: "Photo",
              model: "avatar",
              buttonText: "Change",
              col: "6",
            },
            {
              id: "f14",
              type: "FileDragAndDrop",
              label: "Cover Photo",
              model: "filePath",
              linkText: "Upload a file",
              helpText: " or drag and drop /n  PNG, JPG, GIF up to 10MB",
              col: "6",
            },
          ],
        },
        {
          id: 2,
          name: "Personal Information",
          formModel: "personalInformation",
          col: "6",
          description: "Use a permanent address where you can receive mail.",
          submitButtonText: "Save",
          // customClass:"h-screen overflow-scroll",
          fields: [
            {
              id: "f21",
              type: "Input",
              label: "First name",
              model: "firstName",
              placeholder: "Type here",
              col: "6",
              smCol: "3",
            },
            {
              id: "f22",
              type: "Input",
              label: "Last name",
              model: "lastName",
              placeholder: "Type here",
              col: "6",
              smCol: "3",
            },
            {
              id: "f23",
              type: "Input",
              label: "Email Address",
              model: "email",
              placeholder: "Type here",
              col: "6",
              smCol: "4",
            },
            {
              id: "f24",
              type: "Select",
              label: "Country",
              model: "country",
              placeholder: "Select an option",
              items: [
                { text: "Canada", value: "Canada" },
                { text: "USA", value: "USA" },
              ],
              col: "6",
              smCol: "3",
            },
            {
              id: "f25",
              type: "Input",
              label: "Street Address",
              model: "streetAddress",
              placeholder: "Type here",
              col: "6",
            },
            {
              id: "f26",
              type: "Input",
              label: "City",
              model: "city",
              placeholder: "Type here",
              col: "6",
              smCol: "6",
              lgCol: "2",
            },
            {
              id: "f27",
              type: "Input",
              label: "State / Province",
              model: "state",
              placeholder: "Type here",
              col: "6",
              smCol: "3",
              lgCol: "2",
            },
            {
              id: "f28",
              type: "Input",
              label: "ZIP / Postal Code",
              model: "postalCode",
              placeholder: "Type here",
              col: "6",
              smCol: "3",
              lgCol: "2",
            },
          ],
        },
        {
          id: 3,
          name: "Notifications",
          formModel: "notifications",
          col: "3",
          submitButtonText: "Save",
          description:
            "We'll always let you know about important changes, but you pick what else you want to hear about.",
          fields: [
            {
              id: "f31",
              type: "CheckboxesWithDescription",
              label: "By Email",
              model: "emailNotifications",
              items: [
                {
                  id: "Comments",
                  name: "Comments",
                  title: "Comments",
                  description:
                    "Get notified when someones posts a comment on a posting.",
                },
                {
                  id: "Candidates",
                  name: "Candidates",
                  title: "Candidates",
                  description:
                    "Get notified when a candidate applies for a job.",
                },
                {
                  id: "Offers",
                  name: "Offers",
                  title: "Offers",
                  description:
                    "Get notified when a candidate accepts or rejects an offer.",
                },
              ],
            },
            {
              id: "f32",
              type: "RadioGroup",
              label: "Push Notifications",
              description: "These are delivered via SMS to your mobile phone.",
              model: "pushNotifications",
              items: [
                { id: 0, title: "Everything" },
                { id: 1, title: "Same as email" },
                { id: 2, title: "No push notifications" },
              ],
            },
          ],
          fullColumn: true,
        },
      ],
    },
    {
      id: 2,
      name: "Security",
      model: "security",
      href: "#",
      icon: "KeyIcon",
      current: false,
      sections: [
        {
          id: 21,
          name: "Password",
          formModel: "password",
          customClass: "",
          submitButtonText: "Save",
          col: "3",
          description: "update password details",
          fields: [
            {
              id: "f211",
              type: "Input",
              label: "Old Password",
              inputType: "password",
              model: "oldPassword",
              placeholder: "Type here",
              helpText: "password should be atleast 8 characters long",
              col: "4",
            },
            {
              id: "f212",
              type: "Input",
              label: "New Password",
              inputType: "password",
              model: "newPassword",
              placeholder: "Type here",
              helpText: "password should be atleast 8 characters long",
              col: "4",
            },
            {
              id: "f213",
              type: "Input",
              label: "Confirm Password",
              inputType: "password",
              model: "confirmPassword",
              placeholder: "Type here",
              helpText: "password should be atleast 8 characters long",
              col: "4",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Plan & Billing",
      model: "billing",
      href: "#",
      icon: "CreditCardIcon",
      current: false,
      sections: [
        {
          id: 31,
          name: "Billing",
          formModel: "billing",
          customClass: "",
          submitButtonText: "Save",
          col: "3",
          description: "Setup billing preferences",
          fields: [
            {
              id: "f311",
              type: "Select",
              label: "Billing Period",
              model: "period",
              placeholder: "Select an option",
              items: [
                { text: "Annual", value: "Annual" },
                { text: "Monthly", value: "Monthly" },
              ],
              col: "4",
            },
            {
              id: "f312",
              type: "Input",
              label: "Voucher Code",
              inputType: "text",
              model: "voucher",
              placeholder: "Type here",
              col: "4",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Team",
      model: "team",
      href: "#",
      icon: "UserGroupIcon",
      current: false,
      sections: [
        {
          id: 41,
          name: "Project Details",
          formModel: "project",
          customClass: "",
          submitButtonText: "Save",
          col: "3",
          description: "Add project Details for team you are building",
          fields: [
            {
              id: "f411",
              type: "Input",
              label: "Project Name",
              inputType: "text",
              model: "projectName",
              placeholder: "Type here",
              col: "4",
            },
            {
              id: "f412",
              type: "Select",
              label: "Duration",
              model: "duration",
              placeholder: "Select an option",
              items: [
                { text: "6 Months", value: "6 Months" },
                { text: "1 Year", value: "1 Year" },
              ],
              col: "4",
            },
            {
              id: "f413",
              type: "Input",
              label: "Team Size",
              inputType: "text",
              model: "teamSize",
              placeholder: "Type here",
              col: "4",
            },
          ],
        },
      ],
    },
  ],
  // navigationWithSections: {

  // },
  // sections: [
  //   {
  //     id: 1,
  //     name: 'Profile',
  //     formModel: 'profile',
  //     customClass: '',
  //     submitButtonText: 'Save',
  //     col: '3',
  //     description: 'This information will be displayed publicly so be careful what you share.',
  //     fields: [
  //       {
  //         id: 'f11',
  //         type:'InputAddOn',
  //         label: 'Website',
  //         model: 'website',
  //         addOn: 'workcation.com/',
  //         placeholder: 'Type here',
  //         col:'4'
  //       },
  //       {
  //         id: 'f12',
  //         type:'TextArea',
  //         label: 'About',
  //         model: 'about',
  //         helpText: 'Write a few sentences about yourself.',
  //         placeholder: 'Type here',
  //         col:'6'
  //       },
  //       {
  //         id: 'f13',
  //         type:'UploadImage',
  //         label: 'Photo',
  //         model: 'avatar',
  //         buttonText: 'Change',
  //         col:'6'
  //       },
  //       {
  //         id: 'f14',
  //         type:'FileDragAndDrop',
  //         label: 'Cover Photo',
  //         model: 'filePath',
  //         linkText: 'Upload a file',
  //         helpText: ' or drag and drop /n  PNG, JPG, GIF up to 10MB',
  //         col:'6'
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'Personal Information',
  //     formModel:'personalInformation',
  //     col:'6',
  //     description: 'Use a permanent address where you can receive mail.',
  //     submitButtonText: 'Save',
  //     // customClass:"h-screen overflow-scroll",
  //     fields: [
  //       {
  //         id: 'f21',
  //         type:'Input',
  //         label: 'First name',
  //         model: 'firstName',
  //         placeholder: 'Type here',
  //         col:'6',
  //         smCol:'3'
  //       },
  //       {
  //         id: 'f22',
  //         type:'Input',
  //         label: 'Last name',
  //         model: 'lastName',
  //         placeholder: 'Type here',
  //         col:'6',
  //         smCol:'3'
  //       },
  //       {
  //         id: 'f23',
  //         type:'Input',
  //         label: 'Email Address',
  //         model: 'email',
  //         placeholder: 'Type here',
  //         col:'6',
  //         smCol:'4'
  //       },
  //       {
  //         id: 'f24',
  //         type:'Select',
  //         label: 'Country',
  //         model: 'country',
  //         placeholder: 'Select an option',
  //         items: [{text:'Canada',value:'Canada'},{text:'USA',value:'USA'}],
  //         col:'6',
  //         smCol:'3'
  //       },
  //       {
  //         id: 'f25',
  //         type:'Input',
  //         label: 'Street Address',
  //         model: 'streetAddress',
  //         placeholder: 'Type here',
  //         col:'6'
  //       },
  //       {
  //         id: 'f26',
  //         type:'Input',
  //         label: 'City',
  //         model: 'city',
  //         placeholder: 'Type here',
  //         col:'6',
  //         smCol: '6',
  //         lgCol: '2'
  //       },
  //       {
  //         id: 'f27',
  //         type:'Input',
  //         label: 'State / Province',
  //         model: 'state',
  //         placeholder: 'Type here',
  //         col:'6',
  //         smCol: '3',
  //         lgCol: '2'
  //       },
  //       {
  //         id: 'f28',
  //         type:'Input',
  //         label: 'ZIP / Postal Code',
  //         model: 'postalCode',
  //         placeholder: 'Type here',
  //         col:'6',
  //         smCol: '3',
  //         lgCol: '2'
  //       },
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: 'Notifications',
  //     formModel: 'notifications',
  //     col:'3',
  //     submitButtonText: 'Save',
  //     description: "We'll always let you know about important changes, but you pick what else you want to hear about.",
  //     fields: [
  //       {
  //         id: 'f31',
  //         type:'CheckboxesWithDescription',
  //         label: 'By Email',
  //         model: 'emailNotifications',
  //         items: [
  //           {
  //             id: 'Comments',
  //             name: 'Comments',
  //             title: 'Comments',
  //             description: 'Get notified when someones posts a comment on a posting.'
  //           },
  //           {
  //             id: 'Candidates',
  //             name: 'Candidates',
  //             title: 'Candidates',
  //             description: 'Get notified when a candidate applies for a job.'
  //           },
  //           {
  //             id: 'Offers',
  //             name: 'Offers',
  //             title: 'Offers',
  //             description: 'Get notified when a candidate accepts or rejects an offer.'
  //           }
  //         ]
  //       },
  //       {
  //         id: 'f32',
  //         type: 'RadioGroup',
  //         label: 'Push Notifications',
  //         description: 'These are delivered via SMS to your mobile phone.',
  //         model: 'pushNotifications',
  //         items:  [
  //           {id: 0, title: 'Everything'},
  //           {id: 1, title: 'Same as email'},
  //           {id: 2, title: 'No push notifications'},
  //         ]
  //       }
  //     ],
  //     fullColumn: true
  //   }
  // ]
};
