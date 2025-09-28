# 🎨 Storybook Tailwind Atomic Design System

A comprehensive Vue.js component library built with Storybook, Tailwind CSS, and Atomic Design principles. This design system provides a scalable, maintainable, and reusable collection of UI components for modern web applications.

## 🌟 Features

- **🎯 Atomic Design Methodology**: Components organized into Atoms, Molecules, Organisms, and Pages
- **🎨 Tailwind CSS Integration**: Utility-first CSS framework with custom design tokens
- **📚 Storybook Documentation**: Interactive component playground and documentation
- **⚡ Vue 3 Composition API**: Modern Vue.js with TypeScript support
- **🎭 HeadlessUI Components**: Accessible, unstyled UI components
- **🔍 Heroicons Integration**: Beautiful, consistent iconography
- **📱 Responsive Design**: Mobile-first approach with breakpoint utilities
- **♿ Accessibility First**: WCAG compliant components with proper ARIA attributes

## 🏗️ Architecture

This design system follows the Atomic Design methodology, organizing components into four distinct levels:

### 🔬 Atoms (Basic Building Blocks)

- **Buttons**: Primary, Secondary, White variants with different sizes
- **Inputs**: Text inputs with various styles and add-ons
- **Icons**: Heroicons v2 integration with consistent sizing
- **Typography**: Text components with semantic styling
- **Images**: Responsive image components with lazy loading
- **Links**: Accessible link components with hover states
- **Badges**: Status indicators and labels
- **Avatars**: User profile images with fallbacks
- **Containers**: Layout containers with responsive behavior

### 🧬 Molecules (Component Combinations)

- **Forms**: Input groups, form wrappers, and validation states
- **Navigation**: Breadcrumbs, tabs, and step indicators
- **Cards**: Content cards with headers, footers, and media
- **Dropdowns**: Select components with search and multi-select
- **Radio Groups**: Selection components with various layouts
- **Checkboxes**: Form controls with labels and descriptions
- **Toggles**: Switch components with labels and states
- **Accordions**: Collapsible content sections
- **Steps**: Progress indicators and workflow navigation

### 🏢 Organisms (Complex UI Sections)

- **Headers**: Navigation bars with search, menus, and user profiles
- **Footers**: Site footers with links, social media, and company info
- **Hero Sections**: Landing page banners with CTAs
- **Feature Sections**: Product highlights and feature showcases
- **Testimonials**: Customer reviews and social proof
- **Pricing Tables**: Subscription and pricing displays
- **Blog Sections**: Content grids and article previews
- **E-commerce**: Product catalogs, shopping carts, and checkout flows
- **Contact Forms**: Lead generation and support forms
- **Data Tables**: Sortable, filterable data displays
- **Modals**: Dialog boxes and overlays
- **Sidebars**: Navigation panels and filters

### 📄 Pages (Complete Layouts)

- **Landing Pages**: Marketing and product pages
- **Dashboard Pages**: Admin and user interfaces
- **E-commerce Pages**: Storefronts and product pages
- **Contact Pages**: Support and contact information
- **404 Pages**: Error and not-found pages
- **Authentication**: Login, signup, and password reset
- **Settings**: User preferences and configuration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Modern web browser

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd storybook-tailwind-atomic-design
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Launch Storybook**

   ```bash
   npm run storybook
   ```

   Storybook will be available at `http://localhost:6006`

### Build for Production

```bash
# Build the main application
npm run build

# Build Storybook documentation
npm run build-storybook
```

## 📖 Usage

### Importing Components

