<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <Icon
            :name="leadIcon"
            color="gray-400"
            hoverTextColor="gray-500"
            size="5"
          />
        </div>
        <input
          type="email"
          v-model="inputValue"
          :placeholder="placeholder"
          name="email"
          id="email"
          class="focus:ring-primary-500 focus:border-primary-500 border block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
          :class="customClass"
        />
      </div>
      <button
        type="button"
        class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
      >
        <Icon
          :name="btnIcon"
          color="gray-400"
          hoverTextColor="gray-500"
          size="5"
        />
        <span>{{ btnText }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";

/**
 * - Use when needs to show input form with leading icon and action button
 * - leadIcon, btnText, btnIcon are required.
 */
export default {
  components: {
    Icon,
  },
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
    /**
     * Use to show leading icon. required.
     */
    leadIcon: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Use to show button icon. required.
     */
    btnIcon: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Use to show button label. required.
     */
    btnText: {
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
