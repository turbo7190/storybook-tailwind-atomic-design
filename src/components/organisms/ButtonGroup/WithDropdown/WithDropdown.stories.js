import Component from './WithDropdown.vue';

export default {
    title: 'Components/Organisms/ButtonGroup',
    component: Component,
    argTypes: {
    },
};

const Template = (args) => ({
    components: {Component},
    setup() {
        return {args};
    },
    template: '<component v-bind="args" />',
});

export const WithDropdown = Template.bind({});
WithDropdown.args = {
    type: "button",
    variant: "primary",
    size: "md",
    icon: "ChevronDownIcon",
    iconColor: "white",
    iconHoverColor: "gray-500",
    items: [
        {value: 'Save Change', href: '#'},
        {value: 'Save and schedule', href: '#'},
        {value: 'Save and publish', href: '#'},
        {value: 'Export PDF', href: '#'},
    ]
};
