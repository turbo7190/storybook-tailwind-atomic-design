import Component from "./WithExpandableProductDetails.vue";

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

export const WithExpandableProductDetails = Template.bind({});
WithExpandableProductDetails.args = {
  navigation: {
    categories: [
      {
        id: "women",
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
        ],
        sections: [
          [
            {
              id: "shoes",
              name: "Shoes & Accessories",
              items: [
                { name: "Sneakers", href: "#" },
                { name: "Boots", href: "#" },
                { name: "Flats", href: "#" },
                { name: "Sandals", href: "#" },
                { name: "Heels", href: "#" },
                { name: "Socks", href: "#" },
              ],
            },
            {
              id: "collection",
              name: "Shop Collection",
              items: [
                { name: "Everything", href: "#" },
                { name: "Core", href: "#" },
                { name: "New Arrivals", href: "#" },
                { name: "Sale", href: "#" },
                { name: "Accessories", href: "#" },
              ],
            },
          ],
          [
            {
              id: "clothing",
              name: "All Clothing",
              items: [
                { name: "Basic Tees", href: "#" },
                { name: "Artwork Tees", href: "#" },
                { name: "Tops", href: "#" },
                { name: "Bottoms", href: "#" },
                { name: "Swimwear", href: "#" },
                { name: "Underwear", href: "#" },
              ],
            },
            {
              id: "accessories",
              name: "All Accessories",
              items: [
                { name: "Watches", href: "#" },
                { name: "Wallets", href: "#" },
                { name: "Bags", href: "#" },
                { name: "Sunglasses", href: "#" },
                { name: "Hats", href: "#" },
                { name: "Belts", href: "#" },
              ],
            },
          ],
          [
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Full Nelson", href: "#" },
                { name: "My Way", href: "#" },
                { name: "Re-Arranged", href: "#" },
                { name: "Counterfeit", href: "#" },
                { name: "Significant Other", href: "#" },
              ],
            },
          ],
        ],
      },
      {
        id: "men",
        name: "Men",
        featured: [
          {
            name: "Accessories",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
          },
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Drawstring top with elastic loop closure and textured interior padding.",
          },
          {
            name: "Artwork Tees",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
          },
        ],
        sections: [
          [
            {
              id: "shoes",
              name: "Shoes & Accessories",
              items: [
                { name: "Sneakers", href: "#" },
                { name: "Boots", href: "#" },
                { name: "Sandals", href: "#" },
                { name: "Socks", href: "#" },
              ],
            },
            {
              id: "collection",
              name: "Shop Collection",
              items: [
                { name: "Everything", href: "#" },
                { name: "Core", href: "#" },
                { name: "New Arrivals", href: "#" },
                { name: "Sale", href: "#" },
              ],
            },
          ],
          [
            {
              id: "clothing",
              name: "All Clothing",
              items: [
                { name: "Basic Tees", href: "#" },
                { name: "Artwork Tees", href: "#" },
                { name: "Pants", href: "#" },
                { name: "Hoodies", href: "#" },
                { name: "Swimsuits", href: "#" },
              ],
            },
            {
              id: "accessories",
              name: "All Accessories",
              items: [
                { name: "Watches", href: "#" },
                { name: "Wallets", href: "#" },
                { name: "Bags", href: "#" },
                { name: "Sunglasses", href: "#" },
                { name: "Hats", href: "#" },
                { name: "Belts", href: "#" },
              ],
            },
          ],
          [
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Re-Arranged", href: "#" },
                { name: "Counterfeit", href: "#" },
                { name: "Full Nelson", href: "#" },
                { name: "My Way", href: "#" },
              ],
            },
          ],
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  },
  product: {
    name: "Zip Tote Basket",
    price: "$140",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
      {
        name: "Features",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      // More sections...
    ],
  },
  relatedProducts: [
    {
      id: 1,
      name: "Zip Tote Basket",
      color: "White and black",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "$140",
    },
    // More products...
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
