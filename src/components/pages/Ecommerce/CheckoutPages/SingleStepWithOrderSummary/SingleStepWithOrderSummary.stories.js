import Component from "./SingleStepWithOrderSummary.vue";

export default {
  title: "Components/Templates/Ecommerce/Checkout Pages",
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

export const SingleStepWithOrderSummary = Template.bind({});
SingleStepWithOrderSummary.args = {
  currencies: ["CAD", "USD", "AUD", "EUR", "GBP"],
  navigation: {
    categories: [
      {
        name: "Women",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
          },
          {
            name: "Accessories",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Model wearing minimalist watch with black wristband and white watch face.",
          },
          {
            name: "Carry",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
            imageAlt:
              "Model opening tan leather long wallet with credit card pockets and cash pouch.",
          },
        ],
      },
      {
        name: "Men",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt: "Model wearing light heather gray t-shirt.",
          },
          {
            name: "Accessories",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
          },
          {
            name: "Carry",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  },
  products: [
    {
      id: 1,
      title: "Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Black",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
  ],
  deliveryMethods: [
    {
      id: 1,
      title: "Standard",
      turnaround: "4–10 business days",
      price: "$5.00",
    },
    {
      id: 2,
      title: "Express",
      turnaround: "2–5 business days",
      price: "$16.00",
    },
  ],
  paymentMethods: [
    { id: "credit-card", title: "Credit card" },
    { id: "paypal", title: "PayPal" },
    { id: "etransfer", title: "eTransfer" },
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
