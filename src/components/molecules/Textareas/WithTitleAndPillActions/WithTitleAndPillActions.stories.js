import Component from './WithTitleAndPillActions.vue';

export default {
  title: 'Components/Molecules/Textareas',
  component: Component,
  argTypes: {
    titleValue: {
      type: 'string',
      description: 'value of textarea'
    },
    descriptionValue: {
      type: 'string',
      description: 'value of textarea'
    },
    label: {
      type: 'string',
      description: 'label of textarea'
    },
    placeholder: {
      type: 'string',
      description: 'placeholder of textarea'
    },
    customClass: {
      type: 'string',
      description: 'extra class of textarea form'
    },
    title: {
      type: 'string',
      description: 'title of textarea form'
    },
    description: {
      type: 'string',
      description: 'description of textarea form'
    },
    assignees: {
      type: 'array',
      description: 'items of assignee actions'
    },
    assignedOption: {
      type: 'object',
      description: 'item of selected assignee'
    },
    labels: {
      type: 'array',
      description: 'items of label actions'
    },
    labelledOption: {
      type: 'object',
      description: 'item of selected label'
    },
    dueDates: {
      type: 'array',
      description: 'items of date actions'
    },
    datedOption: {
      type: 'object',
      description: 'item of selected date'
    }
  },
  parameters: {
    componentSubtitle: 'Display a textarea with title and pill actions'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});



const assignees = [
	{ name: 'Unassigned', value: null },
	{
		name: 'Wade Cooper',
		value: 'wade-cooper',
		avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	// More items...
]
const labels = [
	{ name: 'Unlabelled', value: null },
	{ name: 'Engineering', value: 'engineering' },
	// More items...
]
const dueDates = [
	{ name: 'No due date', value: null },
	{ name: 'Today', value: 'today' },
	// More items...
]
export const WithTitleAndPillActions = Template.bind({});
WithTitleAndPillActions.args = {
  assignees,
  labels,
  dueDates,
  assignedOption: assignees[0],
  labelledOption: labels[0],
  datedOption: dueDates[0],
  title: 'Title',
  description: 'Description',
  titleValue: '',
  descriptionValue: '',
  placeholder: 'Write a description...'
};
