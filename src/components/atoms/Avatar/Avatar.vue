<template>
  <!-- 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' -->
  <img
    v-if="src"
    :class="[sizeClasses, isCircle ? 'rounded-full' : 'rounded-md']"
    class="inline-block"
    :src="src"
    alt=""
  />
  <span
    v-else-if="username"
    :class="[sizeClasses, isCircle ? 'rounded-full' : 'rounded-md']"
    class="inline-flex items-center justify-center rounded-full bg-gray-500"
  >
    <span :class="textSizeClass" class="font-medium leading-none text-white"
      >{{ username && username.charAt(0).toUpperCase()
      }}{{
        username &&
        username.split(" ")[1] &&
        username.split(" ")[1].charAt(0).toUpperCase()
      }}</span
    >
  </span>
  <span
    v-else
    :class="[sizeClasses, isCircle ? 'rounded-full' : 'rounded-md']"
    class="inline-block rounded-full overflow-hidden bg-gray-100"
  >
    <svg
      class="h-full w-full text-gray-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </span>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
/**
- Use an avatar for attributing actions or content to specific users.
- username is required and is used to display initials in case src is not provided
- if src and username are not provided then placeholder-icon is shown
**/
export default {
  name: "Avatar",
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
      required: false,
    },
  },
  setup(props) {
    const data = reactive({
      avatarSizes: {
        6: "xs",
        8: "sm",
        9: "sm",
        10: "medium",
        12: "lg",
        14: "xl",
      },
    });

    const sizeClasses = computed(() => {
      const sizeMap = {
        6: "h-6 w-6",
        8: "h-8 w-8",
        9: "h-9 w-9",
        10: "h-10 w-10",
        12: "h-12 w-12",
        14: "h-14 w-14",
      };
      return sizeMap[String(props.size)] || "h-8 w-8";
    });

    const textSizeClass = computed(() => {
      const textSizeMap = {
        6: "text-xs",
        8: "text-sm",
        9: "text-sm",
        10: "text-base",
        12: "text-lg",
        14: "text-xl",
      };
      return textSizeMap[String(props.size)] || "text-sm";
    });

    return {
      ...toRefs(data),
      sizeClasses,
      textSizeClass,
    };
  },
};
</script>
