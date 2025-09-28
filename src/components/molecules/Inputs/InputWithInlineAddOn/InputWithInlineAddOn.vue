<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <span class="text-gray-500 sm:text-sm"> {{ addOn }} </span>
      </div>
      <input
        type="text"
        v-model="inputValue"
        class="focus:ring-primary-500 focus:border-primary-500 block border px-3 py-2 w-full pl-16 sm:pl-14 sm:text-sm border-gray-300 rounded-md"
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