```vue
<template>
  <div>
    <!-- Using atomic components -->
    <Button variant="primary" size="lg"> Click me </Button>

    <!-- Using molecular components -->
    <PrimaryButton @click="handleClick"> Save Changes </PrimaryButton>

    <!-- Using organism components -->
    <HeroSection
      :title="heroTitle"
      :description="heroDescription"
      :cta-text="ctaText"
    />
  </div>
</template>

<script setup>
import { Button } from "@/components/atoms/Button/Button.vue";
import { PrimaryButton } from "@/components/molecules/Button/Primary/Primary.vue";
import { HeroSection } from "@/components/organisms/HeroSections/Simple/Simple.vue";

const heroTitle = "Welcome to Our Platform";
const heroDescription = "Build amazing applications with our design system";
const ctaText = "Get Started";

const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

### Customizing with Tailwind CSS

All components are built with Tailwind CSS and can be customized using utility classes:

```vue
<template>
  <!-- Custom styling with Tailwind utilities -->
  <Button variant="primary" class="bg-purple-600 hover:bg-purple-700 shadow-lg">
    Custom Button
  </Button>
</template>
```

### Theme Customization

Modify the design tokens in `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom primary color palette
          50: "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
        // Add your brand colors
        brand: {
          purple: "#8b5cf6",
          green: "#10b981",
        },
      },
      fontFamily: {
        // Custom font families
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
```

## 🧪 Testing

The project includes comprehensive testing setup with Vitest and Playwright:

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run browser tests
npm run test:browser
```

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Icon/
│   │   └── ...
│   ├── molecules/       # Component combinations
│   │   ├── Form/
│   │   ├── Navigation/
│   │   ├── Card/
│   │   └── ...
│   ├── organisms/       # Complex UI sections
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   └── ...
│   └── pages/          # Complete layouts
│       ├── Landing/
│       ├── Dashboard/
│       └── ...
├── styles/             # Global styles and Tailwind config
└── utils/              # Helper functions and utilities
```

## 🎨 Design Tokens

The design system uses a consistent set of design tokens:

### Colors

- **Primary**: Blue color palette (50-950)
- **Gray**: Neutral grays for text and backgrounds
- **Semantic**: Success, warning, error, and info colors

### Typography

- **Font Families**: System fonts with fallbacks
- **Font Sizes**: Responsive scale from xs to 6xl
- **Font Weights**: Light, normal, medium, semibold, bold

### Spacing

- **Padding/Margin**: Consistent 4px base unit
- **Breakpoints**: Mobile-first responsive design
- **Grid**: 12-column responsive grid system

## 🔧 Development

### Adding New Components

1. **Create the component file**

   ```bash
   # For atoms
   mkdir src/components/atoms/NewComponent
   touch src/components/atoms/NewComponent/NewComponent.vue
   touch src/components/atoms/NewComponent/NewComponent.stories.js
   ```

2. **Follow the component structure**

   ```vue
   <template>
     <!-- Component markup -->
   </template>

   <script setup>
   // Component logic
   </script>

   <style scoped>
   /* Component-specific styles */
   </style>
   ```

3. **Create Storybook stories**

   ```javascript
   import NewComponent from "./NewComponent.vue";

   export default {
     title: "Atoms/NewComponent",
     component: NewComponent,
     argTypes: {
       // Define component props
     },
   };
   ```

### Component Guidelines

- **Accessibility**: Always include proper ARIA attributes
- **Responsive**: Design mobile-first with progressive enhancement
- **Consistent**: Follow established patterns and naming conventions
- **Documented**: Include comprehensive Storybook documentation
- **Tested**: Write tests for component behavior and accessibility

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following our coding standards
4. **Add tests** for new functionality
5. **Update documentation** as needed
6. **Submit a pull request**

### Code Standards

- Use TypeScript for type safety
- Follow Vue 3 Composition API patterns
- Write semantic HTML with proper accessibility
- Use Tailwind utilities for styling
- Include Storybook documentation
- Write comprehensive tests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Storybook](https://storybook.js.org/) - Component development environment
- [HeadlessUI](https://headlessui.com/) - Unstyled, accessible UI components
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 📞 Support

- **Documentation**: Check Storybook at `http://localhost:6006`
- **Issues**: Report bugs and request features on GitHub
- **Discussions**: Join our community discussions
- **Email**: Contact us at support@example.com

---

Built with ❤️ using Vue.js, Tailwind CSS, and Storybook
