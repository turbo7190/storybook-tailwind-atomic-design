import Component from './Basic.vue';

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

export const Basic = Template.bind({});
Basic.args = {
    type: "button",
    items: ["Years", "Months", "Days"],
    variant: "primary",
    size: "md"
};
