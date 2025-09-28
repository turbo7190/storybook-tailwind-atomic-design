<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <select
          v-model="inputOptionValue"
          autocomplete="country"
          class="border-none focus:ring-primary-500 focus:border-primary-500 h-full py-0 pl-3 pr-5 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
        >
          <option v-for="option in options" :key="option">
            {{ option }}
          </option>
        </select>
      </div>
      <input
        v-model="inputValue"
        type="text"
        class="focus:ring-primary-500 focus:border-primary-500 block border px-3 py-2 w-full pl-20 sm:text-sm border-gray-300 rounded-md"
        :class="customClass"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
<script>
export default {
  /**
   * - Use it when selected option needs for input value, ex: country code for phone number.
   * - options is required.
   */
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
     * Use to apply extra class to input form
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
    /**
     * Use to get dynamic value of select form
     */
    optionValue: {
      type: String,
      default: "",
    },
    /**
     * Use to show options of select form. its required.
     */
    options: {
      type: Array,
      default: () => [],
      required: true,
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
    inputOptionValue: {
      get() {
        return this.optionValue;
      },
      set(newValue) {
        this.$emit("update:optionValue", newValue);
      },
    },
  },
};
</script>
