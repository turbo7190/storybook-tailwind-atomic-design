<template>
  <button
    type="button"
    :class="customClass"
    class="
      inline-flex
      justify-center
      items-center
      px-3
      py-1.5
      border border-gray-300
      shadow-sm
      font-medium
      rounded-md
      text-gray-700
      bg-white
      hover:bg-gray-50
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
    "
  >
    {{ label }}
  </button>
</template>
<script>
export default {
  name: "White",
  props: ["label", "customClass"],
};
</script>
