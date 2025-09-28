<template>
  <a
    :href="url"
    :key="linkKey"
    :aria-current="ariaCurreent"
    :class="[
      sizeClasses,
      colorClasses,
      alignClasses,
      transformClasses,
      decorationClasses,
      weightClasses,
      hoverColorClasses,
      hoverBgClasses,
      focusColorClasses,
      focusBgClasses,
      customClass,
    ]"
  >
    <slot v-if="leading" />
    {{ content }}
    <slot v-if="!leading" />
  </a>
</template>

<script>
import { computed } from "vue";
/**
- Use for links with text
- options to customize size,color, content,alignment,transformation, decoration
**/

export default {
  name: "Link",
  props: {
    /**
      sets url of link. Default is #
      */
    url: {
      type: String,
      default: "#",
    },
    linkKey: {
      type: String,
      default: "",
    },
    ariaCurreent: {
      type: String,
      default: "",
    },
    /**
      sets size of link text from xs to 9xl. Default is base
      */
    size: {
      type: String,
      default: "",
    },
    /**
      sets color of link text.
      */
    color: {
      type: String,
      default: "",
    },
    /**
      sets content of link.
      */
    content: {
      type: String,
      default: "",
    },
    /**
      sets alignment of link text i.e. left,right,center
      */
    align: {
      type: String,
      default: "",
    },
    /**
      sets tranformation options of link text i.e. uppercase, lowercase etc.
      */
    transform: {
      type: String,
      default: "",
    },
    /**
      sets decoration options of link text i.e. underline, strikethrough etc.
      */
    decoration: {
      type: String,
      default: "",
    },
    /**
      used to add additional classes to link text like letter spacing
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
    /**
      sets hover color of link text.
      */
    hoverColor: {
      type: String,
      default: "",
    },
    /**
      sets focus color of link text.
      */
    focusColor: {
      type: String,
      default: "",
    },
    /**
      sets hover background color of link text.
      */
    hoverBg: {
      type: String,
      default: "",
    },
    /**
      sets focus background color of link text.
      */
    focusBg: {
      type: String,
      default: "",
    },
    /**
     * to show content in leading slot
     */
    leading: {
      type: Boolean,
      default: false,
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

    const hoverColorClasses = computed(() => {
      if (!props.hoverColor) return "";

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
      };
      return hoverColorMap[props.hoverColor] || "";
    });

    const hoverBgClasses = computed(() => {
      if (!props.hoverBg) return "";

      const hoverBgMap = {
        gray: "hover:bg-gray-500",
        "gray-500": "hover:bg-gray-500",
        "gray-400": "hover:bg-gray-400",
        "gray-600": "hover:bg-gray-600",
        red: "hover:bg-red-500",
        "red-500": "hover:bg-red-500",
        green: "hover:bg-green-500",
        "green-500": "hover:bg-green-500",
        blue: "hover:bg-blue-500",
        "blue-500": "hover:bg-blue-500",
        black: "hover:bg-black",
        white: "hover:bg-white",
      };
      return hoverBgMap[props.hoverBg] || "";
    });

    const focusColorClasses = computed(() => {
      if (!props.focusColor) return "";

      const focusColorMap = {
        black: "focus:text-black",
        white: "focus:text-white",
        gray: "focus:text-gray-500",
        "gray-500": "focus:text-gray-500",
        red: "focus:text-red-500",
        "red-500": "focus:text-red-500",
        green: "focus:text-green-500",
        "green-500": "focus:text-green-500",
        blue: "focus:text-blue-500",
        "blue-500": "focus:text-blue-500",
      };
      return focusColorMap[props.focusColor] || "";
    });

    const focusBgClasses = computed(() => {
      if (!props.focusBg) return "";

      const focusBgMap = {
        gray: "focus:bg-gray-500",
        "gray-500": "focus:bg-gray-500",
        red: "focus:bg-red-500",
        "red-500": "focus:bg-red-500",
        green: "focus:bg-green-500",
        "green-500": "focus:bg-green-500",
        blue: "focus:bg-blue-500",
        "blue-500": "focus:bg-blue-500",
        black: "focus:bg-black",
        white: "focus:bg-white",
      };
      return focusBgMap[props.focusBg] || "";
    });

    return {
      sizeClasses,
      colorClasses,
      alignClasses,
      transformClasses,
      decorationClasses,
      weightClasses,
      hoverColorClasses,
      hoverBgClasses,
      focusColorClasses,
      focusBgClasses,
    };
  },
};
</script>
