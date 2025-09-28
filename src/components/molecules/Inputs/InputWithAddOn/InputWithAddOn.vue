<template>
  <div>
    <label
      for="company-website"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <div class="mt-1 flex rounded-md shadow-sm" :class="customClass">
      <span
        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
      >
        {{ addOn }}
      </span>
      <input
        type="text"
        v-model="inputValue"
        name="company-website"
        id="company-website"
        class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm border border-gray-300"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
/**
 * - Use this input form that have special prefix
 * - addOn is required, default value will be 'https:// '
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
     * Use to display the addon.
     */
    addOn: {
      type: String,
      required: true,
      default: "https://",
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
