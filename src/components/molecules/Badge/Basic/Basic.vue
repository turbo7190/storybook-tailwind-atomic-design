<template>
  <span
    :class="`inline-flex items-center py-${py} bg-${bgColor} text-${textColor} px-${px} ${
      isRounded ? 'rounded' : 'rounded-full'
    }`"
  >
    <Icon
      v-if="isLeft"
      :name="iconName"
      :color="textColor"
      :hover-text-color="textColor"
      :size="iconSize"
    />
    <Text :content="label" :color="textColor" :size="textSize" />
    <Icon
      v-if="!isLeft"
      :name="iconName"
      :color="textColor"
      :hover-text-color="textColor"
      :size="iconSize"
    />
  </span>
</template>
<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
export default {
  name: "Basic",
  components: {
    Icon,
    Text,
  },
  props: {
    /**
    background color for badge
    */
    bgColor: {
      type: String,
      default: "",
    },
    /**
    text for badge
    */
    label: {
      type: String,
      default: "",
    },
    /**
    text color for badge and icon
    */
    textColor: {
      type: String,
      default: "",
    },
    /**
    text font size
    */
    textSize: {
      type: String,
      default: "xs",
    },
    /**
    icon size
    */
    iconSize: {
      type: String,
      default: "5",
    },
    /**
    horizontal padding for badge
    */
    px: {
      type: [String, Number],
      default: "",
    },
    /**
    vertical padding for badge
    */
    py: {
      type: [String, Number],
      default: "2",
    },
    /**
    switch between rounded and full rounded border for badge
    */
    isRounded: {
      type: Boolean,
      default: false,
    },
    /**
    use to switch position of icon left or right of label for badge
    */
    isLeft: {
      type: Boolean,
      default: false,
    },
    /**
    icon to be displayed inside badge
    */
    iconName: {
      type: String,
      default: "",
    },
  },
  // data() {
  //   return {
  //     style: computed(() => {
  //       return `bg-${this.bgColor} text-${this.textColor} px-${this.px} ${this.isRounded ? 'rounded' : 'rounded-full'}`
  //     })
  //   }
  // }
};
</script>
