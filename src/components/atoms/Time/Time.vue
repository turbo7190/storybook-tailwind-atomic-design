<template>
  <time
    :datetime="datetime"
    :class="[
      sizeClasses,
      colorClasses,
      alignClasses,
      transformClasses,
      decorationClasses,
      weightClasses,
      customClass,
    ]"
    >{{ content }}</time
  >
</template>

<script>
import { computed } from "vue";
/**
- Use Text element for each text in application from headings to paragraphs
- options to customize size,color, content,alignment,transformation, decoration
**/

export default {
  name: "Time",
  props: {
    /**
     * set date time
     */
    datetime: {
      type: [String, Date],
      default: "",
    },
    /**
    sets size of text from xs to 9xl. Default is base
    */
    size: {
      type: String,
      default: "",
    },
    /**
    sets color of text.
    */
    color: {
      type: String,
      default: "",
    },
    /**
    sets content of text.
    */
    content: {
      type: String,
      default: "",
    },
    /**
    sets alignment of text i.e. left,right,center
    */
    align: {
      type: String,
      default: "",
    },
    /**
    sets tranformation options of text i.e. uppercase, lowercase etc.
    */
    transform: {
      type: String,
      default: "",
    },
    /**
    sets decoration options of text i.e. underline, strikethrough etc.
    */
    decoration: {
      type: String,
      default: "",
    },
    /**
    used to add additional classes to text like letter spacing
    */
    customClass: {
      type: String,
      default: "",
    },
    /**
    sets font weight.
    */
    weight: {
      type: String,
      default: "medium",
    },
  },
  setup(props) {
    const sizeClasses = computed(() => {
      const sizeMap = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
      };
      return sizeMap[props.size] || "";
    });

    const colorClasses = computed(() => {
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
      };
      return colorMap[props.color] || "";
    });

    const alignClasses = computed(() => {
      const alignMap = {
        left: "text-left",
        right: "text-right",
        center: "text-center",
      };
      return alignMap[props.align] || "";
    });

    const transformClasses = computed(() => {
      const transformMap = {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
        "normal-case": "normal-case",
      };
      return transformMap[props.transform] || "";
    });

    const decorationClasses = computed(() => {
      const decorationMap = {
        underline: "underline",
        "line-through": "line-through",
        "no-underline": "no-underline",
      };
      return decorationMap[props.decoration] || "";
    });

    const weightClasses = computed(() => {
      const weightMap = {
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      };
      return weightMap[props.weight] || "font-medium";
    });

    return {
      sizeClasses,
      colorClasses,
      alignClasses,
      transformClasses,
      decorationClasses,
      weightClasses,
    };
  },
};
</script>
