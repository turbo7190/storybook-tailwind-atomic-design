<template>
  <div>
    <label
      for="name"
      class="ml-px pl-4 block text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <div class="mt-1">
      <input
        type="text"
        name="name"
        id="name"
        v-model="inputValue"
        class="shadow-sm focus:ring-primary-500 border px-3 py-2 focus:border-primary-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
        :placeholder="placeholder"
        :class="customClass"
      />
    </div>
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
