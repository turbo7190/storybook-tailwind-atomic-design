<template>
  <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm">
    <label
      for="name"
      class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
      >{{ label }}</label
    >
    <input
      type="text"
      v-model="inputValue"
      id="name"
      class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
      :placeholder="placeholder"
      :class="customClass"
    />
  </div>
</template>
<script>
/**
 * - Use it when it needs as all specs of form UI
 */
export default {
  props: {
    /**
     * Use to show what input form is for
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Placeholder of input form
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it to apply extra class to input form
     */
    customClass: {
      type: String,
      default: "",
    },
    /**
     * Use to catch dynamic value of input form
     */
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>
