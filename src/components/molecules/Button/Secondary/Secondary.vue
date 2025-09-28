<template>
  <button
    type="button"
    class="
      inline-flex
      justify-center
      items-center
      px-4
      py-3
      border border-transparent
      text-base
      font-medium
      rounded-md
      text-primary-700
      bg-white
      hover:bg-primary-200
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
    "
    :class="style + ' ' + customClass"
  >
    {{ label }}
  </button>
</template>
<script>
import { computed } from "vue";

export default {
  name: "Primary",
  props: ["label", "isRounded", "customClass"],
  data() {
    return {
      style: computed(() => {
        return `${this.isRounded ? "rounded-full" : "rounded-md"}`;
      }),
    };
  },
};
</script>
