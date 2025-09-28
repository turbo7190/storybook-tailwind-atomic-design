<template>
  <button
    :type="type"
    :class="`inline-flex justify-center items-center btn-${
      variant || 'primary'
    } btn-${
      size || 'md'
    } ${rounded} ${customClass} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 ${
      disabled ? 'cursor-not-allowed hover:bg-opacity-100' : ''
    }`"
    :disabled="disabled"
    @click="click"
  >
    <slot v-if="leading" />
    {{ content }}
    <slot v-if="!leading" />
  </button>
</template>

<script>
import { computed } from "vue";
/**
- Use a button for actions within applications
- different variants i.e. primary, secondary etc. and sizes supported
**/
export default {
  name: "Button",
  props: {
    /**
    used to provide type like button or submit. By default button is set.
    */
    type: {
      type: String,
      default: "button",
    },
    /**
    Button comes in different sizes like  sm, md, lg and xl. By default md is set.
    */
    size: {
      type: String,
      default: "",
    },
    /**
    Used this prop to assign custom classes to button
    */
    customClass: {
      type: String,
      default: "",
    },
    /**
    Text to be shown within button
    */
    content: {
      type: String,
      default: "",
    },
    /**
    switch between different variants i.e. primary, secondary, success, danger and themed
    */
    variant: {
      type: String,
      default: "primary",
    },
    /**
    Used for rounding corners of buttons. if set rounded-full is applied otherwise rounded is applied
    */
    isRounded: {
      type: Boolean,
      default: false,
    },

    click: {
      type: Function,
      default: () => {},
    },

    leading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      rounded: computed(() => {
        return `${props.isRounded ? "rounded-full" : "rounded"}`;
      }),
    };
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Reset button defaults */
button {
  @apply border-0 outline-none;
}

.btn-primary {
  @apply bg-primary-600 text-white hover:bg-primary-500 border-0;
}
.btn-secondary {
  @apply text-gray-700 bg-white hover:text-gray-500 border border-gray-300 hover:bg-gray-50;
}
.btn-success {
  @apply bg-green-500 hover:bg-green-700 text-white border-0;
}
.btn-danger {
  @apply bg-red-500 hover:bg-red-700 text-white border-0;
}
.btn-themed {
  @apply bg-primary-500 hover:opacity-80 text-white border-0;
}
.btn-sm {
  @apply px-2 py-0 text-xs font-medium;
}
.btn-md {
  @apply px-4 py-2 text-sm font-medium;
}
.btn-lg {
  @apply px-6 py-2 text-base font-medium;
}
.btn-xl {
  @apply px-8 py-3 text-base font-medium;
}
</style>
