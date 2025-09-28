<template>
  <img
    :src="src"
    :alt="alt"
    :class="[sizeClasses, roundedClasses, customClass]"
  />
</template>

<script>
import { computed } from "vue";
/**
- Use for img with text
- options to customize size,color, content,alignment,transformation, decoration
**/

export default {
  name: "Image",
  props: {
    /**
      sets url of image resource. Default is #
      */
    src: {
      type: String,
      default: "#",
    },
    /**
      set alt of image resource default is ''
      */
    alt: {
      type: String,
      default: "",
    },

    /**
     * set height of image resource, default is 8
     */
    height: {
      type: [String, Number],
      default: 8,
    },

    /**
     * set width of image resource, default is 8
     */
    width: {
      type: [String, Number],
      default: 8,
    },

    /**
     * set image as rounded image default is "none"
     */
    rounded: {
      type: String,
      default: "none",
    },

    /**
     * additional classes default is ""
     */
    customClass: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const sizeClasses = computed(() => {
      const heightMap = {
        4: "h-4",
        6: "h-6",
        8: "h-8",
        10: "h-10",
        12: "h-12",
        14: "h-14",
        16: "h-16",
        20: "h-20",
        24: "h-24",
        32: "h-32",
        40: "h-40",
        48: "h-48",
        56: "h-56",
        64: "h-64",
        full: "h-full",
      };

      const widthMap = {
        4: "w-4",
        6: "w-6",
        8: "w-8",
        10: "w-10",
        12: "w-12",
        14: "w-14",
        16: "w-16",
        20: "w-20",
        24: "w-24",
        32: "w-32",
        40: "w-40",
        48: "w-48",
        56: "w-56",
        64: "w-64",
        full: "w-full",
      };

      const heightClass = heightMap[String(props.height)] || "h-8";
      const widthClass = widthMap[String(props.width)] || "w-8";

      return `${heightClass} ${widthClass}`;
    });

    const roundedClasses = computed(() => {
      const roundedMap = {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      };

      return roundedMap[props.rounded] || "";
    });

    return {
      sizeClasses,
      roundedClasses,
    };
  },
};
</script>
