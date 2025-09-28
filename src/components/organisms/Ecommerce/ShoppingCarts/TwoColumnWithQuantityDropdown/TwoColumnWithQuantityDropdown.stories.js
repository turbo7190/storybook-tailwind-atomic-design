import Component from './TwoColumnWithQuantityDropdown.vue';

export default {
    title: 'Components/Organisms/Ecommerce/Shopping Carts',
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

export const TwoColumnWithQuantityDropdown = Template.bind({});
TwoColumnWithQuantityDropdown.args = {
    shipping: 5,
    tax: 8.32,
    products: [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            price: 32,
            color: 'Sienna',
            inStock: true,
            size: 'Large',
            imageSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            imageAlt: "Front of men's Basic Tee in sienna.",
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            price: 32,
            color: 'Black',
            inStock: false,
            leadTime: '3–4 weeks',
            size: 'Large',
            imageSrc: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
            imageAlt: "Front of men's Basic Tee in black.",
        },
        {
            id: 3,
            name: 'Nomad Tumbler',
            href: '#',
            price: 35,
            color: 'White',
            inStock: true,
            imageSrc: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            imageAlt: 'Insulated bottle with white base and black snap lid.',
        },
    ]
};
