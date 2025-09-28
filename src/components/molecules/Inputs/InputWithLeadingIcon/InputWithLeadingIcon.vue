<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <Icon
          :name="icon"
          color="gray-400"
          hoverTextColor="gray-500"
          size="5"
        />
      </div>
      <input
        type="text"
        v-model="inputValue"
        class="focus:ring-primary-500 border px-3 py-2 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";

/**
 * - Use it if needs to show input form with leading icon
 * - icon is required
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
     * Use to specify leading icon. its required. ex: EnvelopeIcon
     */
    icon: {
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
