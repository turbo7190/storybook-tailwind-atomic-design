<template>
  <div class="relative w-full">
    <div class="absolute inset-0 flex items-center w-full">
      <div class="w-full bg-gray-300 h-[1px]" />
    </div>
    <div :class="`relative flex justify-${position}`">
      <Icon
        v-if="isIcon"
        :name="iconName"
        size="5"
        :color="textColor"
        custom-class="bg-white"
      ></Icon>
      <Text
        v-if="label"
        size="sm"
        :color="textColor"
        :content="label"
        custom-class="px-2 bg-white"
      ></Text>
    </div>
  </div>
</template>

<script>
/**
- divider with label and icon
- options to hide label or icon
- iconName to show dynamic icon
**/
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    Text,
    Icon,
  },
  props: {
    /**
    label to show with divider
    */
    label: {
      type: String,
      default: "",
    },
    /**
    flag to toggle visibility of icon
    */
    isIcon: {
      type: Boolean,
      default: false,
    },
    /**
    position of text and icon in divider. chose from start, end and center
    */
    position: {
      type: String,
      default: "",
    },
    /**
      Name of icon to be displayed.
    */
    iconName: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "gray-500",
    },
  },
};
</script>
