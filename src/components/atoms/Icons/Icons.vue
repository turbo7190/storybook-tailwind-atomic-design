<template>
  <component
    :is="getIconComponent"
    :key="iconKey"
    v-if="isLoaded && name && getIconComponent"
    :class="[sizeClasses, colorClasses, hoverColorClasses, customClass]"
    :aria-hidden="ariaHidden"
  />
  <div v-else-if="isLoaded && name" class="text-red-500 text-sm">
    Icon "{{ name }}" not found
  </div>
</template>

<script>
/**
- Use an icon with button or as it is.
- isOutline is used to switch between outline and solid icons
**/

import * as heroIcons from "@heroicons/vue/24/solid";
import * as heroOutlineIcons from "@heroicons/vue/24/outline";

export default {
  props: {
    /**
     name of icon to use from hero icons
    */
    name: {
      type: String,
      default: null,
    },
    iconKey: {
      type: String,
      default: "",
    },
    /**
    sets width and height of an icon. Default is 5
    */
    size: {
      type: [String, Number],
      default: "5",
    },
    /**
    Custom class is used to add custom classes like padding margins etc
    */
    customClass: {
      type: String,
      default: "",
    },
    /**
    color of icon. default is black
    */
    color: {
      type: String,
      default: "black",
    },
    /**
    isOutline is used to switch between outline and solid icons
    */
    isOutline: {
      type: Boolean,
      default: false,
    },
    /**
    for providing onHover color
    */
    hoverTextColor: {
      type: String,
      default: "white",
    },
    /**
    for Custom Icons defalut false
    */
    isCustomIcon: {
      type: Boolean,
      default: false,
    },

    /**
     * for arialhidden default false
     */

    ariaHidden: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      isLoaded: false,
      heroIcons: heroIcons,
      heroOutlineIcons: heroOutlineIcons,
    };
  },
  computed: {
    getIconComponent() {
      if (!this.name) return null;

      if (this.isCustomIcon) {
        return this.name;
      }

      if (this.isOutline) {
        return this.heroOutlineIcons[this.name] || null;
      }

      return this.heroIcons[this.name] || null;
    },
    sizeClasses() {
      const sizeMap = {
        4: "h-4 w-4",
        5: "h-5 w-5",
        6: "h-6 w-6",
        7: "h-7 w-7",
        8: "h-8 w-8",
        9: "h-9 w-9",
        10: "h-10 w-10",
        12: "h-12 w-12",
        16: "h-16 w-16",
        20: "h-20 w-20",
        24: "h-24 w-24",
      };
      return sizeMap[this.size] || "h-5 w-5";
    },
    colorClasses() {
      const colorMap = {
        black: "text-black",
        white: "text-white",
        gray: "text-gray-500",
        "gray-500": "text-gray-500",
        "gray-400": "text-gray-400",
        "gray-600": "text-gray-600",
        "gray-700": "text-gray-700",
        "gray-800": "text-gray-800",
        red: "text-red-500",
        "red-500": "text-red-500",
        "red-400": "text-red-400",
        "red-600": "text-red-600",
        green: "text-green-500",
        "green-500": "text-green-500",
        "green-400": "text-green-400",
        "green-600": "text-green-600",
        blue: "text-blue-500",
        "blue-500": "text-blue-500",
        "blue-400": "text-blue-400",
        "blue-600": "text-blue-600",
        yellow: "text-yellow-500",
        "yellow-500": "text-yellow-500",
        "yellow-400": "text-yellow-400",
        "yellow-600": "text-yellow-600",
      };
      return colorMap[this.color] || "text-black";
    },
    hoverColorClasses() {
      if (!this.hoverTextColor || this.hoverTextColor === this.color) return "";

      const hoverColorMap = {
        black: "hover:text-black",
        white: "hover:text-white",
        gray: "hover:text-gray-500",
        "gray-500": "hover:text-gray-500",
        "gray-400": "hover:text-gray-400",
        "gray-600": "hover:text-gray-600",
        "gray-700": "hover:text-gray-700",
        "gray-800": "hover:text-gray-800",
        red: "hover:text-red-500",
        "red-500": "hover:text-red-500",
        "red-400": "hover:text-red-400",
        "red-600": "hover:text-red-600",
        green: "hover:text-green-500",
        "green-500": "hover:text-green-500",
        "green-400": "hover:text-green-400",
        "green-600": "hover:text-green-600",
        blue: "hover:text-blue-500",
        "blue-500": "hover:text-blue-500",
        "blue-400": "hover:text-blue-400",
        "blue-600": "hover:text-blue-600",
        yellow: "hover:text-yellow-500",
        "yellow-500": "hover:text-yellow-500",
        "yellow-400": "hover:text-yellow-400",
        "yellow-600": "hover:text-yellow-600",
      };
      return hoverColorMap[this.hoverTextColor] || "";
    },
  },
  mounted() {
    this.isLoaded = true;
  },
};
</script>
