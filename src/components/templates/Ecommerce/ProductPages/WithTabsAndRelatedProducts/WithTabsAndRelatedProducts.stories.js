import Component from "./WithTabsAndRelatedProducts.vue";

export default {
  title: "Components/Templates/Ecommerce/Product Pages",
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

export const WithTabsAndRelatedProducts = Template.bind({});
WithTabsAndRelatedProducts.args = {
  navigation: {
    categories: [
      {
        id: "wireframe",
        name: "Wireframe Kits",
        featured: [
          {
            name: "Scaffold",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
            imageAlt:
              "Pricing page screenshot with tiered plan options and comparison table on colorful blue and green background.",
          },
          {
            name: "Bones",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
            imageAlt:
              "Application screenshot with tiered navigation and account settings form on color red and purple background.",
          },
        ],
        sections: [
          {
            id: "application",
            name: "Application UI",
            items: [
              { name: "Home Screens", href: "#" },
              { name: "Detail Screens", href: "#" },
              { name: "Settings Screens", href: "#" },
            ],
          },
          {
            id: "marketing",
            name: "Marketing",
            items: [
              { name: "Landing Pages", href: "#" },
              { name: "Pricing Pages", href: "#" },
              { name: "Contact Pages", href: "#" },
            ],
          },
          {
            id: "ecommerce",
            name: "Ecommerce",
            items: [
              { name: "Storefront Pages", href: "#" },
              { name: "Product Pages", href: "#" },
              { name: "Category Pages", href: "#" },
              { name: "Shopping Cart Pages", href: "#" },
              { name: "Checkout Pages", href: "#" },
            ],
          },
        ],
      },
      {
        id: "icons",
        name: "Icons",
        featured: [
          {
            name: "Application UI Pack",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
            imageAlt:
              "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
          },
          {
            name: "Marketing Icon Pack",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
            imageAlt:
              "Calendar user interface screenshot with icon buttons and orange-yellow theme.",
          },
        ],
        sections: [
          {
            id: "general",
            name: "General Use",
            items: [
              { name: "Heroicons Solid", href: "#" },
              { name: "Heroicons Outline", href: "#" },
              { name: "Line Illustrations", href: "#" },
              { name: "Hero Illustrations", href: "#" },
              { name: "Branded Illustrations", href: "#" },
              { name: "Skeuomorphic Illustrations", href: "#" },
              { name: "Hand Drawn Illustrations", href: "#" },
            ],
          },
          {
            id: "application",
            name: "Application UI",
            items: [
              { name: "Outlined", href: "#" },
              { name: "Solid", href: "#" },
              { name: "Branded", href: "#" },
              { name: "Small", href: "#" },
              { name: "Illustrations", href: "#" },
            ],
          },
          {
            id: "marketing",
            name: "Marketing",
            items: [
              { name: "Outlined", href: "#" },
              { name: "Solid", href: "#" },
              { name: "Branded", href: "#" },
              { name: "Small", href: "#" },
              { name: "Illustrations", href: "#" },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: "UI Kits", href: "#" },
      { name: "Themes", href: "#" },
    ],
  },
  product: {
    name: "Application UI Icon Pack",
    version: { name: "1.0", date: "June 5, 2021", datetime: "2021-06-05" },
    price: "$220",
    description:
      "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
    highlights: [
      "200+ SVG icons in 3 unique styles",
      "Compatible with Figma, Sketch, and Adobe XD",
      "Drawn on 24 x 24 pixel grid",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    imageAlt:
      "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
  },
  reviews: {
    average: 4,
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
        date: "July 16, 2021",
        datetime: "2021-07-16",
        author: "Emily Selman",
        avatarSrc:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      },
      {
        id: 2,
        rating: 5,
        content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        author: "Hector Gibbons",
        avatarSrc:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      },
      // More reviews...
    ],
  },
  faqs: [
    {
      question: "What format are these icons?",
      answer:
        "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
    },
    {
      question: "Can I use the icons at different sizes?",
      answer:
        "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
    },
    // More FAQs...
  ],
  license: {
    href: "#",
    summary:
      "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
    content: `
    <h4>Overview</h4>

    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>

    <h4>What you can do with it</h4>

    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>

    <h4>What you can\'t do with it</h4>

    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
  },
  relatedProducts: [
    {
      id: 1,
      name: "Fusion",
      category: "UI Kit",
      href: "#",
      price: "$49",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt:
        "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
    },
    // More products...
  ],
  footerNavigation: {
    products: [
      { name: "Wireframe Kits", href: "#" },
      { name: "Icons", href: "#" },
      { name: "UI Kits", href: "#" },
      { name: "Themes", href: "#" },
    ],
    company: [
      { name: "Who we are", href: "#" },
      { name: "Open Source", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "License", href: "#" },
      { name: "Privacy", href: "#" },
    ],
    customerService: [
      { name: "Chat", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Secure Payments", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
};
