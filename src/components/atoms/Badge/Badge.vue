<template>
  <span
    :class="[sizeClasses, bgClasses, positionClasses, borderClasses]"
    class="absolute block rounded-full"
  />
</template>

<script>
import { computed } from "vue";
/**
- Use a badge with avatar or any other component for showing status.
- isTop and isRight are used for position
- bgColor is used for color and bgWeight is used for intensity
**/
export default {
  name: "Badge",
  props: {
    /**
    Badge comes in numeric sizes. By default 2 is set
    */
    size: {
      type: [String, Number],
      default: "2",
    },
    /**
    background color of badge. By default green is set
    */
    bgColor: {
      type: String,
      default: "",
    },
    /**
    background color intensity. These are multiples of 100 Range [100-800]. by default 100 is set.
    */
    bgWeight: {
      type: [String, Number],
      default: "",
    },
    /**
    Used to switch between top and bottom position. By default top is set.
    */
    isTop: {
      type: Boolean,
      default: false,
    },
    /**
    Used to switch between left and right position. By default right is set.
    */
    isRight: {
      type: Boolean,
      default: false,
    },
    /**
    Used to set badge border width.Its used with borderColor
    */
    borderWidth: {
      type: [String, Number],
      default: "",
    },
    /**
    Used to set badge border color. 
    */
    borderColor: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const sizeClasses = computed(() => {
      const sizeMap = {
        1: "h-1 w-1",
        2: "h-2 w-2",
        3: "h-3 w-3",
        4: "h-4 w-4",
        5: "h-5 w-5",
        6: "h-6 w-6",
      };
      return sizeMap[String(props.size)] || "h-2 w-2";
    });

    const bgClasses = computed(() => {
      if (!props.bgColor || !props.bgWeight) return "";

      const colorMap = {
        gray: {
          100: "bg-gray-100",
          200: "bg-gray-200",
          300: "bg-gray-300",
          400: "bg-gray-400",
          500: "bg-gray-500",
          600: "bg-gray-600",
          700: "bg-gray-700",
          800: "bg-gray-800",
          900: "bg-gray-900",
        },
        red: {
          100: "bg-red-100",
          200: "bg-red-200",
          300: "bg-red-300",
          400: "bg-red-400",
          500: "bg-red-500",
          600: "bg-red-600",
          700: "bg-red-700",
          800: "bg-red-800",
          900: "bg-red-900",
        },
        green: {
          100: "bg-green-100",
          200: "bg-green-200",
          300: "bg-green-300",
          400: "bg-green-400",
          500: "bg-green-500",
          600: "bg-green-600",
          700: "bg-green-700",
          800: "bg-green-800",
          900: "bg-green-900",
        },
        blue: {
          100: "bg-blue-100",
          200: "bg-blue-200",
          300: "bg-blue-300",
          400: "bg-blue-400",
          500: "bg-blue-500",
          600: "bg-blue-600",
          700: "bg-blue-700",
          800: "bg-blue-800",
          900: "bg-blue-900",
        },
        yellow: {
          100: "bg-yellow-100",
          200: "bg-yellow-200",
          300: "bg-yellow-300",
          400: "bg-yellow-400",
          500: "bg-yellow-500",
          600: "bg-yellow-600",
          700: "bg-yellow-700",
          800: "bg-yellow-800",
          900: "bg-yellow-900",
        },
      };

      const color = colorMap[props.bgColor];
      if (!color) return "";

      return color[String(props.bgWeight)] || "";
    });

    const positionClasses = computed(() => {
      const vertical = props.isTop ? "top-0" : "bottom-0";
      const horizontal = props.isRight ? "right-0" : "left-0";
      return `${vertical} ${horizontal}`;
    });

    const borderClasses = computed(() => {
      if (!props.borderWidth || !props.borderColor) return "";

      const borderWidthMap = {
        1: "border",
        2: "border-2",
        4: "border-4",
      };

      const borderColorMap = {
        white: "border-white",
        black: "border-black",
        gray: "border-gray-500",
        red: "border-red-500",
        green: "border-green-500",
        blue: "border-blue-500",
        yellow: "border-yellow-500",
      };

      const widthClass = borderWidthMap[String(props.borderWidth)] || "";
      const colorClass = borderColorMap[props.borderColor] || "";

      const result = `${widthClass} ${colorClass}`.trim();
      console.log(
        "Badge border classes:",
        result,
        "width:",
        props.borderWidth,
        "color:",
        props.borderColor
      );

      return result;
    });

    return {
      sizeClasses,
      bgClasses,
      positionClasses,
      borderClasses,
    };
  },
};
</script>
