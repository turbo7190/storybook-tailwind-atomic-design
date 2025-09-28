<template>
  <button
    type="button"
    class="
      inline-flex
      justify-center
      items-center
      px-4
      py-2
      border border-transparent
      text-sm
      font-medium
      shadow-sm
      text-white
      focus:outline-none
      focus:ring-2 focus:ring-offset-2
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
  props: ["label", "isRounded", "color", "customClass"],
  data() {
    return {
      style: computed(() => {
        return `${this.isRounded ? "rounded-full" : "rounded-md"} bg-${
          this.color
        }-600 hover:bg-${this.color}-700 focus:ring-${this.color}-500`;
      }),
    };
  },
};
</script>
