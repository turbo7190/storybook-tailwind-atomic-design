<template>
  <div>
    <label for="search" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1 relative flex items-center">
      <input
        type="text"
        v-model="inputValue"
        :placeholder="placeholder"
        :class="customClass"
        name="search"
        id="search"
        class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block px-3 py-2 w-full pr-12 sm:text-sm border border-gray-300 rounded-md"
      />
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd
          class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"
        >
          {{ shortcut }}
        </kbd>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * - Use it to show input form with keyboard shortcut
 * - shortcut is required.
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
     * placeholder of input form
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use to apply extra class of input form
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
     * Use to show keyboard shortcut of action in input form. required.
     */
    shortcut: {
      type: String,
      default: "",
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
  },
};
</script>
