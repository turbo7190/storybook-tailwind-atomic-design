<template>
  <span class="inline-block relative">
    <Avatar
      :size="size"
      :is-circle="isCircle"
      :src="src"
      :username="username"
    />
    <Badge
      :size="badgeSize"
      :bg-color="badgeBgColor"
      :bg-weight="badgeBgWeight"
      :is-top="isTop"
      :is-right="isRight"
      class="ring-2 ring-white"
    />
  </span>
</template>

<script>
import { reactive, computed } from "vue";
import Avatar from "../../atoms/Avatar/Avatar.vue";
import Badge from "../../atoms/Badge/Badge.vue";

export default {
  name: "AvatarWithBadge",
  components: {
    Avatar,
    Badge,
  },
  props: {
    /**
    Avatar comes in 5 sizes. By default 8 is set
    */
    size: {
      type: [String, Number],
      default: "8",
    },
    /**
    Used to switch between square and circle avatar. By default circle avatar is shown
    */
    isCircle: {
      type: Boolean,
    },
    /**
    The URL of the Avatar image
    */
    src: {
      type: String,
      default: null,
    },
    /**
      Avatar fallbacks to user initials if no name is provided
    */
    username: {
      type: String,
      required: true,
    },
    /**
    Badge comes in numeric sizes. By default 2 is set
    */
    badgeSize: {
      type: [String, Number],
      default: "2",
    },
    /**
    background color of badge. By default green is set
    */
    badgeBgColor: {
      type: String,
      default: "",
    },
    /**
    background color intensity. These are multiples of 100 Range [100-800]. by default 100 is set.
    */
    badgeBgWeight: {
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
  },
  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    };
  },
};
</script>
