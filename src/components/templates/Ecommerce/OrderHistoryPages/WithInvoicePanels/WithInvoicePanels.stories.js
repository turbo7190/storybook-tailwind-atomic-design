import Component from "./WithInvoicePanels.vue";

export default {
  title: "Components/Templates/Ecommerce/Order History Pages",
  component: Component,
  argTypes: {
    content: {
      type: "string",
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

export const WithInvoicePanels = Template.bind({});
WithInvoicePanels.args = {
  navigation: {
    categories: [
      {
        name: "Women",
        clothing: [
          [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
          ],
          [
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Shorts", href: "#" },
            { name: "Swimwear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        ],
        accessories: [
          { name: "Shoes", href: "#" },
          { name: "Jewelry", href: "#" },
          { name: "Handbags", href: "#" },
          { name: "Socks", href: "#" },
          { name: "Hats", href: "#" },
          { name: "Browse All", href: "#" },
        ],
        categories: [
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
          { name: "Basic Tees", href: "#" },
          { name: "Artwork Tees", href: "#" },
        ],
      },
      {
        name: "Men",
        clothing: [
          [
            { name: "Dress Shirts", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jeans", href: "#" },
            { name: "Hoodies", href: "#" },
          ],
          [
            { name: "Vests", href: "#" },
            { name: "Kilts", href: "#" },
            { name: "Outdoors", href: "#" },
            { name: "Capes", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        ],
        accessories: [
          { name: "Watches", href: "#" },
          { name: "Boots", href: "#" },
          { name: "Fanny Packs", href: "#" },
          { name: "Sunglasses", href: "#" },
          { name: "Browse All", href: "#" },
        ],
        categories: [
          { name: "Just Added", href: "#" },
          { name: "Clearance", href: "#" },
          { name: "Graphic Tees", href: "#" },
        ],
      },
    ],
    other: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  },
  orders: [
    {
      number: "WU88191111",
      href: "#",
      invoiceHref: "#",
      createdDate: "Jul 6, 2021",
      createdDatetime: "2021-07-06",
      deliveredDate: "July 12, 2021",
      deliveredDatetime: "2021-07-12",
      total: "$160.00",
      products: [
        {
          id: 1,
          name: "Micro Backpack",
          description:
            "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
          href: "#",
          price: "$70.00",
          imageSrc:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
          imageAlt:
            "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
        },
        // More products...
      ],
    },
    // More orders...
  ],
  footerNavigation: {
    products: [
      { name: "Bags", href: "#" },
      { name: "Tees", href: "#" },
      { name: "Objects", href: "#" },
      { name: "Home Goods", href: "#" },
      { name: "Accessories", href: "#" },
    ],
    company: [
      { name: "Who we are", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy", href: "#" },
    ],
    customerService: [
      { name: "Contact", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "Secure Payments", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Find a store", href: "#" },
    ],
  },
};
