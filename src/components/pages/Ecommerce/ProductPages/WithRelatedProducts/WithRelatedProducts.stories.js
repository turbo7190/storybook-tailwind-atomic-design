import Component from "./WithRelatedProducts.vue";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/vue/24/outline";

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

export const WithRelatedProducts = Template.bind({});
WithRelatedProducts.args = {
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
    name: "Basic Tee",
    price: "$35",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
        id: 2,
        imageSrc:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
        id: 3,
        imageSrc:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
    ],
    colors: [
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
      {
        name: "Heather Grey",
        bgColor: "bg-gray-400",
        selectedColor: "ring-gray-400",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
    details: [
      "Only the best materials",
      "Ethically and locally made",
      "Pre-washed and pre-shrunk",
      "Machine wash cold with similar colors",
    ],
  },
  policies: [
    {
      name: "International delivery",
      icon: "GlobeAmericasIcon",
      description: "Get your order in 2 years",
    },
    {
      name: "Loyalty rewards",
      icon: "CurrencyDollarIcon",
      description: "Don't look at other tees",
    },
  ],
  reviews: {
    average: 3.9,
    totalCount: 512,
    featured: [
      {
        id: 1,
        title: "Can't say enough good things",
        rating: 5,
        content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
        author: "Risako M",
        date: "May 16, 2021",
        datetime: "2021-01-06",
      },
      // More reviews...
    ],
  },
  relatedProducts: [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      imageAlt: "Front of men's Basic Tee in white.",
      price: "$35",
      color: "Aspen White",
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
