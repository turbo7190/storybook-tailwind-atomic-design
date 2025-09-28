<template>
  <button
    type="button"
    :class="`inline-flex items-center border border-transparent rounded-full shadow-sm text-${textColor} bg-${bgColor} hover:bg-${hoverBgColor} p-${padding} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${focusRingColor} ${customClass}`"
  >
    <Icon
      :name="iconName"
      :color="textColor"
      :size="iconSize"
      :is-outline="isOutline"
    />
  </button>
</template>

<script>
/**
-Fab button used for actions
- options to customize icon and button
- use padding to adjust size
**/
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  name: "Circular",
  components: {
    Icon,
  },
  props: {
    /**
      padding of button. can be used to adjust size.
      */
    padding: {
      type: String,
      default: "",
    },
    /**
      BackgroundColor of button. default is set to primary-600.
      */
    bgColor: {
      type: String,
      default: "primary-600",
    },
    /**
      Hover BackgroundColor of button. default is set to primary-700.
    */
    hoverBgColor: {
      type: String,
      default: "primary-700",
    },
    /**
      text and icon color of button. default is set to white.
    */
    textColor: {
      type: String,
      default: "white",
    },
    /**
      icon to be used inside button. Default is set to PlusIconSolid
    */
    iconName: {
      type: String,
      default: "PlusIcon",
    },
    /**
      Size of icon. Default is set to 5
    */
    iconSize: {
      type: String,
      default: "5",
    },
    /**
      used to switch between outline and solid icons.
    */
    isOutline: {
      type: Boolean,
      default: false,
    },
    /**
      used to apply custom class.
    */
    customClass: {
      type: String,
      default: "",
    },
    /**
      used to apply focus ring color class.
    */
    focusRingColor: {
      type: String,
      default: "primary-500",
    },
  },
};
</script>
