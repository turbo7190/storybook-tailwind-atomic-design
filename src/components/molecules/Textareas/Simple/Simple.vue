<template>
  <div>
    <label for="comment" class="block text-sm font-medium text-gray-700 mb-2">{{
      label
    }}</label>
    <div class="mt-1 rounded-md shadow-sm border border-gray-300">
      <textarea
        id="comment"
        v-model="inputValue"
        rows="4"
        :class="customClass"
        name="comment"
        :placeholder="placeholder"
        class="block w-full sm:text-sm px-3 py-2"
      />
    </div>
  </div>
</template>
<script>
/**
 * - Use it to show simple textarea
 */
export default {
  props: {
    /**
     * Use to show what textarea is for
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Placeholder of textarea
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it to apply extra class to textarea
     */
    customClass: {
      type: String,
      default: "",
    },
    /**
     * Use to catch dynamic value of textarea
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
